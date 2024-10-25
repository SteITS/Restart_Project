package com.restart.service;

import com.restart.dto.UserDto;
import com.restart.entity.Role;
import com.restart.entity.User;
import com.restart.repository.RoleRepository;
import com.restart.repository.UserRepository;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;
    private RoleRepository roleRepository;
    private PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserRepository userRepository,
                           RoleRepository roleRepository,
                           PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }

    //Metodo per salvare un nuovo utente
    @Override
    public void saveUser(UserDto userDto) {
        // Crea un nuovo oggetto User
        User user = new User();

        // Imposta nome completo concatenando nome e cognome dal DTO
        user.setName(userDto.getFirstName() + " " + userDto.getLastName());

        // Imposta email
        user.setEmail(userDto.getEmail());

        // Codifica la password utilizzando Spring Security
        user.setPassword(passwordEncoder.encode(userDto.getPassword()));

        // Imposta il numero di telefono
        user.setPhone(userDto.getPhone());

        // Imposta la data di nascita
        user.setDob(userDto.getDob());


        // Recupera il ruolo "ROLE_ADMIN" dal repository
        Role role = roleRepository.findByName("ROLE_ADMIN");

        // Se il ruolo non esiste, crealo e salvalo
        if (role == null) {
            role = checkRoleExist();
        }

        // Assegna il ruolo all'utente
        user.setRoles(Arrays.asList(role));

        // Salva l'utente nel database
        userRepository.save(user);
    }

    @Override
    public Boolean checkEmail(String email) {
        String emailRegex = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$";
        Pattern pattern = Pattern.compile(emailRegex);
        Matcher matcher = pattern.matcher(email);
        return matcher.matches();
    }

    @Override
    public Boolean checkPassword(String password) {
        String passwordRegex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&_]).{12,}$";
        Pattern pattern = Pattern.compile(passwordRegex);
        Matcher matcher = pattern.matcher(password);
        return matcher.matches() && password.length() >= 12;
    }

    //Metodo per recuperare l'utente attualmente autenticato nella sessione
    @Override
    public User getAuthenticatedUser() {
        // Recupera l'autenticazione corrente dal SecurityContext
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        // Ottiene l'email dell'utente attualmente autenticato
        String currentUserEmail = authentication.getName();

        // Cerca l'utente con l'email recuperata
        return findUserByEmail(currentUserEmail);
    }

    //Metodo per cercare l'utente tramite email
    @Override
    public User findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }


    // Recupera tutti gli utenti dal repository
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Cerca l'utente con l'ID specificato
    @Override
    public Optional<User> findUserById(Integer id) {
        return userRepository.findById(id);
    }

    // Recupera tutti gli utenti dal repository
    @Override
    public List<UserDto> findAllUsers() {
        List<User> users = userRepository.findAll();

        // Converte la lista di utenti in una lista di UserDto
        return users.stream()
                .map((user) -> mapToUserDto(user))
                .collect(Collectors.toList());
    }

    //Metodo per ricercare il DTO di uno specifico utente
    public UserDto mapToUserDto(User user) {
        // Crea un nuovo oggetto UserDto
        UserDto userDto = new UserDto();

        // Separa nome e cognome dall'attributo "name" dell'utente
        String[] str = user.getName().split(" ");
        userDto.setFirstName(str[0]);
        userDto.setLastName(str[1]);

        // Imposta l'email
        userDto.setEmail(user.getEmail());

        // Imposta la data di nascita
        userDto.setDob(user.getDob());

        // Imposta il numero di telefono
        userDto.setPhone(user.getPhone());

        // Restituisce il DTO dell'utente
        return userDto;
    }

    //Metodo per verificare se un ruolo per gli utenti esiste già
    private Role checkRoleExist() {
        // Crea un nuovo oggetto Role con nome "ROLE_ADMIN"
        Role role = new Role();
        role.setName("ROLE_ADMIN");

        // Salva il ruolo nel database e restituiscilo
        return roleRepository.save(role);
    }
    
    // Metodo per eliminare un utente dal database in base all'ID
    @Override
    public void deleteUserById(Integer id) {
        userRepository.deleteById(id);
    }
    
    // Metodo per aggiornare un utente nel database
    @Override
    public void updateUser(UserDto userDto) {
        // Find the existing user by ID
        Optional<User> existingUserOptional = userRepository.findById(userDto.getId());
        if (existingUserOptional.isPresent()) {
            User existingUser = existingUserOptional.get();
            // Update the fields
            existingUser.setName(userDto.getFirstName() + " " + userDto.getLastName());
            existingUser.setEmail(userDto.getEmail());
            if (userDto.getPassword() != null && !userDto.getPassword().isEmpty()) {
                existingUser.setPassword(passwordEncoder.encode(userDto.getPassword()));
            }
            existingUser.setDob(userDto.getDob());
            existingUser.setPhone(userDto.getPhone());
            // Save the updated user
            userRepository.save(existingUser);
        } else {
            throw new RuntimeException("User not found with ID: " + userDto.getId());
        }
    }

    @Override
    public void updateSelf(UserDto userDto) {
            User updatedUser = getAuthenticatedUser();
            // Update the fields
            updatedUser.setName(userDto.getFirstName() + " " + userDto.getLastName());
            updatedUser.setEmail(userDto.getEmail());
            if (userDto.getPassword() != null
                    && !userDto.getPassword().isEmpty()) {
                updatedUser.setPassword(passwordEncoder.encode(userDto.getPassword()));
            }
            updatedUser.setDob(userDto.getDob());
            updatedUser.setPhone(userDto.getPhone());
            // Save the updated user
            userRepository.save(updatedUser);
    }
}
package com.restart.controller;

import com.restart.entity.*;
import com.restart.service.DeckServiceImpl;
import com.restart.service.RatingServiceImpl;
import com.restart.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class RatingController {

    @Autowired
    private RatingServiceImpl ratingService;
    @Autowired
    private UserServiceImpl userService;
    @Autowired
    private DeckServiceImpl deckService;

    //Restituisce i rating di un deck
    @PostMapping("/deb/getRatingsByDeck")
    public List<Rating> getRatingsByDeckId(@RequestBody Deck deck) {
        return ratingService.getRatingsByDeckId(deck.getId());
    }

    //Recupera tutti i rating
    @GetMapping("/deb/ratings")
    public List<Rating> getAllRatings() {
        return ratingService.getAllRatings();
    }

    //Aggiunge un rating
    @PostMapping("/auth/updateRating")
    ResponseEntity<Rating> updateRating(@RequestBody Rating ratingRequest) {

        User user = userService.getAuthenticatedUser();
        Deck deck = deckService.getDeckById(ratingRequest.getId().getIdDeck())
                .orElseThrow(() -> new RuntimeException("Deck not found with ID: " + ratingRequest.getId().getIdDeck()));

        // associa deck e utente
        ratingRequest.setUser(user);
        ratingRequest.getId().setIdUser(user.getId());
        ratingRequest.setDeck(deck);


        // Salva il rating
            Rating savedRating = ratingService.saveRating(ratingRequest);
            return ResponseEntity.ok(savedRating);

    }
    //Rimuove un rating
    @PostMapping("/auth/removeRating")
    public ResponseEntity<String> removeRating(@RequestBody Rating ratingRequest){
        // Recupera l'utente autenticato
        User user = userService.getAuthenticatedUser();
        // Recupera il deck
        Deck deck = deckService.getDeckById(ratingRequest.getId().getIdDeck())
                .orElseThrow(() -> new RuntimeException("Deck not found with ID: " + ratingRequest.getId().getIdUser()));

        // Associa deck e utente
        ratingRequest.setUser(user);
        ratingRequest.getId().setIdUser(user.getId());
        ratingRequest.setDeck(deck);

        // Rimuove il rating
        try {
            ratingService.removeRating(ratingRequest);
            return ResponseEntity.ok("Rating rimosso con successo");
        } catch (Exception e) {
            return ResponseEntity.noContent().build();
        }
    }

}

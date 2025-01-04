package com.example.steamclone.Controlleur;


import com.example.steamclone.Model.Games;
import com.example.steamclone.ServiceImplement.gamesServImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Games")
public class GamesControlleur {
    @Autowired
    private gamesServImpl gamesServ;

    @GetMapping("/getAllGames")
    public List<Games> GetAllGames() {
        return gamesServ.GetAllGames();
    }

    @GetMapping("/GetById/{id}")
    public Games GetById(@PathVariable Long id) {
        return gamesServ.GetGameById(id);
    }

    @PostMapping("/AddGames")
    public Games AddGames(@RequestBody Games games) {
        return gamesServ.AddGame(games);
    }

    @PutMapping("/UpdateGames/{id}")
    public ResponseEntity<Games> updateGamesById(@PathVariable Long id, @RequestBody Games games) {
        Games existingGames = gamesServ.GetGameById(id);
        if (existingGames != null) {
            existingGames.setTitle(games.getTitle());
            existingGames.setDescription(games.getDescription());
            existingGames.setImage(games.getImage());
            existingGames.setCategory1(games.getCategory1());
            existingGames.setCategory2(games.getCategory2());
            existingGames.setCategory3(games.getCategory3());
            existingGames.setDate(games.getDate());
            existingGames.setEvals(games.getEvals());
            existingGames.setEvaluation(games.getEvaluation());
            existingGames.setEdition(games.getEdition());

            Games savedGames = gamesServ.UpdateGame(existingGames);
            return ResponseEntity.ok(savedGames);
        } else {
            Games savedGames = gamesServ.AddGame(games);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedGames);
        }
    }
    @DeleteMapping("DeleteGame/{id}")
    public ResponseEntity<?> DeleteGame(@PathVariable Long id) {
        Games existgame = gamesServ.GetGameById(id);
        if (existgame != null) {
            gamesServ.DeleteGame(id);
        }
        else {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }
        return ResponseEntity.ok("game was deleted successfully");
    }
}

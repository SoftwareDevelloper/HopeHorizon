package com.example.steamclone.ServiceImplement;

import com.example.steamclone.Model.Games;
import com.example.steamclone.Repository.GamesRepository;
import com.example.steamclone.Service.GamesService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class gamesServImpl implements GamesService

{
    @Autowired
    private GamesRepository repository;

    @Override
    public List<Games> GetAllGames() {
        return repository.findAll();
    }

    @Override
    public Games GetGameById(Long id) {
        return repository.findById(id).get();
    }

    @Override
    public Games AddGame(Games game) {
        return repository.save(game);
    }

    @Override
    public Games UpdateGame(Games game) {
        return repository.save(game);
    }

    @Override
    public void DeleteGame(Long id) {
        repository.deleteById(id);
    }
}

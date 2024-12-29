package com.example.steamclone.Service;

import com.example.steamclone.Model.Games;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public interface GamesService
{
    public List<Games> GetAllGames();
    public Games GetGameById(Long id);
    public Games AddGame(Games game);
    public Games UpdateGame(Games game);
    public void DeleteGame(Long id);


}

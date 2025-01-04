package com.example.steamclone.Service;

import com.example.steamclone.Model.Internote;
import org.springframework.data.relational.core.sql.In;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface InternoteServ
{
    public List<Internote> getInternotes();
    public Internote getInternote(Long id);
    public Internote addInternote(Internote internote);
    public Internote updateInternote(Internote internote);
    public void deleteInternote(Internote internote);
    public boolean getInternoteByEmail(String email);
    public boolean getInternoteByUsername(String username);
    public Internote validateCredentials(String email, String password);
}

package com.example.steamclone.ServiceImplement;

import com.example.steamclone.Model.Internote;
import com.example.steamclone.Repository.InternoteRepo;
import com.example.steamclone.Service.InternoteServ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InternoteServImpl implements InternoteServ
{
    @Autowired
    private InternoteRepo repo;

    @Override
    public List<Internote> getInternotes() {
        return  repo.findAll();
    }

    @Override
    public Internote getInternote(Long id) {
        return repo.findById(id).get();
    }

    @Override
    public Internote addInternote(Internote internote) {
        return repo.save(internote);
    }

    @Override
    public Internote updateInternote(Internote internote) {
        return repo.save(internote);
    }

    @Override
    public void deleteInternote(Internote internote) {
        repo.delete(internote);
    }

    public boolean getInternoteByEmail(String email)
    {
        return  repo.existsByEmail(email);

    }

    public boolean getInternoteByUsername(String username)
    {
        return  repo.existsByUsername(username);
    }

    public Internote validateCredentials(String email, String password)
    {
       return  repo.findByEmailAndPassword(email,password);
    }
}

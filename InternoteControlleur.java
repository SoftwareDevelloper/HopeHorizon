package com.example.steamclone.Controlleur;

import com.example.steamclone.Model.Games;
import com.example.steamclone.Model.Internote;
import com.example.steamclone.Service.InternoteServ;
import com.example.steamclone.ServiceImplement.InternoteServImpl;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.aspectj.weaver.patterns.IToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "https://locaalhost:4200",methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RequestMapping("/Internote")
public class InternoteControlleur
{
    @Autowired
    private InternoteServImpl internoteServ;

    @GetMapping("/GetAllInternote")
    public List<Internote> getAllInternote()
    {
        return internoteServ.getInternotes();
    }
    @GetMapping("/GetInternote/{id}")
    public Internote getInternote(@PathVariable Long id)
    {
        return internoteServ.getInternote(id);
    }
    @PostMapping("/AddInternote")
    public Internote AddInternote(@RequestBody Internote internote)
    {
        return internoteServ.addInternote(internote);
    }
    @PutMapping("/UpdateUsersPassword/{id}")
    public ResponseEntity<Internote> UpdateUsersPassword(@PathVariable Long id, @RequestBody Internote internote)
    {
         Internote existingUsers = internoteServ.getInternote(id);
         if (existingUsers != null)
         {
             existingUsers.setPassword(internote.getPassword());
             Internote savedUsers = internoteServ.updateInternote(existingUsers);
             return ResponseEntity.ok(savedUsers);
         }
         else {
             return ResponseEntity.notFound().build();
         }
    }
    @DeleteMapping("/DeleteInternote/{id}")
    public ResponseEntity<?> DeleteInternote(@PathVariable Long id)
    {
        Internote existInternote = internoteServ.getInternote(id);
        if (existInternote != null) {
            internoteServ.deleteInternote(existInternote);
        }
        else {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }
        return ResponseEntity.ok("Internote was deleted successfully");
    }
    @PostMapping("/RegisterUsers")
    public ResponseEntity<?> RegisterInternote(@RequestBody Internote internote) {
        if (internoteServ.getInternoteByEmail(internote.getEmail())) {
            return ResponseEntity.badRequest().body("User already exists with this email.");
        }

        if (internoteServ.getInternoteByUsername(internote.getUsername())) {
            return ResponseEntity.badRequest().body("User already exists with this username.");
        }

        internoteServ.addInternote(internote);
        return ResponseEntity.ok("User registered successfully");
    }


    @PostMapping("/Login")
    public ResponseEntity<?> LoginInternote(@RequestBody Internote internote,Long id)
    {
        Internote existInternote = internoteServ.validateCredentials(internote.getEmail(),internote.getPassword());
        if (existInternote == null) {
            return ResponseEntity.status(401).body("Invalid email or password");
        }
            String token = Jwts.builder()
                    .setSubject(existInternote.getEmail())//Set email as the subject
                    .claim("id",existInternote.getId())//set user id as a claim
                    //.signWith(SignatureAlgorithm.HS256,"secretKey") // sign th token with a sekret key
                    .compact();

            // return success response with Jwt token
            return ResponseEntity.ok(Map.of("message","Login successful","token",token));
    }
}

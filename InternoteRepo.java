package com.example.steamclone.Repository;

import com.example.steamclone.Model.Internote;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InternoteRepo extends JpaRepository<Internote, Long>
{
    @Query(value = "SELECT CASE WHEN COUNT(i) > 0 THEN TRUE ELSE FALSE END FROM Internote i WHERE i.email = ?1")
    Boolean existsByEmail(String email);

    @Query(value = "SELECT CASE WHEN COUNT(i) > 0 THEN TRUE ELSE FALSE END FROM Internote i WHERE i.username = ?1")
    Boolean existsByUsername(String username);


    @Query("SELECT  i from Internote i where i.email=?1 AND i.password = ?2")
    Internote findByEmailAndPassword(String email, String password);
}

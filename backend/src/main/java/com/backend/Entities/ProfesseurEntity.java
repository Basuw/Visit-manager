package com.backend.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "Professeur")
public class ProfesseurEntity {

    @Id
    private int idProfesseur;

    private String nom;

    private String prenom;

    private String mail;
}

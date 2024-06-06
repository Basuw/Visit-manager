package com.backend.Entities;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "Jeu")
public class JeuEntity {

    @Id
    private int idJeu;

    private String nom;

    private Date dateAjout;

    @ManyToOne
    @JoinColumn(name="referent", referencedColumnName = "idProfesseur")
    private ProfesseurEntity referent;
}

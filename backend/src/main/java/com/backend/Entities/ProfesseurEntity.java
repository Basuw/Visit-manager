package com.backend.Entities;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
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

    @ManyToMany(mappedBy = "professeurEntity", fetch = FetchType.LAZY)
    private List<VisiteEntity> visits;
}

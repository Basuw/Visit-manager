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
@Table(name = "Accompagnateur")
public class AccompagnateurEntity {

    @Id
    private int idAccompagnateur;

    private String nom;

    private String prenom;

    private String mail;

    private int telephone;
    
    private String fonction;

    @ManyToMany(mappedBy = "accompagnateurEntity", fetch = FetchType.LAZY)
    private List<VisiteEntity> visits;
}

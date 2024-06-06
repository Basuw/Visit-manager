package com.backend.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import jakarta.persistence.OneToMany;
import lombok.Data;

import java.util.Set;

@Entity
@Data
@Table(name="Ville")
public class VilleEntity {

    @Id
    @Column(name = "idVille")
    private int idVille;

    private String nom;

    private short departement;

    @OneToMany(mappedBy = "ville")
    private Set<EtablissementEntity> etablissements;
}

package com.backend.Entities;

import java.util.List;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name="Etablissement")
public class EtablissementEntity {

    @Id
    @Column(name = "idEtablissement")
    private int idEtablissement;

    private String nom;

    @ManyToOne
    @JoinColumn(name = "idVille", referencedColumnName = "idVille")
    private VilleEntity ville;

    @ManyToMany(mappedBy = "etablissementEntity", fetch = FetchType.LAZY)
    private List<VisiteEntity> visiteEntity;
}

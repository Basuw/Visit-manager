package com.backend.Entities;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

import java.sql.Date;
import java.util.List;

@Entity
@Data
@Table(name="Visite")
public class VisiteEntity {

    /**
     * Visite id
     */
    @Id
    @GeneratedValue(generator = "sequence-generator")
    @GenericGenerator(
            name = "sequence-generator",
            parameters = {
                    @Parameter(name = "sequence_name", value = "Visite_sequence"),
                    @Parameter(name = "initial_value", value = "1"),
                    @Parameter(name = "increment_size", value = "1")
            }
    )
    private int idVisite;

    private Date dateVisite;

    private String manifestation;

    private String remarques;

    @ManyToOne
    @JoinColumn(name="niveau", referencedColumnName = "niveau")
    private NiveauEntity niveau;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL )
    @JoinTable(
            name = "referent",
            joinColumns = {  @JoinColumn(name = "id_visite")},
            inverseJoinColumns = { @JoinColumn(name = "id_professeur") }
    )
    private List<ProfesseurEntity> professeurEntity;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL )
    @JoinTable(
            name = "visite_etablissement",
            joinColumns = {  @JoinColumn(name = "id_visite")},
            inverseJoinColumns = { @JoinColumn(name = "id_etablissement") }
    )
    private List<EtablissementEntity> etablissementEntity;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL )
    @JoinTable(
            name = "jeu_professeur",
            joinColumns = {  @JoinColumn(name = "id_jeu")},
            inverseJoinColumns = { @JoinColumn(name = "id_professeur") }
    )
    private List<JeuEntity> jeux;
}

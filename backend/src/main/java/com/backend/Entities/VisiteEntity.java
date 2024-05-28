package com.backend.Entities;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

import java.sql.Date;

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
    private NiveauEntity niveau;
}

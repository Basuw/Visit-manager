package com.backend.dto;

import com.backend.Entities.VilleEntity;

import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Data
public class EtablissementDTO {

    private int id;

    private String nom;

    private VilleEntity ville;

}

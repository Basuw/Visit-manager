package com.backend.dto;

import lombok.Data;

@Data
public class EtablissementDTO {

    private int id;

    private String nom;

    private VilleDTO ville;

}

package com.backend.dto;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
public class VisiteDTO {

    @Schema(accessMode = Schema.AccessMode.READ_ONLY)
    private Integer id = null;

    @JsonFormat(pattern="yyyy-MM-dd")
    private Date date;

    private String manifestation;

    private String remarques;

    private String niveau;

    private List<EtablissementDTO> etablissement;

    private List<ProfesseurDTO> referant;

    private List<AccompagnateurDTO> accompagnateur;

    private List<JeuDTO> jeux;

}

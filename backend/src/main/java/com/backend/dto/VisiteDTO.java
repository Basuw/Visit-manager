package com.backend.dto;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class VisiteDTO {

    private int idVisite;

    @NotBlank
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date dateVisite;

    @NotBlank
    private String manifestation;

    private String remarques;

    @NotBlank
    private String niveau;
}

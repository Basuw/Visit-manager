package com.backend.dto;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class VisiteDTO {

    @Schema(accessMode = Schema.AccessMode.READ_ONLY)
    private Integer idVisite = null;

    @NotBlank
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date dateVisite;

    @NotBlank
    private String manifestation;

    private String remarques;

    @NotBlank
    private String niveau;
}

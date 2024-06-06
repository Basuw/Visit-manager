package com.backend.Services;

import org.springframework.stereotype.Service;

import com.backend.Entities.ProfesseurEntity;
import com.backend.Services.common.ReadService;
import com.backend.dto.ProfesseurDTO;

@Service
public class ProfesseurService extends ReadService<ProfesseurDTO, ProfesseurEntity>{

}

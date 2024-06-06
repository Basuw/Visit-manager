package com.backend.Services;

import org.springframework.stereotype.Service;

import com.backend.Entities.EtablissementEntity;
import com.backend.Services.common.ReadService;
import com.backend.dto.EtablissementDTO;

@Service
public class EtablissementService extends ReadService<EtablissementDTO, EtablissementEntity>{

}

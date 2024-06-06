package com.backend.Services;

import org.springframework.stereotype.Service;

import com.backend.Entities.JeuEntity;
import com.backend.Services.common.ReadService;
import com.backend.dto.JeuDTO;

@Service
public class JeuService extends ReadService<JeuDTO, JeuEntity>{

}

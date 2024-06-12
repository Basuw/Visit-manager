package com.backend.mapper;

import org.mapstruct.Mapper;
import org.springframework.beans.factory.annotation.Autowired;

import org.mapstruct.Mapping;

import com.backend.Entities.JeuEntity;
import com.backend.Repositories.JeuRepository;
import com.backend.dto.JeuDTO;

import jakarta.persistence.EntityNotFoundException;

@Mapper(componentModel = "spring")
public abstract class JeuMapper implements com.backend.mapper.common.Mapper<JeuDTO, JeuEntity>{

    @Autowired
    private JeuRepository repository;

    @Override
    @Mapping(target = "id", source = "idJeu")
    public abstract JeuDTO toDto(JeuEntity entity);

    @Override
    public JeuEntity toEntity(JeuDTO dto){
        return repository.findById(dto.getId()).orElseThrow(() -> new EntityNotFoundException("Il n'existe pas de jeu : "+dto.getId()));
    }
}

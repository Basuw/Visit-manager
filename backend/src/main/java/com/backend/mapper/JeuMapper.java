package com.backend.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.backend.Entities.JeuEntity;
import com.backend.dto.JeuDTO;

@Mapper(componentModel = "spring", uses = { ProfesseurMapper.class })
public abstract class JeuMapper implements com.backend.mapper.common.Mapper<JeuDTO, JeuEntity>{

    @Override
    @Mapping(target = "idReferent", source = "referent")
    public abstract JeuDTO toDto(JeuEntity entity);
}

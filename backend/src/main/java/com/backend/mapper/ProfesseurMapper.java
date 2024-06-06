package com.backend.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.backend.Entities.ProfesseurEntity;
import com.backend.dto.ProfesseurDTO;

@Mapper(componentModel = "spring", uses = { NiveauMapper.class })
public interface ProfesseurMapper extends com.backend.mapper.common.Mapper<ProfesseurDTO, ProfesseurEntity>{

    @Override
    @Mapping(target = "id", source = "idProfesseur")
    public ProfesseurDTO toDto(ProfesseurEntity entity);
}

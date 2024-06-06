package com.backend.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.backend.Entities.EtablissementEntity;
import com.backend.dto.EtablissementDTO;

@Mapper(componentModel = "spring", uses = { NiveauMapper.class })
public interface EtablissementMapper extends com.backend.mapper.common.Mapper<EtablissementDTO, EtablissementEntity>{

    @Override
    @Mapping(target = "id", source = "idEtablissement")
    public EtablissementDTO toDto(EtablissementEntity entity);
}

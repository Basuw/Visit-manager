package com.backend.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.backend.Entities.VisiteEntity;
import com.backend.dto.VisiteDTO;

@Mapper(componentModel = "spring", uses = { NiveauMapper.class, ProfesseurMapper.class, EtablissementMapper.class, JeuMapper.class, AccompagnateurMapper.class })
public interface VisiteMapper extends com.backend.mapper.common.Mapper<VisiteDTO, VisiteEntity>{

    @Override
    @Mapping(target="id", source = "idVisite")
    @Mapping(target = "date", source="dateVisite")
    @Mapping(target ="referant", source= "professeurEntity")
    @Mapping(target ="etablissement", source= "etablissementEntity")
    @Mapping(target ="accompagnateur", source= "accompagnateurEntity")
    public VisiteDTO toDto(VisiteEntity e);

    @Override
    @Mapping(target="idVisite", source="id")
    @Mapping(target = "dateVisite", source="date")
    @Mapping(target = "professeurEntity", source="referant.first.id")
    @Mapping(target ="etablissementEntity", source= "etablissement.first.id")
    @Mapping(target ="accompagnateurEntity", source= "accompagnateur.first.id")
    public VisiteEntity toEntity(VisiteDTO dto);
}

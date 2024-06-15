package com.backend.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

import com.backend.Entities.VisiteEntity;
import com.backend.dto.VisiteDTO;

@Mapper(componentModel = "spring", uses = { NiveauMapper.class, ProfesseurMapper.class, EtablissementMapper.class, JeuMapper.class, AccompagnateurMapper.class })
public abstract class VisiteMapper implements com.backend.mapper.common.Mapper<VisiteDTO, VisiteEntity>{

    @Mapping(target="idVisite", source="id")
    @Mapping(target = "dateVisite", source="date")
    @Mapping(target = "professeurEntity", source="referant.first.id")
    @Mapping(target ="etablissementEntity", source= "etablissement.first.id")
    @Mapping(target ="accompagnateurEntity", source= "accompagnateur.first.id")
    public abstract VisiteEntity updateEntity(@MappingTarget VisiteEntity entity, VisiteDTO dto);


    @Override
    @Mapping(target="id", source = "idVisite")
    @Mapping(target = "date", source="dateVisite")
    @Mapping(target ="referant", source= "professeurEntity")
    @Mapping(target ="etablissement", source= "etablissementEntity")
    @Mapping(target ="accompagnateur", source= "accompagnateurEntity")
    public abstract VisiteDTO toDto(VisiteEntity e);

    @Override
    @Mapping(target="idVisite", source="id")
    @Mapping(target = "dateVisite", source="date")
    @Mapping(target = "professeurEntity", source="referant.first.id")
    @Mapping(target ="etablissementEntity", source= "etablissement.first.id")
    @Mapping(target ="accompagnateurEntity", source= "accompagnateur.first.id")
    public abstract VisiteEntity toEntity(VisiteDTO dto);
}

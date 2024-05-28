package com.backend.mapper;

import org.mapstruct.Mapper;

import com.backend.Entities.VisiteEntity;
import com.backend.dto.VisiteDTO;
import com.backend.mapper.common.NiveauMapper;

@Mapper(componentModel = "spring", uses = { NiveauMapper.class })
public abstract class VisiteMapper {

    public abstract VisiteEntity toEntity(VisiteDTO dto);

    public abstract VisiteDTO toDto(VisiteEntity entity);
}

package com.backend.mapper;

import org.mapstruct.Mapper;

import com.backend.Entities.VisiteEntity;
import com.backend.dto.VisiteDTO;

@Mapper(componentModel = "spring", uses = { NiveauMapper.class })
public interface VisiteMapper extends com.backend.mapper.common.Mapper<VisiteDTO, VisiteEntity>{
}

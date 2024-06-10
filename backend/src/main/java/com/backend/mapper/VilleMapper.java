package com.backend.mapper;

import org.mapstruct.Mapper;

import com.backend.Entities.VilleEntity;
import com.backend.dto.VilleDTO;

@Mapper(componentModel = "spring")
public interface VilleMapper extends com.backend.mapper.common.Mapper<VilleDTO, VilleEntity>{
}

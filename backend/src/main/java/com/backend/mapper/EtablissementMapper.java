package com.backend.mapper;

import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;


import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.beans.factory.annotation.Autowired;

import com.backend.Entities.EtablissementEntity;
import com.backend.Repositories.EtablissementRepository;
import com.backend.dto.EtablissementDTO;

import jakarta.persistence.EntityNotFoundException;

@Mapper(componentModel = "spring", uses = {VilleMapper.class})
public abstract class EtablissementMapper implements com.backend.mapper.common.Mapper<EtablissementDTO, EtablissementEntity>{

    @Autowired
    private EtablissementRepository repository;

    @Override
    @Mapping(target = "id", source = "idEtablissement")
    public abstract EtablissementDTO toDto(EtablissementEntity entity);

        public List<EtablissementEntity> toIdEntity(int id){
        return new ArrayList<EtablissementEntity>(Arrays.asList(repository.findById(id).orElseThrow(() -> new EntityNotFoundException("Il n'existe pas de niveau : "+id))));
    }

    @Override
    @Mapping(source = "id", target = "idEtablissement")
    public abstract EtablissementEntity toEntity(EtablissementDTO dto);
}

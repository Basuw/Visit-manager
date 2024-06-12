package com.backend.mapper;

import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.beans.factory.annotation.Autowired;

import com.backend.Entities.AccompagnateurEntity;
import com.backend.Repositories.AccompagnateurRepository;
import com.backend.dto.AccompagnateurDTO;

import jakarta.persistence.EntityNotFoundException;

@Mapper(componentModel = "spring")
public abstract class AccompagnateurMapper implements com.backend.mapper.common.Mapper<AccompagnateurDTO, AccompagnateurEntity>{

    @Autowired
    private AccompagnateurRepository repository;

    @Override
    @Mapping(target = "id", source = "idAccompagnateur")
    public abstract AccompagnateurDTO toDto(AccompagnateurEntity entity);

    public Integer toString(AccompagnateurEntity Accompagnateur){
    if(Accompagnateur == null){
        return null;
    }
    return Accompagnateur.getIdAccompagnateur();
    }

    public List<AccompagnateurEntity> toIdEntity(int id){
        return new ArrayList<AccompagnateurEntity>(Arrays.asList(repository.findById(id).orElseThrow(() -> new EntityNotFoundException("Il n'existe pas de niveau : "+id))));
    }

    @Override
    @Mapping(source = "id", target = "idAccompagnateur")
    public abstract AccompagnateurEntity toEntity(AccompagnateurDTO dto);
}

package com.backend.mapper;

import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.beans.factory.annotation.Autowired;

import com.backend.Entities.ProfesseurEntity;
import com.backend.Repositories.ProfesseurRepository;
import com.backend.dto.ProfesseurDTO;

import jakarta.persistence.EntityNotFoundException;

@Mapper(componentModel = "spring")
public abstract class ProfesseurMapper implements com.backend.mapper.common.Mapper<ProfesseurDTO, ProfesseurEntity>{

    @Autowired
    private ProfesseurRepository repository;

    @Override
    @Mapping(target = "id", source = "idProfesseur")
    public abstract ProfesseurDTO toDto(ProfesseurEntity entity);

    public Integer toString(ProfesseurEntity professeur){
    if(professeur == null){
        return null;
    }
    return professeur.getIdProfesseur();
    }

    public List<ProfesseurEntity> toIdEntity(int id){
        return new ArrayList<ProfesseurEntity>(Arrays.asList(repository.findById(id).orElseThrow(() -> new EntityNotFoundException("Il n'existe pas de niveau : "+id))));
    }

    @Override
    @Mapping(source = "id", target = "idProfesseur")
    public abstract ProfesseurEntity toEntity(ProfesseurDTO dto);
}

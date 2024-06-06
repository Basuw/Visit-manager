package com.backend.mapper;

import org.mapstruct.Mapper;
import org.springframework.beans.factory.annotation.Autowired;

import com.backend.dto.NiveauDTO;
import com.backend.Entities.NiveauEntity;
import com.backend.Repositories.NiveauRepository;

import jakarta.persistence.EntityNotFoundException;

@Mapper(componentModel = "spring")
public abstract class NiveauMapper implements com.backend.mapper.common.Mapper<NiveauDTO, NiveauEntity>{

    @Autowired
    private NiveauRepository repository;

    public String toString(NiveauEntity niveau){
        if(niveau == null){
            return null;
        }
        return niveau.getNiveau();
    }

    public NiveauEntity toStringEntity(String niveau){
        return repository.findById(niveau).orElseThrow(() -> new EntityNotFoundException("Il n'existe pas de niveau : "+niveau));
    }
}

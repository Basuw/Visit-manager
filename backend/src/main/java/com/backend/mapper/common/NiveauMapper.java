package com.backend.mapper.common;

import org.mapstruct.Mapper;
import org.springframework.beans.factory.annotation.Autowired;

import com.backend.Entities.NiveauEntity;
import com.backend.Repositories.NiveauRepository;

import jakarta.persistence.EntityNotFoundException;

@Mapper(componentModel = "spring")
public class NiveauMapper {

    @Autowired
    private NiveauRepository repository;

    public String toString(NiveauEntity niveau){
        if(niveau == null){
            return null;
        }
        return niveau.getNiveau();
    }

    public NiveauEntity toEntity(String niveau){
        return repository.findById(niveau).orElseThrow(() -> new EntityNotFoundException("Il n'existe pas de niveau : "+niveau));
    }
}

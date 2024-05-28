package com.backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.Entities.VisiteEntity;
import com.backend.Repositories.VisiteRepository;
import com.backend.Services.common.ReadService;
import com.backend.dto.VisiteDTO;
import com.backend.mapper.VisiteMapper;

import jakarta.persistence.EntityNotFoundException;

@Service
public class VisiteService extends ReadService<VisiteDTO, VisiteEntity>{

    @Autowired
    private VisiteMapper mapper;

    @Autowired
    private VisiteRepository repository;

    public VisiteDTO create(VisiteDTO dto){
        VisiteEntity created = repository.save(mapper.toEntity(dto));
        return mapper.toDto(created);
    }

    public VisiteDTO update(VisiteDTO dto, int id){
        if(!repository.existsById(id)){
            throw new EntityNotFoundException("Il n'existe pas de visite avec l'id "+ id);
        }

        VisiteEntity updated = repository.save(mapper.toEntity(dto));
        return mapper.toDto(updated);
    }

    public void delete(int id){
        repository.deleteById(id);
    }
}

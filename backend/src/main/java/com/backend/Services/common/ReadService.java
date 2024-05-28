package com.backend.Services.common;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;

import com.backend.mapper.common.Mapper;

import jakarta.persistence.EntityNotFoundException;

public abstract class ReadService<D, E> {

    @Autowired
    private CrudRepository<E, Integer> repository;

    @Autowired
    private Mapper<D, E> mapper;

    public D findByID(int id){
        E entity = repository.findById(id).orElseThrow(() -> new EntityNotFoundException("No ressource found with id "+id));
        return mapper.toDto(entity);
    }
}

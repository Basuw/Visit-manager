package com.backend.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.backend.Entities.JeuEntity;

@Repository
public interface JeuRepository extends CrudRepository<JeuEntity, Integer>{
}

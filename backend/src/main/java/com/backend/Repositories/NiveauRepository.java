package com.backend.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.backend.Entities.NiveauEntity;

@Repository
public interface NiveauRepository extends CrudRepository<NiveauEntity, String> {

}
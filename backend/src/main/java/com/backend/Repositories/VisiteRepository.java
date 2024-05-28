package com.backend.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.backend.Entities.VisiteEntity;

@Repository
public interface VisiteRepository extends CrudRepository<VisiteEntity, Integer> {

}
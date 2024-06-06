package com.backend.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.backend.Entities.ProfesseurEntity;

@Repository
public interface ProfesseurRepository extends CrudRepository<ProfesseurEntity, Integer>{

}

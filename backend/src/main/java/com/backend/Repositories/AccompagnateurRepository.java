package com.backend.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.backend.Entities.AccompagnateurEntity;

@Repository
public interface AccompagnateurRepository extends CrudRepository<AccompagnateurEntity, Integer>{

}

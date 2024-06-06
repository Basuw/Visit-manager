package com.backend.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.backend.Entities.EtablissementEntity;

@Repository
public interface EtablissementRepository extends CrudRepository<EtablissementEntity, Integer>{

}

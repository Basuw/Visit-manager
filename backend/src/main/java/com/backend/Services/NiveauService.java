package com.backend.Services;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import com.backend.Entities.NiveauEntity;
import com.backend.Repositories.NiveauRepository;
import com.backend.Services.common.ReadService;
import com.backend.dto.NiveauDTO;
import com.backend.mapper.NiveauMapper;
import com.backend.mapper.common.Mapper;

@Service
public class NiveauService{

    @Autowired
    protected NiveauRepository repository;

    @Autowired
    private NiveauMapper mapper;

        public List<NiveauDTO> findAll(){
        List<NiveauEntity> entities = StreamSupport.stream(repository.findAll().spliterator(), false)
                            .collect(Collectors.toList());
        return entities.stream().map(e -> mapper.toDto(e)).collect(Collectors.toList());
    }

}

package com.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.Services.EtablissementService;
import com.backend.Services.VisiteService;
import com.backend.Services.common.ReadService;
import com.backend.dto.EtablissementDTO;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(value="etablissement/")
public class EtablissementController {

    @Autowired
    private EtablissementService service;

@GetMapping("all")
public ResponseEntity<List<EtablissementDTO>> getAll() {
    return ResponseEntity.ok(service.findAll());
}
}

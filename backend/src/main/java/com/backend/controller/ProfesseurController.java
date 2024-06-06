package com.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.Services.ProfesseurService;
import com.backend.dto.ProfesseurDTO;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(value="professeur/")
public class ProfesseurController {

    @Autowired
    private ProfesseurService service;

    @GetMapping("all")
    public ResponseEntity<List<ProfesseurDTO>> getAll() {
        return ResponseEntity.ok(service.findAll());
    }

}

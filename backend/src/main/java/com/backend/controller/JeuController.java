package com.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.Services.JeuService;
import com.backend.dto.JeuDTO;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(value="jeu/")
public class JeuController {

    @Autowired
    private JeuService service;

@GetMapping("all")
public ResponseEntity<List<JeuDTO>> getAll() {
    return ResponseEntity.ok(service.findAll());
}
}

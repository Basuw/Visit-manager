package com.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.Services.NiveauService;
import com.backend.dto.NiveauDTO;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(value="niveau/")
public class NiveauController {

    @Autowired
    private NiveauService service;

@GetMapping("all")
public ResponseEntity<List<NiveauDTO>> getAll() {
    return ResponseEntity.ok(service.findAll());
}
}

package com.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.Services.AccompagnateurService;
import com.backend.dto.AccompagnateurDTO;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(value="accompagnateur/")
public class AccompagnateurController {

    @Autowired
    private AccompagnateurService service;

    @GetMapping("all")
    public ResponseEntity<List<AccompagnateurDTO>> getAll() {
        return ResponseEntity.ok(service.findAll());
    }

}

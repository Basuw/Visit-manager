package com.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.Services.VisiteService;
import com.backend.dto.VisiteDTO;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(value="visite/")
public class VisiteController{

    @Autowired
    private VisiteService service;

    @GetMapping("{id}")
    public ResponseEntity<VisiteDTO> get(@PathVariable int id) {
        VisiteDTO dto = service.findByID(id);
        return ResponseEntity.ok(dto);
    }

    @GetMapping("all")
    public ResponseEntity<List<VisiteDTO>> getAll() {
        return ResponseEntity.ok(service.findAll());
    }
    
    @PostMapping("")
    public ResponseEntity<VisiteDTO> post(@RequestBody VisiteDTO dto) {
        VisiteDTO created = service.create(dto);
        return new ResponseEntity<VisiteDTO>(created, HttpStatus.CREATED);
    }
    
    @PutMapping("{id}")
    public ResponseEntity<VisiteDTO> put(@PathVariable int id, @RequestBody VisiteDTO dto) {
        VisiteDTO updated = service.update(dto, id);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping({"id"})
    public ResponseEntity<String> delete(@PathVariable int id){
        service.delete(id);
        return new ResponseEntity<String>("Visite "+ id +" a été supprimé avec succès", HttpStatus.OK);
    }
}
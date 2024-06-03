package com.backend.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name="niveau")
public class NiveauEntity {

    @Id
    private String niveau;
}

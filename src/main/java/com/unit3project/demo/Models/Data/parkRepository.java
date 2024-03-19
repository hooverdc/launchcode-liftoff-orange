package com.unit3project.demo.Models.Data;

import com.unit3project.demo.Models.Park;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface parkRepository extends CrudRepository <Park, Integer> {
}

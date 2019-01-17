package com.qa.dave.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.qa.dave.model.dataModel;

@Repository
public interface filmRepository extends JpaRepository<dataModel, Long>{

}

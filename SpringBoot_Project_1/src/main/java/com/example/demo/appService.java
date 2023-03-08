package com.example.demo;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class appService {
	@Autowired
	appRepository repository;
	public Optional<appDetails> getStudent(int id){
		return repository.findById(id);
	}
	public String updateDetails(appDetails ap) {
		repository.save(ap);
		return "updated";
	}
	public String deleteDetails(int id) {
		repository.deleteById(id);
		return "Id deleted";
	}
}
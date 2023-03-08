package com.example.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class appController {
	@Autowired
	appRepository appsRepository;
	@Autowired
	appService appsservice;
	@GetMapping("/getValues")
	List<appDetails> getList(){
		return appsRepository.findAll();
	}
	@PostMapping("/postValues")
	public appDetails create(@RequestBody appDetails ap) {
		return appsRepository.save(ap);
	}
	@GetMapping("/getValues/{id}")
	public Optional<appDetails> getbyid(@PathVariable int id){
		return appsservice.getStudent(id);
	}
	@PutMapping("/putValues")
	public String update(@RequestBody appDetails stu) {
		return appsservice.updateDetails(stu);
	}
	@DeleteMapping("/deletValues")
	public String delet(@RequestParam int id) {
		return appsservice.deleteDetails(id);
	}
}
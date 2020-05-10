package com.demo.bankapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.bankapp.model.Account;
import com.demo.bankapp.service.AccountService;

@CrossOrigin(origins = { "http://localhost:3000" })
@RestController
@RequestMapping("/api")
public class BankAppController {
 
 @Autowired
 private AccountService accService;
 
 @GetMapping("/account")
 public List<Account> get() {
  return accService.get();
 }
 
 @CrossOrigin(origins = { "http://localhost:3000" })
 @PostMapping("/account")
 public Account save(@RequestBody Account account) {
	 accService.save(account);
  return account;
 }
 
 @GetMapping("/account/{id}")
 public Account get(@PathVariable int id) {
  return accService.get(id);
 }
 
 @DeleteMapping("/account/{id}")
 public String delete(@PathVariable int id) {
  
	 accService.delete(id);
  
  return "Account removed with id "+id;
  
 }
 
 @CrossOrigin(origins = { "http://localhost:3000" })
 @PutMapping("/account")
 public Account update(@RequestBody Account account) {
	 accService.save(account);
  return account;
 }
}

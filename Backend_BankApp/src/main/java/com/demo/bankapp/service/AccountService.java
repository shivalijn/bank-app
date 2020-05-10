package com.demo.bankapp.service;

import java.util.List;

import com.demo.bankapp.model.Account;

public interface AccountService {
List<Account> get();
 
Account get(int id);
 
 void save(Account employee);
 
 void delete(int id);
}
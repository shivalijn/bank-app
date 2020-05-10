package com.demo.bankapp.dao;

import java.util.List;

import com.demo.bankapp.model.Account;

public interface AccountDAO {
	 
	 List<Account> get();
	 
	 Account get(int id);
	 
	 void save(Account account);
	 
	 void delete(int id);
	}

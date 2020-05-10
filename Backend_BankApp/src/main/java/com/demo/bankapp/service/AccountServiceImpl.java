package com.demo.bankapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.demo.bankapp.dao.AccountDAO;
import com.demo.bankapp.model.Account;

@Service
public class AccountServiceImpl implements AccountService {
 
 @Autowired
 private AccountDAO accountDao;
@Transactional
 @Override
 public List<Account> get() {
  return accountDao.get();
 }
@Transactional
 @Override
 public Account get(int id) {
  return accountDao.get(id);
 }
@Transactional
 @Override
 public void save(Account account) {
	accountDao.save(account);
  
 }
@Transactional
 @Override
 public void delete(int id) {
	accountDao.delete(id);
  
 }
}
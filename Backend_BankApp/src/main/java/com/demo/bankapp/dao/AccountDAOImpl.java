package com.demo.bankapp.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.query.Query;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.demo.bankapp.model.Account;

@Repository
public class AccountDAOImpl implements AccountDAO {
@Autowired
 private EntityManager entityManager;
@Override
 public List<Account> get() {
Session currSession = entityManager.unwrap(Session.class);
  Query<Account> query = currSession.createQuery("from Account", Account.class);
  List<Account> list = query.getResultList();
  return list;
}
@Override
 public Account get(int id) {
  Session currSession = entityManager.unwrap(Session.class);
  Account acc = currSession.get(Account.class, id);
  return acc;
 }
@Override
 public void save(Account account) {
  
  Session currSession = entityManager.unwrap(Session.class);
  currSession.saveOrUpdate(account);
}
@Override
 public void delete(int id) {
  Session currSession = entityManager.unwrap(Session.class);
  Account acc = currSession.get(Account.class, id);
  currSession.delete(acc);
}
}
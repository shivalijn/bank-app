package com.demo.bankapp.model;

import java.sql.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "tb_account")
public class Account {
@Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 @Column
 private Integer id;
@Column
 private String name;
@Column
 private String type;
@Column
 private Date dob;
@Column
 private String gender;
@Column
private int amount;
@Override
 public String toString() {
  return "Account [id= " + id + ", name=" + name + ", type=" + type + ", dob=" + dob + ", gender="
    + gender + "]";
 }
public Integer getId() {
  return id;
 }
public void setId(Integer id) {
  this.id = id;
 }
public String getName() {
  return name;
 }
public void setName(String name) {
  this.name = name;
 }
public String getType() {
  return type;
 }
public void setType(String type) {
  this.type = type;
 }
public Date getDob() {
  return dob;
 }
public void setDob(Date dob) {
  this.dob = dob;
 }
public String getGender() {
  return gender;
 }
public void setGender(String gender) {
  this.gender = gender;
 }
public int getAmount() {
	return amount;
}
public void setAmount(int amount) {
	this.amount = amount;
}
}

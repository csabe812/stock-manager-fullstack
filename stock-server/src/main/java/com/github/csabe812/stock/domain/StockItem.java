package com.github.csabe812.stock.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "stockitem")
public class StockItem {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "serial_number")
	private String serialNumber;
	private String name;
	private String description;

	public StockItem() {
	}

	public StockItem(long id, String serialNumber, String name, String description) {
		super();
		this.id = id;
		this.serialNumber = serialNumber;
		this.name = name;
		this.description = description;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getSerialNumber() {
		return serialNumber;
	}

	public void setSerialNumber(String serialNumber) {
		this.serialNumber = serialNumber;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "StockItem [id=" + id + ", serialNumber=" + serialNumber + ", name=" + name + ", description="
				+ description + "]";
	}

}

package com.github.csabe812.stock.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.github.csabe812.stock.domain.StockItem;
import com.github.csabe812.stock.service.StockItemService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class StockItemController {

	@Autowired
	private StockItemService stockItemService;

	@GetMapping("/")
	public String getHome() {
		return "HelloWorld";
	}

	@PostMapping(path = "stockitem", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<StockItem> create(@RequestBody StockItem newStockItem) throws Exception {
		StockItem stockItem = stockItemService.saveStockItem(newStockItem);
		if (stockItem == null) {
			throw new Exception();
		} else {
			return new ResponseEntity<>(stockItem, HttpStatus.CREATED);
		}
	}
	
	@GetMapping(path = "stockitem")
	public ResponseEntity<List<StockItem>> getStockItems() {
		return new ResponseEntity<>(stockItemService.getAllStockItem(), HttpStatus.OK);
	}
}

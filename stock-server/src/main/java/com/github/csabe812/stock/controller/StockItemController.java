package com.github.csabe812.stock.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

	@GetMapping("stockitem")
	public ResponseEntity<List<StockItem>> getStockItems() {
		return new ResponseEntity<>(stockItemService.getAllStockItem(), HttpStatus.OK);
	}

	@PostMapping("stockitem")
	public ResponseEntity<StockItem> create(@RequestBody StockItem newStockItem) throws Exception {
		StockItem stockItem = stockItemService.saveStockItem(newStockItem);
		if (stockItem == null) {
			throw new Exception();
		} else {
			return new ResponseEntity<>(stockItem, HttpStatus.CREATED);
		}
	}

	@PutMapping("stockitem/{id}")
	public ResponseEntity<StockItem> modify(@PathVariable(value = "id") Long id,
			@Valid @RequestBody StockItem modifiedStockItem) throws Exception {
		StockItem stockItem = stockItemService.modifyStockItem(id, modifiedStockItem);
		if (null == stockItem) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} else {
			return new ResponseEntity<>(stockItem, HttpStatus.OK);
		}
	}

	@DeleteMapping("stockitem/{id}")
	public ResponseEntity delete(@PathVariable(value = "id") Long id) {
		try {
			stockItemService.deleteStockItem(id);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}

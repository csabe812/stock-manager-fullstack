package com.github.csabe812.stock.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.csabe812.stock.domain.StockItem;
import com.github.csabe812.stock.repository.StockItemRepository;

@Service
public class StockItemService {

	@Autowired
	private StockItemRepository stockItemRepository;

	public StockItem saveStockItem(StockItem stockItem) {
		return stockItemRepository.save(stockItem);
	}

	public List<StockItem> getAllStockItem() {
		return stockItemRepository.findAll();
	}
	
}

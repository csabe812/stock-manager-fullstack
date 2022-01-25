package com.github.csabe812.stock.service;

import java.util.List;
import java.util.Optional;

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

	public StockItem modifyStockItem(Long id, StockItem item) {
		Optional<StockItem> optionalStockItem = stockItemRepository.findById(id);
		if(!optionalStockItem.isPresent()) {
			return null;
		}
		StockItem stockItem = optionalStockItem.get();
		stockItem.setDescription(item.getDescription());
		stockItem.setName(item.getName());
		stockItem.setSerialNumber(item.getSerialNumber());
		return stockItemRepository.save(stockItem);
	}

	public boolean deleteStockItem(Long id) {
		boolean resp = false;
		try {
			stockItemRepository.deleteById(id);
			resp = true;
		}
		catch(Exception exc) {
			resp = false;
		}
		return resp;
	}
	
}

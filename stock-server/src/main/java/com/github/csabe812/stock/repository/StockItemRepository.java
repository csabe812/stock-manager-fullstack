package com.github.csabe812.stock.repository;

import com.github.csabe812.stock.domain.StockItem;

import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

@Repository
public interface StockItemRepository extends CrudRepository<StockItem, Long> {

	StockItem findById(long id);

	List<StockItem> findAll();

	void deleteById(long id);

}

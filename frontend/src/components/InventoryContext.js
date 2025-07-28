import React, { createContext, useContext, useState, useEffect } from 'react';

const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [inventory, setInventory] = useState({
    1: { name: "Classic Steel Rims", quantity: 15, price: "$299" },
    2: { name: "Retro Alloy Wheels", quantity: 8, price: "$449" }
  });

  // Load inventory from localStorage on mount
  useEffect(() => {
    const savedInventory = localStorage.getItem('trinityInventory');
    if (savedInventory) {
      setInventory(JSON.parse(savedInventory));
    }
  }, []);

  // Save inventory to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('trinityInventory', JSON.stringify(inventory));
  }, [inventory]);

  const updateQuantity = (productId, newQuantity) => {
    setInventory(prev => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        quantity: Math.max(0, newQuantity)
      }
    }));
  };

  const getProductQuantity = (productId) => {
    return inventory[productId]?.quantity || 0;
  };

  const getProductInfo = (productId) => {
    return inventory[productId] || null;
  };

  const getAllInventory = () => {
    return inventory;
  };

  const value = {
    inventory,
    updateQuantity,
    getProductQuantity,
    getProductInfo,
    getAllInventory
  };

  return (
    <InventoryContext.Provider value={value}>
      {children}
    </InventoryContext.Provider>
  );
};

export const useInventory = () => {
  const context = useContext(InventoryContext);
  if (!context) {
    throw new Error('useInventory must be used within an InventoryProvider');
  }
  return context;
}; 
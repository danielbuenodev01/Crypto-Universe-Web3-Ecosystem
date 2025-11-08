'use client';

import { useState, useEffect } from 'react';
import { categories, initialCategoryState, categoryNodes } from '@/data/categories';

type CategoryHook = {
  categoryState: Record<string, boolean>;
  toggleCategory: (categoryId: string) => void;
  updateNetworkNodes: (network: any) => void;
};

export const useCategories = (): CategoryHook => {
  const [categoryState, setCategoryState] = useState<Record<string, boolean>>(initialCategoryState);
  
  const toggleCategory = (categoryId: string) => {
    setCategoryState(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };
  
  const updateNetworkNodes = (network: any) => {
    if (!network) return;
    
    // Obter os datasets atuais
    const nodesDataset = network.body.data.nodes;
    
    // Atualizar visibilidade dos nodes com base no estado das categorias
    Object.entries(categoryState).forEach(([categoryId, isVisible]) => {
      const nodeIds = categoryNodes[categoryId as keyof typeof categoryNodes];
      if (nodeIds) {
        nodeIds.forEach((nodeId: number) => {
          try {
            // Atualizar o node diretamente
            nodesDataset.update({ id: nodeId, hidden: !isVisible });
          } catch (e) {
            // Node não existe, ignorar
            console.warn(`Node ${nodeId} not found in dataset`);
          }
        });
      }
    });
  };
  
  return {
    categoryState,
    toggleCategory,
    updateNetworkNodes
  };
};
// Mapeamento de Categorias e seus Nodes
// Extraído do HTML original

import { Category } from '@/types';

export const categoryNodes: Record<string, number[]> = {
  blockchain: [2, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 211, 212, 241, 281, 282, 283, 284, 285, 291, 292, 293, 294, 295],
  defi: [3, 31, 32, 33, 34, 35, 36, 37, 38, 39, 391, 392],
  nft: [4, 41, 42, 43, 44, 45, 46, 47],
  infrastructure: [5, 51, 52, 53, 54, 56, 57, 571, 572, 5711, 5712, 5713, 5721, 5722],
  cryptocurrencies: [6, 61, 611, 612, 613, 62, 621, 622, 623, 63, 631, 632, 64, 641, 642],
  governance: [7, 71, 72, 73, 74],
  exchanges: [8, 81, 82, 83, 84],
  ai: [9, 91, 92, 93, 94],
  rwa: [10, 101, 102, 103],
  zk: [11, 111, 112, 113, 114],
  data: [12, 121, 122, 123, 124, 125, 126, 127],
  yield: [13, 131, 1311, 1312, 1313, 1314, 132, 1321, 1322, 1323, 1324]
};

export const categories: Category[] = [
  { id: 'blockchain', name: 'Blockchain', color: '#4CAF50', nodeIds: categoryNodes.blockchain },
  { id: 'defi', name: 'DeFi', color: '#2196F3', nodeIds: categoryNodes.defi },
  { id: 'nft', name: 'NFT/Gaming', color: '#9C27B0', nodeIds: categoryNodes.nft },
  { id: 'infrastructure', name: 'Infrastructure', color: '#FF5722', nodeIds: categoryNodes.infrastructure },
  { id: 'cryptocurrencies', name: 'Cryptocurrencies', color: '#FF9800', nodeIds: categoryNodes.cryptocurrencies },
  { id: 'governance', name: 'Governance', color: '#00BCD4', nodeIds: categoryNodes.governance },
  { id: 'exchanges', name: 'Exchanges', color: '#607D8B', nodeIds: categoryNodes.exchanges },
  { id: 'ai', name: 'AI', color: '#E91E63', nodeIds: categoryNodes.ai },
  { id: 'rwa', name: 'RWA', color: '#795548', nodeIds: categoryNodes.rwa },
  { id: 'zk', name: 'ZK', color: '#673AB7', nodeIds: categoryNodes.zk },
  { id: 'data', name: 'Data', color: '#009688', nodeIds: categoryNodes.data },
  { id: 'yield', name: 'Yield Methods', color: '#FFC107', nodeIds: categoryNodes.yield }
];

export const initialCategoryState: Record<string, boolean> = {
  blockchain: true,
  defi: true,
  nft: true,
  infrastructure: true,
  cryptocurrencies: true,
  governance: true,
  exchanges: true,
  ai: true,
  rwa: true,
  zk: true,
  data: true,
  yield: true
};

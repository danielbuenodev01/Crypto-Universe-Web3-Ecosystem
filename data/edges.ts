// Edges para o Crypto Universe - Web3 Mind Map
// Extraído do HTML original

import { Edge } from '@/types';

export const edges: Edge[] = [
  // Conexões do núcleo central para pilares principais
  { from: 1, to: 2 }, { from: 1, to: 3 }, { from: 1, to: 4 },
  { from: 1, to: 5 }, { from: 1, to: 6 }, { from: 1, to: 7 },
  { from: 1, to: 8 }, { from: 1, to: 9 }, { from: 1, to: 10 },
  { from: 1, to: 11 }, { from: 1, to: 12 }, { from: 1, to: 13 },

  // Blockchains - Layer 1, Layer 2 e Bitcoin L2
  { from: 2, to: 20 }, { from: 2, to: 28 }, { from: 2, to: 29 },
  { from: 20, to: 21 }, { from: 20, to: 22 }, { from: 20, to: 23 },
  { from: 20, to: 24 }, { from: 20, to: 241 }, { from: 20, to: 25 },
  { from: 20, to: 26 }, { from: 20, to: 27 }, { from: 20, to: 281 },
  { from: 20, to: 211 }, { from: 20, to: 212 },
  { from: 28, to: 282 }, { from: 28, to: 283 }, { from: 28, to: 284 }, { from: 28, to: 285 },
  { from: 29, to: 291 }, { from: 29, to: 292 }, { from: 29, to: 293 },
  { from: 29, to: 294 }, { from: 29, to: 295 },

  // DeFi - DEXs, Lending, Liquid Staking, Perps
  { from: 3, to: 31 }, { from: 3, to: 32 }, { from: 3, to: 33 },
  { from: 3, to: 34 }, { from: 3, to: 35 }, { from: 3, to: 36 },
  { from: 3, to: 37 }, { from: 3, to: 38 }, { from: 3, to: 39 },
  { from: 3, to: 391 }, { from: 3, to: 392 },

  // NFTs & Gaming
  { from: 4, to: 41 }, { from: 4, to: 42 }, { from: 4, to: 43 },
  { from: 4, to: 44 }, { from: 4, to: 45 }, { from: 4, to: 46 },
  { from: 4, to: 47 },

  // Infrastructure
  { from: 5, to: 51 }, { from: 5, to: 52 }, { from: 5, to: 53 },
  { from: 5, to: 54 }, { from: 5, to: 56 }, { from: 5, to: 57 },

  // Wallets
  { from: 57, to: 571 }, { from: 57, to: 572 },
  { from: 571, to: 5711 }, { from: 571, to: 5712 }, { from: 571, to: 5713 },
  { from: 572, to: 5721 }, { from: 572, to: 5722 },

  // Cryptocurrencies - Altcoins, Stablecoins, Memecoins, Privacy
  { from: 6, to: 61 }, { from: 6, to: 62 },
  { from: 6, to: 63 }, { from: 6, to: 64 },
  { from: 61, to: 611 }, { from: 61, to: 612 }, { from: 61, to: 613 },
  { from: 62, to: 621 }, { from: 62, to: 622 }, { from: 62, to: 623 },
  { from: 63, to: 631 }, { from: 63, to: 632 },
  { from: 64, to: 641 }, { from: 64, to: 642 },

  // DAOs
  { from: 7, to: 71 }, { from: 7, to: 72 }, { from: 7, to: 73 },
  { from: 7, to: 74 },

  // CEXs
  { from: 8, to: 81 }, { from: 8, to: 82 }, { from: 8, to: 83 },
  { from: 8, to: 84 },

  // AI + Crypto
  { from: 9, to: 91 }, { from: 9, to: 92 }, { from: 9, to: 93 },
  { from: 9, to: 94 },

  // RWA
  { from: 10, to: 101 }, { from: 10, to: 102 }, { from: 10, to: 103 },

  // ZK Tech
  { from: 11, to: 111 }, { from: 11, to: 112 }, { from: 11, to: 113 },
  { from: 11, to: 114 },

  // Data Aggregators
  { from: 12, to: 121 }, { from: 12, to: 122 }, { from: 12, to: 123 },
  { from: 12, to: 124 }, { from: 12, to: 125 }, { from: 12, to: 126 },
  { from: 12, to: 127 },

  // Yield Methods
  { from: 13, to: 131 }, { from: 13, to: 132 },
  { from: 131, to: 1311 }, { from: 131, to: 1312 }, { from: 131, to: 1313 }, { from: 131, to: 1314 },
  { from: 132, to: 1321 }, { from: 132, to: 1322 }, { from: 132, to: 1323 }, { from: 132, to: 1324 },

  // Conexões cruzadas essenciais (apenas as mais importantes)
  { from: 5711, to: 22, color: { color: '#ffffff', opacity: 0.15 } }, // MetaMask -> Ethereum
  { from: 5712, to: 23, color: { color: '#ffffff', opacity: 0.15 } }, // Phantom -> Solana
  { from: 34, to: 71, color: { color: '#ffffff', opacity: 0.15 } }, // MakerDAO -> MakerDAO DAO
  { from: 623, to: 34, color: { color: '#ffffff', opacity: 0.15 } }  // DAI -> MakerDAO
];
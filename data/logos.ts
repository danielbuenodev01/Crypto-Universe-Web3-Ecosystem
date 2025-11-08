// Símbolos de criptomoedas para usar com cryptocurrency-icons
// Mapeamento de node ID para símbolo da moeda (biblioteca local)

export const cryptoSymbols: Record<number, string> = {
  // Blockchains Layer 1
  21: 'btc', // Bitcoin
  22: 'eth', // Ethereum
  23: 'sol', // Solana
  24: 'bnb', // BSC
  25: 'ada', // Cardano
  26: 'avax', // Avalanche
  27: 'dot', // Polkadot
  241: 'matic', // Polygon
  281: 'atom', // Cosmos
  // 211: 'sui', // Sui - não disponível
  // 212: 'apt', // Aptos - não disponível

  // Layer 2
  // 282: 'arb', // Arbitrum - não disponível
  // 283: 'op', // Optimism - não disponível

  // DeFi
  31: 'uni', // Uniswap
  32: 'aave', // Aave
  33: 'comp', // Compound
  34: 'mkr', // MakerDAO
  35: 'crv', // Curve
  // 36: 'cake', // PancakeSwap - não disponível
  // 37: 'ldo', // Lido - não disponível
  
  // Perps DEXs
  // 39: 'gmx', // GMX - não disponível
  // 391: 'dydx', // dYdX - não disponível

  // NFTs
  // 41: 'opensea', // OpenSea - não disponível
  42: 'axs', // Axie Infinity (AXS token)
  43: 'mana', // Decentraland
  44: 'sand', // The Sandbox

  // Stablecoins
  621: 'usdt', // USDT
  622: 'usdc', // USDC
  623: 'dai', // DAI
  
  // Altcoins
  611: 'bnb', // BNB
  612: 'xrp', // XRP
  613: 'ltc', // Litecoin

  // Memecoins
  631: 'doge', // Dogecoin
  // 632: 'shib', // Shiba Inu - não disponível na biblioteca

  // Privacy
  641: 'xmr', // Monero
  642: 'zec', // Zcash

  // AI + Crypto
  // 92: 'rndr', // Render - não disponível
  // 93: 'fet', // Fetch.ai - não disponível

  // Infrastructure
  51: 'link', // Chainlink
  54: 'grt', // The Graph
  
  // Outros DeFi disponíveis
  // Adicionar mais conforme necessário:
  // 1inch, sushi, bal (Balancer), snx (Synthetix), yfi (Yearn)
};

// Função para obter o caminho do ícone SVG
export const getCryptoIconPath = (nodeId: number): string | undefined => {
  const symbol = cryptoSymbols[nodeId];
  if (symbol) {
    return `/cryptocurrency-icons/svg/color/${symbol}.svg`;
  }
  return undefined;
};

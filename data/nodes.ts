// Nodes para o Crypto Universe - Web3 Mind Map
// Extraído do HTML original

import { Node } from '@/types';
import { getCryptoIconPath } from './logos';

// Função para converter códigos unicode para caracteres
const unicodeToChar = (unicode: string) => {
  return String.fromCharCode(parseInt(unicode.replace('\\u', ''), 16));
};

const rawNodes: Node[] = [
  // NÚCLEO CENTRAL - O Universo Cripto
  { 
    id: 1, 
    label: 'WEB3\nUNIVERSE',
    description: 'O Universo Descentralizado\n\nA nova era da internet onde você controla seus dados, ativos e identidade.\n\nPrincípios fundamentais:\n• Descentralização total\n• Propriedade digital real\n• Transparência via blockchain\n• Economia tokenizada\n• Governança comunitária',
    color: '#4CAF50',
    icon: { face: 'FontAwesome', code: unicodeToChar('\\uf0ac'), size: 55, color: '#ffffff' },
    size: 70,
    font: { size: 18, color: '#ffffff', strokeWidth: 2, strokeColor: '#000000' },
    borderWidth: 4,
    shadow: true,
    shape: 'dot'
  },

  // PILARES PRINCIPAIS (Nível 1) - MAIORES
  { 
    id: 2, 
    label: '⛓️ Blockchains',
    description: 'Redes Blockchain - A Fundação\\n\\nCadeias de blocos que sustentam todo o ecossistema:\\n• Layer 1: Blockchains principais\\n• Layer 2: Soluções de escalabilidade\\n• Sidechains: Redes paralelas\\n• Consensus: PoW, PoS, DPoS\\n• Interoperabilidade entre chains',
    color: '#4CAF50',
    icon: { face: 'FontAwesome', code: unicodeToChar('\\uf1e0'), size: 48, color: '#ffffff' },
    size: 55,
    font: { size: 17, color: '#ffffff', strokeWidth: 2, strokeColor: '#000000' },
    borderWidth: 2,
    shape: 'dot'
  },
  { 
    id: 3, 
    label: '💰 DeFi',
    description: 'Finanças Descentralizadas\\n\\nO sistema financeiro sem intermediários:\\n• Empréstimos e crédito P2P\\n• Exchanges descentralizadas\\n• Yield farming e staking\\n• Stablecoins algorítmicas\\n• Derivativos e futuros\\n• Seguros descentralizados',
    color: '#2196F3',
    icon: { face: 'FontAwesome', code: unicodeToChar('\\uf155'), size: 48, color: '#ffffff' },
    size: 55,
    font: { size: 17, color: '#ffffff', strokeWidth: 2, strokeColor: '#000000' },
    borderWidth: 2,
    shape: 'dot'
  },
  { 
    id: 4, 
    label: '🎨 NFTs & Gaming',
    description: 'Ativos Digitais Únicos\\n\\nPropriedade digital verificável:\\n• Arte digital colecionável\\n• Gaming play-to-earn\\n• Metaversos imersivos\\n• Música e royalties\\n• Identidade digital\\n• Virtual real estate',
    color: '#9C27B0',
    icon: { face: 'FontAwesome', code: unicodeToChar('\\uf1fc'), size: 48, color: '#ffffff' },
    size: 50,
    font: { size: 16, color: '#ffffff', strokeWidth: 2, strokeColor: '#000000' },
    borderWidth: 2,
    shape: 'dot'
  },
  { 
    id: 5, 
    label: '🏗️ Infrastructure',
    description: 'Infraestrutura Web3\\n\\nFerramentas que constroem o futuro:\\n• Oracles: Dados do mundo real\\n• Storage: Armazenamento descentralizado\\n• Identity: Identidade soberana\\n• Bridges: Pontes entre chains\\n• Dev tools: SDKs e frameworks\\n• Wallets: Custódia de ativos',
    color: '#FF5722',
    icon: { face: 'FontAwesome', code: unicodeToChar('\\uf233'), size: 48, color: '#ffffff' },
    size: 50,
    font: { size: 16, color: '#ffffff', strokeWidth: 2, strokeColor: '#000000' },
    borderWidth: 2,
    shape: 'dot'
  },
  { 
    id: 6, 
    label: '🪙 Cryptocurrencies',
    description: 'Moedas Digitais\\n\\nO dinheiro do futuro:\\n• Bitcoin: 🥇 A PRIMEIRA (2009)\\n• Altcoins: Moedas alternativas\\n• Stablecoins: Estabilidade\\n• Privacy coins: Privacidade\\n• Memecoins: Cultura cripto\\n• CBDCs: Moedas digitais de bancos centrais',
    color: '#FF9800',
    icon: { face: 'FontAwesome', code: unicodeToChar('\\uf15a'), size: 48, color: '#ffffff' },
    size: 50,
    font: { size: 16, color: '#ffffff', strokeWidth: 2, strokeColor: '#000000' },
    borderWidth: 2,
    shape: 'dot'
  },
  { 
    id: 7, 
    label: '🏛️ DAOs',
    description: 'Organizações Autônomas Descentralizadas\\n\\nGovernança sem hierarquia:\\n• Votação on-chain\\n• Tesouraria comunitária\\n• Propostas transparentes\\n• Execução automática\\n• Governança tokenizada',
    color: '#00BCD4',
    icon: { face: 'FontAwesome', code: unicodeToChar('\\uf0c0'), size: 42, color: '#ffffff' },
    size: 42,
    font: { size: 15, color: '#ffffff', strokeWidth: 2, strokeColor: '#000000' },
    borderWidth: 2,
    shape: 'dot'
  },
  { 
    id: 8, 
    label: '🏦 CEXs',
    description: 'Exchanges Centralizadas\\n\\n⚠️ CENTRALIZADAS - Pontes para Web3:\\n• Fiat on-ramp (entrada)\\n• Alta liquidez\\n• Trading avançado\\n• Custódia centralizada\\n• KYC obrigatório\\n• Não são descentralizadas',
    color: '#607D8B',
    icon: { face: 'FontAwesome', code: unicodeToChar('\\uf19c'), size: 42, color: '#ffffff' },
    size: 42,
    font: { size: 15, color: '#ffffff', strokeWidth: 2, strokeColor: '#000000' },
    borderWidth: 2,
    shape: 'dot'
  },
  { 
    id: 9, 
    label: '🤖 AI + Crypto',
    description: 'Inteligência Artificial Descentralizada\\n\\nA maior tendência de 2024-2025:\\n• Compute networks\\n• AI agents on-chain\\n• Decentralized training\\n• AI inference\\n• Data marketplaces',
    color: '#E91E63',
    icon: { face: 'FontAwesome', code: unicodeToChar('\\uf544'), size: 42, color: '#ffffff' },
    size: 42,
    font: { size: 15, color: '#ffffff', strokeWidth: 2, strokeColor: '#000000' },
    borderWidth: 2,
    shape: 'dot'
  },
  { 
    id: 10, 
    label: '🏛️ RWA',
    description: 'Real World Assets\\n\\nTokenização do mundo real:\\n• Títulos e bonds\\n• Imóveis tokenizados\\n• Crédito privado\\n• Commodities\\n• Ativos tradicionais on-chain',
    color: '#795548',
    icon: { face: 'FontAwesome', code: unicodeToChar('\\uf1ad'), size: 42, color: '#ffffff' },
    size: 42,
    font: { size: 15, color: '#ffffff', strokeWidth: 2, strokeColor: '#000000' },
    borderWidth: 2,
    shape: 'dot'
  },
  { 
    id: 11, 
    label: '🔐 ZK Tech',
    description: 'Zero Knowledge Technology\\n\\nPrivacidade e escalabilidade:\\n• ZK-rollups\\n• ZK-proofs\\n• Privacy preserving\\n• Scalability solution\\n• Future of Ethereum',
    color: '#673AB7',
    icon: { face: 'FontAwesome', code: unicodeToChar('\\uf084'), size: 42, color: '#ffffff' },
    size: 42,
    font: { size: 15, color: '#ffffff', strokeWidth: 2, strokeColor: '#000000' },
    borderWidth: 2,
    shape: 'dot'
  },
  { 
    id: 12, 
    label: '📊 Data Aggregators',
    description: 'Agregadores de Dados\\n\\nFerramentas essenciais do ecossistema:\\n• Preços e market cap\\n• TVL e métricas DeFi\\n• Análise on-chain\\n• Portfolio tracking\\n• Research tools',
    color: '#009688',
    icon: { face: 'FontAwesome', code: unicodeToChar('\\uf1fe'), size: 42, color: '#ffffff' },
    size: 42,
    font: { size: 15, color: '#ffffff', strokeWidth: 2, strokeColor: '#000000' },
    borderWidth: 2,
    shape: 'dot'
  },
  { 
    id: 13, 
    label: '💸 Yield Methods',
    description: 'Métodos de Rendimento\\n\\nComo ganhar no cripto:\\n• Renda Passiva (DeFi)\\n• Renda Ativa (Trading)\\n• Staking e farming\\n• Arbitragem\\n• MEV',
    color: '#FFC107',
    icon: { face: 'FontAwesome', code: unicodeToChar('\\uf155'), size: 42, color: '#ffffff' },
    size: 42,
    font: { size: 15, color: '#ffffff', strokeWidth: 2, strokeColor: '#000000' },
    borderWidth: 2,
    shape: 'dot'
  },

  // BLOCKCHAINS (Nível 2) - Layer 1
  { id: 20, label: 'Layer 1', description: 'Blockchains principais\\nBase layer • Segurança nativa • Consensus próprio', color: '#2E7D32', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf1e0'), size: 30, color: '#ffffff' }, size: 35, shape: 'dot', borderWidth: 2 },
  { id: 21, label: 'Bitcoin', description: 'A primeira e mais valiosa criptomoeda\\nProof of Work • Store of Value • 21M supply', color: '#F7931A', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf15a'), size: 28, color: '#ffffff' }, size: 32, shape: 'dot', borderWidth: 2 },
  { id: 22, label: 'Ethereum', description: 'Plataforma de smart contracts líder\\nProof of Stake • EVM • DeFi Hub', color: '#627EEA', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf1e0'), size: 28, color: '#ffffff' }, size: 32, shape: 'dot', borderWidth: 2 },
  { id: 23, label: 'Solana', description: 'Blockchain ultra-rápida\\n65k TPS • Low fees • NFT powerhouse', color: '#14F195', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf0e7'), size: 28, color: '#000000' }, size: 30, shape: 'dot', borderWidth: 2 },
  { id: 25, label: 'Cardano', description: 'Blockchain acadêmica\\nProof of Stake • Peer-reviewed • Sustentável', color: '#0033AD', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf02d'), size: 28, color: '#ffffff' }, size: 28, shape: 'dot', borderWidth: 2 },
  { id: 26, label: 'Avalanche', description: 'Plataforma de contratos inteligentes\\nSubnets • Fast finality • EVM compatible', color: '#E84142', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf2dc'), size: 28, color: '#ffffff' }, size: 28, shape: 'dot', borderWidth: 2 },
  { id: 27, label: 'Polkadot', description: 'Blockchain de blockchains\\nParachains • Interoperability • Shared security', color: '#E6007A', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf1e0'), size: 28, color: '#ffffff' }, size: 28, shape: 'dot', borderWidth: 2 },
  { id: 24, label: 'BSC', description: 'Binance Smart Chain\\nEVM compatible • Low fees • High throughput', color: '#F3BA2F', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf1e0'), size: 28, color: '#000000' }, size: 30, shape: 'dot', borderWidth: 2 },
  { id: 241, label: 'Polygon PoS', description: 'Sidechain do Ethereum\\nPoS • EVM compatible • Não é L2 verdadeiro', color: '#8247E5', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf1e0'), size: 28, color: '#ffffff' }, size: 28, shape: 'dot', borderWidth: 2 },
  { id: 281, label: 'Cosmos', description: 'Internet of Blockchains\\nIBC protocol • Interoperability • Tendermint', color: '#2E3148', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf1e0'), size: 28, color: '#ffffff' }, size: 28, shape: 'dot', borderWidth: 2 },
  { id: 211, label: 'Sui', description: 'Blockchain de alta performance\\nMove language • Parallel execution • 2023', color: '#4DA2FF', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf0e7'), size: 26, color: '#ffffff' }, size: 26, shape: 'dot', borderWidth: 2 },
  { id: 212, label: 'Aptos', description: 'Blockchain escalável\\nMove language • Ex-Diem team • 2022', color: '#00D4AA', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf0e7'), size: 26, color: '#000000' }, size: 26, shape: 'dot', borderWidth: 2 },

  // Layer 2
  { id: 28, label: 'Layer 2', description: 'Soluções de escalabilidade\\nRollups verdadeiros • Herda segurança do L1', color: '#1B5E20', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf0e8'), size: 30, color: '#ffffff' }, size: 35, shape: 'dot', borderWidth: 2 },

  { id: 282, label: 'Arbitrum', description: 'Optimistic rollup\\nEVM compatible • Low fees • Fast', color: '#28A0F0', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf1e0'), size: 26, color: '#ffffff' }, size: 28, shape: 'dot', borderWidth: 2 },
  { id: 283, label: 'Optimism', description: 'Optimistic rollup\\nEVM equivalent • OP Stack • Superchain', color: '#FF0420', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf1e0'), size: 26, color: '#ffffff' }, size: 28, shape: 'dot', borderWidth: 2 },
  { id: 284, label: 'Base', description: 'L2 da Coinbase\\nOP Stack • Onboarding • Mainstream', color: '#0052FF', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf1e0'), size: 26, color: '#ffffff' }, size: 26, shape: 'dot', borderWidth: 2 },
  { id: 285, label: 'Blast', description: 'L2 com yield nativo\\nNative yield • ETH/stablecoin • 2024', color: '#FCFF52', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf0e7'), size: 26, color: '#000000' }, size: 26, shape: 'dot', borderWidth: 2 },

  // Bitcoin L2s
  { id: 29, label: 'Bitcoin L2', description: 'Layers sobre Bitcoin\\nDeFi no Bitcoin • Smart contracts • Scaling', color: '#FF8C00', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf0e7'), size: 30, color: '#ffffff' }, size: 35, shape: 'dot', borderWidth: 2 },

  { id: 291, label: 'Lightning', description: 'Payment channels\\nInstant • Low fees • Scalability', color: '#F7931A', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf0e7'), size: 26, color: '#ffffff' }, size: 28, shape: 'dot', borderWidth: 2 },
  { id: 292, label: 'Stacks', description: 'Smart contracts no Bitcoin\\nSTX • Clarity • Bitcoin finality', color: '#5546FF', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf1e0'), size: 26, color: '#ffffff' }, size: 26, shape: 'dot', borderWidth: 2 },
  { id: 293, label: 'Rootstock', description: 'EVM sidechain do Bitcoin\\nRBTC • Merge-mined • DeFi', color: '#00A651', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf1e0'), size: 26, color: '#ffffff' }, size: 26, shape: 'dot', borderWidth: 2 },
  { id: 294, label: 'Ordinals', description: 'NFTs no Bitcoin\\nInscriptions • Digital artifacts • BTC native', color: '#FF6B35', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf1fc'), size: 26, color: '#ffffff' }, size: 26, shape: 'dot', borderWidth: 2 },
  { id: 295, label: 'Runes', description: 'Tokens fungíveis no Bitcoin\\nBTC-native tokens • Post-halving 2024', color: '#FF8C42', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf0d6'), size: 26, color: '#ffffff' }, size: 26, shape: 'dot', borderWidth: 2 },

  // DeFi (Nível 2)
  { id: 31, label: 'Uniswap', description: '[DEX Protocol] Líder no Ethereum\\nAMM • Liquidity pools • UNI token', color: '#FF007A', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf362'), size: 28, color: '#ffffff' }, size: 30, shape: 'dot', borderWidth: 2 },
  { id: 32, label: 'Aave', description: '[Lending Protocol] Empréstimos\\nLending • Borrowing • Flash loans', color: '#B6509E', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf155'), size: 28, color: '#ffffff' }, size: 30, shape: 'dot', borderWidth: 2 },
  { id: 33, label: 'Compound', description: '[Lending Protocol] Mercado algorítmico\\nSupply • Borrow • COMP governance', color: '#00D395', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf155'), size: 28, color: '#ffffff' }, size: 28, shape: 'dot', borderWidth: 2 },
  { id: 34, label: 'MakerDAO', description: '[Stablecoin Protocol] DAI\\nCollateralized debt • MKR governance', color: '#1AAB9B', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf0d6'), size: 28, color: '#ffffff' }, size: 28, shape: 'dot', borderWidth: 2 },
  { id: 35, label: 'Curve', description: '[DEX Protocol] Stablecoins\\nLow slippage • High efficiency • CRV rewards', color: '#40649F', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf201'), size: 28, color: '#ffffff' }, size: 26, shape: 'dot', borderWidth: 2 },
  { id: 36, label: 'PancakeSwap', description: '[DEX Protocol] BSC\\nFarms • Pools • CAKE token', color: '#D1884F', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf1fd'), size: 28, color: '#ffffff' }, size: 26, shape: 'dot', borderWidth: 2 },

  // Liquid Staking
  { id: 37, label: 'Lido', description: '[Liquid Staking] Líder\\nstETH • Multi-chain • Maior TVL DeFi', color: '#00A3FF', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf043'), size: 28, color: '#ffffff' }, size: 30, shape: 'dot', borderWidth: 2 },
  { id: 38, label: 'Rocket Pool', description: '[Liquid Staking] Descentralizado\\nrETH • Node operators • Trustless', color: '#FF6B4A', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf135'), size: 28, color: '#ffffff' }, size: 26, shape: 'dot', borderWidth: 2 },

  // Perps DEXs
  { id: 39, label: 'GMX', description: '[Perps DEX] Derivativos\\nGLP • Low fees • Real yield', color: '#1E88E5', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf201'), size: 28, color: '#ffffff' }, size: 28, shape: 'dot', borderWidth: 2 },
  { id: 391, label: 'dYdX', description: '[Perps DEX] Orderbook\\nDYDX • High leverage • Professional', color: '#6966FF', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf201'), size: 28, color: '#ffffff' }, size: 28, shape: 'dot', borderWidth: 2 },
  { id: 392, label: 'Hyperliquid', description: '[Perps DEX] High-performance\\nOn-chain orderbook • HLP • Fast', color: '#00D4AA', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf0e7'), size: 28, color: '#000000' }, size: 26, shape: 'dot', borderWidth: 2 },

  // NFTs & Gaming (Nível 2)
  { id: 41, label: 'OpenSea', description: '[NFT Marketplace] Maior do mundo\\nMulti-chain • Coleções • Leilões', color: '#2081E2', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf290'), size: 28, color: '#ffffff' }, size: 30, shape: 'dot', borderWidth: 2 },
  { id: 42, label: 'Axie Infinity', description: '[GameFi] Play-to-earn pioneiro\\nNFT creatures • Breeding • SLP/AXS economy', color: '#0055D5', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf11b'), size: 28, color: '#ffffff' }, size: 28, shape: 'dot', borderWidth: 2 },
  { id: 43, label: 'Decentraland', description: '[Metaverse] Mundo virtual\\nVirtual land • MANA token • Social experiences', color: '#FF2D55', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf6ff'), size: 28, color: '#ffffff' }, size: 28, shape: 'dot', borderWidth: 2 },
  { id: 44, label: 'The Sandbox', description: '[Metaverse] Criativo\\nVoxel worlds • LAND • User-generated content', color: '#04ADEF', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf1b3'), size: 28, color: '#ffffff' }, size: 28, shape: 'dot', borderWidth: 2 },
  { id: 45, label: 'Bored Apes', description: '[NFT Collection] Icônica\\nPFP • Community • Yuga Labs', color: '#8B4513', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf1fc'), size: 28, color: '#ffffff' }, size: 26, shape: 'dot', borderWidth: 2 },
  { id: 46, label: 'Gods Unchained', description: '[GameFi] Trading card game\\nPlay-to-earn • NFT cards • Competitive', color: '#1E3A8A', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf2db'), size: 28, color: '#ffffff' }, size: 26, shape: 'dot', borderWidth: 2 },
  { id: 47, label: 'Magic Eden', description: '[NFT Marketplace] Multi-chain\\nSolana • Bitcoin • Ethereum • Cross-chain', color: '#E42575', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf290'), size: 28, color: '#ffffff' }, size: 28, shape: 'dot', borderWidth: 2 },

  // Infrastructure (Nível 2)
  { id: 51, label: 'Chainlink', description: '[Oracle] Rede descentralizada\\nPrice feeds • VRF • Automation', color: '#375BD2', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf1e0'), size: 28, color: '#ffffff' }, size: 30, shape: 'dot', borderWidth: 2 },
  { id: 52, label: 'IPFS', description: '[Storage] Armazenamento descentralizado\\nPeer-to-peer • Content addressing • Filecoin', color: '#65C2CB', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf1c0'), size: 28, color: '#ffffff' }, size: 28, shape: 'dot', borderWidth: 2 },
  { id: 53, label: 'ENS', description: '[Identity] Ethereum Name Service\\nDomínios .eth • Identidade • Resolução', color: '#5284FF', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf02b'), size: 28, color: '#ffffff' }, size: 28, shape: 'dot', borderWidth: 2 },
  { id: 54, label: 'The Graph', description: '[Indexer] Indexação de dados blockchain\\nSubgraphs • Query • GRT token', color: '#6747ED', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf1fe'), size: 28, color: '#ffffff' }, size: 28, shape: 'dot', borderWidth: 2 },
  { id: 56, label: 'Infura', description: '[Dev Tool] Infraestrutura blockchain\\nRPC nodes • APIs • Developer tools', color: '#FF6B4A', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf233'), size: 28, color: '#ffffff' }, size: 26, shape: 'dot', borderWidth: 2 },

  // Wallets (subcategoria de Infrastructure)
  { id: 57, label: 'Wallets', description: 'Carteiras Cripto\\nCustódia de ativos • Self-custody vs Custodial', color: '#FF7043', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf555'), size: 30, color: '#ffffff' }, size: 35, shape: 'dot', borderWidth: 2 },

  { id: 571, label: 'Hot Wallets', description: '[Self-Custody] Carteiras online\\nMetaMask • Trust Wallet • Phantom\\nVocê controla as chaves', color: '#FF8A65', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf555'), size: 28, color: '#ffffff' }, size: 30, shape: 'dot', borderWidth: 2 },
  { id: 572, label: 'Cold Wallets', description: '[Self-Custody] Hardware wallets\\nLedger • Trezor • Offline\\nMáxima segurança', color: '#FFAB91', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf023'), size: 28, color: '#ffffff' }, size: 30, shape: 'dot', borderWidth: 2 },

  { id: 5711, label: 'MetaMask', description: 'Hot wallet líder\\nBrowser extension • Mobile • EVM chains', color: '#F6851B', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf555'), size: 26, color: '#ffffff' }, size: 28, shape: 'dot', borderWidth: 2 },
  { id: 5712, label: 'Phantom', description: 'Wallet da Solana\\nSolana • Ethereum • Multi-chain', color: '#AB9FF2', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf555'), size: 26, color: '#ffffff' }, size: 26, shape: 'dot', borderWidth: 2 },
  { id: 5713, label: 'Trust Wallet', description: 'Wallet da Binance\\nMulti-chain • Mobile • DeFi', color: '#3375BB', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf555'), size: 26, color: '#ffffff' }, size: 26, shape: 'dot', borderWidth: 2 },

  { id: 5721, label: 'Ledger', description: 'Hardware wallet líder\\nNano S/X • Secure element • Multi-coin', color: '#000000', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf023'), size: 26, color: '#ffffff' }, size: 28, shape: 'dot', borderWidth: 2 },
  { id: 5722, label: 'Trezor', description: 'Hardware wallet open-source\\nModel One/T • Bitcoin focus • Secure', color: '#0F6148', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf023'), size: 26, color: '#ffffff' }, size: 26, shape: 'dot', borderWidth: 2 },

  // Cryptocurrencies (Nível 2)
  // Altcoins
  { id: 61, label: 'Altcoins', description: 'Moedas alternativas ao Bitcoin\\nDiversos casos de uso • Inovação • Especulação', color: '#FF6F00', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf0d6'), size: 30, color: '#ffffff' }, size: 35, shape: 'dot', borderWidth: 2 },

  { id: 611, label: 'BNB', description: 'Token da Binance\\nBSC gas • Utility • Burn mechanism', color: '#F3BA2F', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf15a'), size: 26, color: '#000000' }, size: 28, shape: 'dot', borderWidth: 2 },
  { id: 612, label: 'XRP', description: 'Pagamentos internacionais\\nRipple • Fast • Low cost', color: '#23292F', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf0ec'), size: 26, color: '#ffffff' }, size: 26, shape: 'dot', borderWidth: 2 },
  { id: 613, label: 'Litecoin', description: 'Prata digital\\nFast transactions • Low fees • Bitcoin fork', color: '#345D9D', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf15a'), size: 26, color: '#ffffff' }, size: 26, shape: 'dot', borderWidth: 2 },

  // Stablecoins
  { id: 62, label: 'Stablecoins', description: 'Moedas estáveis\\npegged to fiat • Low volatility • Bridge to DeFi', color: '#26A17B', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf155'), size: 30, color: '#ffffff' }, size: 35, shape: 'dot', borderWidth: 2 },

  { id: 621, label: 'USDT', description: 'Stablecoin mais usada\\nTether • 1:1 USD • Multi-chain', color: '#26A17B', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf155'), size: 26, color: '#ffffff' }, size: 28, shape: 'dot', borderWidth: 2 },
  { id: 622, label: 'USDC', description: 'Stablecoin regulada\\nCircle • Transparente • Reservas auditadas', color: '#2775CA', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf155'), size: 26, color: '#ffffff' }, size: 28, shape: 'dot', borderWidth: 2 },
  { id: 623, label: 'DAI', description: 'Stablecoin descentralizada\\nMakerDAO • Collateralized • Algorithmic', color: '#F5AC37', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf155'), size: 26, color: '#ffffff' }, size: 26, shape: 'dot', borderWidth: 2 },

  // Memecoins & Privacy
  { id: 63, label: 'Memecoins', description: 'Cultura cripto\\nCommunity-driven • Viral • High risk', color: '#C2A633', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf1b0'), size: 28, color: '#ffffff' }, size: 30, shape: 'dot', borderWidth: 2 },

  { id: 631, label: 'Dogecoin', description: 'Memecoin original\\nCommunity-driven • Elon Musk • Much wow', color: '#C2A633', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf1b0'), size: 26, color: '#ffffff' }, size: 26, shape: 'dot', borderWidth: 2 },
  { id: 632, label: 'Shiba Inu', description: 'Dogecoin killer\\nERC-20 • ShibaSwap • Ecosystem', color: '#FFA409', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf1b0'), size: 26, color: '#ffffff' }, size: 26, shape: 'dot', borderWidth: 2 },

  { id: 64, label: 'Privacy Coins', description: 'Privacidade total\\nUntraceable • Anonymous • Fungible', color: '#FF6600', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf21b'), size: 28, color: '#ffffff' }, size: 30, shape: 'dot', borderWidth: 2 },

  { id: 641, label: 'Monero', description: 'Privacy coin líder\\nUntraceable • Fungible • Ring signatures', color: '#FF6600', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf21b'), size: 26, color: '#ffffff' }, size: 26, shape: 'dot', borderWidth: 2 },
  { id: 642, label: 'Zcash', description: 'Privacy opcional\\nzk-SNARKs • Shielded transactions', color: '#F4B728', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf21b'), size: 26, color: '#ffffff' }, size: 26, shape: 'dot', borderWidth: 2 },

  // DAOs (Nível 2)
  { id: 71, label: 'MakerDAO', description: 'DAO do protocolo Maker\\nMKR governance • DAI stability • Votação', color: '#1AAB9B', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf0c0'), size: 28, color: '#ffffff' }, size: 28, shape: 'dot', borderWidth: 2 },
  { id: 72, label: 'Uniswap DAO', description: 'Governança do Uniswap\\nUNI token • Propostas • Treasury', color: '#FF007A', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf0c0'), size: 28, color: '#ffffff' }, size: 26, shape: 'dot', borderWidth: 2 },
  { id: 73, label: 'Aragon', description: 'Plataforma para criar DAOs\\nGovernance tools • Voting • Treasury management', color: '#00C2FF', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf0c0'), size: 28, color: '#ffffff' }, size: 26, shape: 'dot', borderWidth: 2 },
  { id: 74, label: 'Snapshot', description: 'Votação off-chain\\nGasless • Multi-strategy • Governance', color: '#F3B04E', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf03a'), size: 28, color: '#ffffff' }, size: 26, shape: 'dot', borderWidth: 2 },

  // CEXs (Nível 2)
  { id: 81, label: 'Binance', description: 'Maior exchange do mundo\\nAlto volume • BNB • Launchpad', color: '#F3BA2F', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf19c'), size: 28, color: '#000000' }, size: 30, shape: 'dot', borderWidth: 2 },
  { id: 82, label: 'Coinbase', description: 'Exchange regulada nos EUA\\nUser-friendly • IPO • Institutional', color: '#0052FF', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf19c'), size: 28, color: '#ffffff' }, size: 28, shape: 'dot', borderWidth: 2 },
  { id: 83, label: 'Kraken', description: 'Exchange veterana\\nSegurança • Staking • Futures', color: '#5741D9', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf19c'), size: 28, color: '#ffffff' }, size: 26, shape: 'dot', borderWidth: 2 },
  { id: 84, label: 'Bybit', description: 'Exchange de derivativos\\nLeverage • Perpetuals • Copy trading', color: '#F7A600', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf19c'), size: 28, color: '#000000' }, size: 26, shape: 'dot', borderWidth: 2 },

  // AI + Crypto (Nível 2)
  { id: 91, label: 'Bittensor', description: 'Rede neural descentralizada\\nTAO token • AI marketplace • Subnets', color: '#FF1744', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf544'), size: 28, color: '#ffffff' }, size: 30, shape: 'dot', borderWidth: 2 },
  { id: 92, label: 'Render', description: 'GPU rendering descentralizado\\nRNDR • 3D rendering • AI compute', color: '#E91E63', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf26c'), size: 28, color: '#ffffff' }, size: 28, shape: 'dot', borderWidth: 2 },
  { id: 93, label: 'Fetch.ai', description: 'Autonomous agents\\nFET • AI agents • Machine learning', color: '#9C27B0', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf544'), size: 28, color: '#ffffff' }, size: 28, shape: 'dot', borderWidth: 2 },
  { id: 94, label: 'Akash', description: 'Supercloud descentralizado\\nAKT • Compute marketplace • DeCloud', color: '#D81B60', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf0c2'), size: 28, color: '#ffffff' }, size: 26, shape: 'dot', borderWidth: 2 },

  // RWA (Nível 2)
  { id: 101, label: 'Ondo Finance', description: 'Títulos tokenizados\\nUSBY • OUSG • Institutional DeFi', color: '#8D6E63', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf1ad'), size: 28, color: '#ffffff' }, size: 30, shape: 'dot', borderWidth: 2 },
  { id: 102, label: 'Centrifuge', description: 'Crédito privado on-chain\\nCFG • Real-world assets • Tinlake', color: '#795548', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf1ad'), size: 28, color: '#ffffff' }, size: 28, shape: 'dot', borderWidth: 2 },
  { id: 103, label: 'Maple Finance', description: 'Empréstimos institucionais\\nMPL • Undercollateralized • Credit', color: '#6D4C41', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf19c'), size: 28, color: '#ffffff' }, size: 26, shape: 'dot', borderWidth: 2 },

  // ZK Tech (Nível 2)
  { id: 111, label: 'zkSync', description: 'ZK-rollup do Ethereum\\nZK token • EVM compatible • Hyperchains', color: '#7B1FA2', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf084'), size: 28, color: '#ffffff' }, size: 30, shape: 'dot', borderWidth: 2 },
  { id: 112, label: 'StarkNet', description: 'ZK-STARK rollup\\nSTRK • Cairo • Validity proofs', color: '#673AB7', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf084'), size: 28, color: '#ffffff' }, size: 28, shape: 'dot', borderWidth: 2 },
  { id: 113, label: 'Polygon zkEVM', description: 'ZK-rollup EVM equivalente\\nPOL • Full EVM • Type 2 zkEVM', color: '#8247E5', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf084'), size: 28, color: '#ffffff' }, size: 28, shape: 'dot', borderWidth: 2 },
  { id: 114, label: 'Aztec', description: 'Privacy-focused ZK\\nPrivate smart contracts • Noir language', color: '#512DA8', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf21b'), size: 28, color: '#ffffff' }, size: 26, shape: 'dot', borderWidth: 2 },

  // Data Aggregators (Nível 2)
  { id: 121, label: 'CoinMarketCap', description: '[Price Aggregator] Líder de preços\\nMarket cap • Rankings • Portfolio', color: '#3861FB', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf1fe'), size: 28, color: '#ffffff' }, size: 30, shape: 'dot', borderWidth: 2 },
  { id: 122, label: 'CoinGecko', description: '[Price Aggregator] Dados completos\\nPreços • NFTs • DeFi • API', color: '#8DC63F', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf1fe'), size: 28, color: '#ffffff' }, size: 30, shape: 'dot', borderWidth: 2 },
  { id: 123, label: 'DefiLlama', description: '[DeFi Aggregator] TVL e métricas\\nTVL • Yields • Chains • Protocols', color: '#2D6DF6', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf1fe'), size: 28, color: '#ffffff' }, size: 28, shape: 'dot', borderWidth: 2 },
  { id: 124, label: 'DexScreener', description: '[DEX Aggregator] Charts real-time\\nMulti-chain • Trading view • Alerts', color: '#0E111B', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf201'), size: 28, color: '#ffffff' }, size: 28, shape: 'dot', borderWidth: 2 },
  { id: 125, label: 'Token Terminal', description: '[Analytics] Métricas financeiras\\nRevenue • Fees • P/F ratio • Fundamentals', color: '#00D4AA', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf1fe'), size: 28, color: '#000000' }, size: 26, shape: 'dot', borderWidth: 2 },
  { id: 126, label: 'Nansen', description: '[Analytics] On-chain intelligence\\nSmart money • Wallet tracking • Alpha', color: '#6366F1', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf1fe'), size: 28, color: '#ffffff' }, size: 26, shape: 'dot', borderWidth: 2 },
  { id: 127, label: 'DappRadar', description: '[dApp Aggregator] Descoberta de dApps\\nRankings • Analytics • Multi-chain • NFTs', color: '#7B3FE4', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf1fe'), size: 28, color: '#ffffff' }, size: 28, shape: 'dot', borderWidth: 2 },

  // Yield Methods (Nível 2)
  // Renda Passiva
  { id: 131, label: 'Renda Passiva', description: 'Ganhos automáticos DeFi\\nStaking • Farming • Lending • LP', color: '#4CAF50', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf0d6'), size: 30, color: '#ffffff' }, size: 35, shape: 'dot', borderWidth: 2 },

  { id: 1311, label: 'Staking', description: 'Stake tokens por recompensas\\nETH staking • Validators • APY 3-8%', color: '#66BB6A', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf0d6'), size: 26, color: '#ffffff' }, size: 28, shape: 'dot', borderWidth: 2 },
  { id: 1312, label: 'Yield Farming', description: '[LP + Rewards] Stake LP tokens\\nLP tokens em farms • Rewards extras\\nAPY 10-100%+ • Mais complexo', color: '#81C784', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf1b3'), size: 26, color: '#ffffff' }, size: 28, shape: 'dot', borderWidth: 2 },
  { id: 1313, label: 'Lending', description: '[Empréstimo] Empresta cripto\\nAave • Compound • APY 2-15%\\nSem impermanent loss', color: '#A5D6A7', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf19c'), size: 26, color: '#ffffff' }, size: 26, shape: 'dot', borderWidth: 2 },
  { id: 1314, label: 'Liquidity Providing', description: '[LP Básico] Fornece liquidez\\nUniswap V3 • Ranges • Fees 0.05-1%\\nImpermanent loss risk • Só fees', color: '#C8E6C9', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf043'), size: 26, color: '#000000' }, size: 28, shape: 'dot', borderWidth: 2 },

  // Renda Ativa
  { id: 132, label: 'Renda Ativa', description: 'Trading e estratégias ativas\\nSpot • Futures • Arbitragem • MEV', color: '#FF9800', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf201'), size: 30, color: '#ffffff' }, size: 35, shape: 'dot', borderWidth: 2 },

  { id: 1321, label: 'Spot Trading', description: 'Compra e venda direta\\nCEXs • DEXs • Day trading', color: '#FFB74D', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf201'), size: 26, color: '#ffffff' }, size: 28, shape: 'dot', borderWidth: 2 },
  { id: 1322, label: 'Futures/Perps', description: 'Trading com alavancagem\\nLeverage 1-100x • Funding rates', color: '#FFCC80', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf201'), size: 26, color: '#ffffff' }, size: 28, shape: 'dot', borderWidth: 2 },
  { id: 1323, label: 'Arbitragem', description: 'Lucro com diferenças de preço\\nCEX-DEX • Cross-chain • Flash loans', color: '#FFE0B2', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf0ec'), size: 26, color: '#000000' }, size: 26, shape: 'dot', borderWidth: 2 },
  { id: 1324, label: 'MEV', description: 'Maximal Extractable Value\\nFront-running • Sandwich • Flashbots', color: '#FFAB91', icon: { face: 'FontAwesome', code: unicodeToChar('\\uf0e7'), size: 26, color: '#ffffff' }, size: 26, shape: 'dot', borderWidth: 2 }
];

// Aplicar logos aos nodes que têm ícones disponíveis
export const nodes: Node[] = rawNodes.map(node => {
  const iconPath = getCryptoIconPath(node.id);
  if (iconPath) {
    return {
      ...node,
      image: iconPath,
      shape: 'circularImage',
      size: node.size,
    };
  }
  return node;
});

'use client';

import React, { useEffect, useRef } from 'react';
import { useNetwork } from '@/hooks/useNetwork';
import { useCategories } from '@/hooks/useCategories';
import { useTimeline } from '@/hooks/useTimeline';
import { categories } from '@/data/categories';
import ParticlesBackground from '@/components/Particles/ParticlesBackground';
import HamburgerMenu from '@/components/UI/HamburgerMenu';

const CryptoUniversePage = () => {
  const networkRef = useRef<HTMLDivElement>(null);
  const { network, isReady, fitNetwork, togglePhysics, stabilizeNetwork } = useNetwork('mynetwork');
  const { categoryState, toggleCategory, updateNetworkNodes } = useCategories();
  const { isVisible: timelineVisible, toggleTimeline } = useTimeline();
  
  // Atualizar o grafo quando o estado da categoria mudar
  useEffect(() => {
    if (network) {
      updateNetworkNodes(network);
    }
  }, [categoryState, network, updateNetworkNodes]);
  
  // Configurar o sistema de tooltips
  useEffect(() => {
    if (!network) return;
    
    const tooltip = document.getElementById('tooltip');
    
    const handleHoverNode = (params: any) => {
      if (tooltip) {
        const networkAny = network as any;
        const node = networkAny.body?.data?.nodes?.get(params.node);
        if (node && node.description) {
          const pos = networkAny.canvasToDOM(params.pointer.canvas);
          tooltip.innerHTML = `
            <div class="tooltip-title">${node.label || ''}</div>
            <div class="tooltip-content">${node.description.replace(/\\n/g, '<br>')}</div>
          `;
          tooltip.style.display = 'block';
          tooltip.style.left = (pos.x + 10) + 'px';
          tooltip.style.top = (pos.y - 10) + 'px';
          tooltip.style.transform = 'scale(1)';
          tooltip.style.opacity = '1';
        }
      }
    };
    
    const handleBlurNode = () => {
      if (tooltip) {
        tooltip.style.transform = 'scale(0.9)';
        tooltip.style.opacity = '0';
        setTimeout(() => {
          tooltip.style.display = 'none';
        }, 300);
      }
    };
    
    network.on('hoverNode', handleHoverNode);
    network.on('blurNode', handleBlurNode);
    
    // Cleanup
    return () => {
      network.off('hoverNode', handleHoverNode);
      network.off('blurNode', handleBlurNode);
    };
  }, [network]);
  
  // Configurar tooltips para os itens da timeline
  useEffect(() => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineTooltip = document.createElement('div');
    timelineTooltip.className = 'timeline-item-tooltip z-1000'; // z-index alto para sobrepor outros elementos
    timelineTooltip.style.position = 'fixed';
    timelineTooltip.style.display = 'none';
    document.body.appendChild(timelineTooltip);

    const showTooltip = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const target = mouseEvent.currentTarget as HTMLElement;
      const year = target.getAttribute('data-year');
      const title = target.getAttribute('data-title');
      const desc = target.getAttribute('data-desc');

      if (year && title && desc) {
        timelineTooltip.innerHTML = `
          <div class="timeline-item-tooltip-year">${year}</div>
          <div class="timeline-item-tooltip-title">${title}</div>
          <div class="timeline-item-tooltip-desc">${desc}</div>
        `;
        
        timelineTooltip.style.display = 'block';
        positionTooltip(mouseEvent, timelineTooltip);
      }
    };

    const hideTooltip = () => {
      timelineTooltip.style.display = 'none';
    };

    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      positionTooltip(mouseEvent, timelineTooltip);
    };

    // Função para posicionar o tooltip
    const positionTooltip = (e: MouseEvent, tooltip: HTMLElement) => {
      const tooltipRect = tooltip.getBoundingClientRect();
      const padding = 15;

      let left = e.clientX + padding;
      let top = e.clientY + padding;

      // Ajustar se sair da tela pela direita
      if (left + tooltipRect.width > window.innerWidth) {
        left = e.clientX - tooltipRect.width - padding;
      }

      // Ajustar se sair da tela por baixo
      if (top + tooltipRect.height > window.innerHeight) {
        top = e.clientY - tooltipRect.height - padding;
      }

      // Garantir que não saia pela esquerda
      if (left < padding) {
        left = padding;
      }

      // Garantir que não saia por cima
      if (top < padding) {
        top = padding;
      }

      tooltip.style.left = left + 'px';
      tooltip.style.top = top + 'px';
    };

    // Adicionar eventos a cada item da timeline
    timelineItems.forEach(item => {
      item.addEventListener('mouseenter', showTooltip);
      item.addEventListener('mousemove', handleMouseMove);
      item.addEventListener('mouseleave', hideTooltip);
    });

    // Cleanup
    return () => {
      timelineItems.forEach(item => {
        item.removeEventListener('mouseenter', showTooltip);
        item.removeEventListener('mousemove', handleMouseMove);
        item.removeEventListener('mouseleave', hideTooltip);
      });
      if (timelineTooltip.parentNode) {
        timelineTooltip.parentNode.removeChild(timelineTooltip);
      }
    };
  }, []);
  
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Partículas de fundo */}
      <ParticlesBackground />
      
      {/* Menu Hamburger - Mobile */}
      <HamburgerMenu
        categoryState={categoryState}
        toggleCategory={toggleCategory}
        timelineVisible={timelineVisible}
        toggleTimeline={toggleTimeline}
      />
      
      {/* Texto flutuante */}
      <div className={`floating-text z-10 ${timelineVisible ? 'timeline-active' : ''}`}>
        🌌 Crypto Universe - Web3 Ecosystem
      </div>
      
      {/* Timeline Horizontal */}
      <div className={`timeline-container ${timelineVisible ? '' : 'hidden'} z-10`} id="timelineContainer">
        <div className="timeline-header">📅 Linha do Tempo - Marcos Importantes</div>
        <div className="timeline-track">
          <div className="timeline-line"></div>
          
          {/* Items da timeline */}
          {[
            { year: '2009', title: '🥇 Bitcoin', desc: 'Satoshi Nakamoto lança o Bitcoin, a primeira criptomoeda descentralizada. Genesis block minerado em 3 de janeiro.' },
            { year: '2013', title: '💎 Ethereum Whitepaper', desc: 'Vitalik Buterin publica o whitepaper do Ethereum, propondo uma plataforma para smart contracts e dApps.' },
            { year: '2015', title: '⚡ Ethereum Launch', desc: 'Ethereum é lançado oficialmente, inaugurando a era dos smart contracts e aplicações descentralizadas.' },
            { year: '2017', title: '🚀 ICO Boom', desc: 'Explosão das ICOs (Initial Coin Offerings). Bitcoin atinge $20k. Nascimento do mercado de altcoins.' },
            { year: '2020', title: '💰 DeFi Summer', desc: 'Explosão do DeFi com Uniswap, Aave, Compound. Yield farming e liquidity mining se tornam mainstream.' },
            { year: '2021', title: '🎨 NFT Mania', desc: 'NFTs explodem com CryptoPunks, Bored Apes. Bitcoin atinge $69k. El Salvador adota BTC como moeda legal.' },
            { year: '2022', title: '❄️ Crypto Winter', desc: 'Colapso de Terra/Luna, FTX e 3AC. Mercado bear severo. Lições sobre centralização e risco.' },
            { year: '2023', title: '🔐 ZK & L2 Era', desc: 'Ascensão dos ZK-rollups e Layer 2s. Arbitrum, Optimism, Base ganham tração. Bitcoin Ordinals surgem.' },
            { year: '2024', title: '🤖 AI + Crypto', desc: 'Convergência de AI e blockchain. Bitcoin ETF aprovado. Solana ressurge. RWA tokenization cresce.' },
            { year: '2025', title: '🌐 Mass Adoption', desc: 'Adoção institucional massiva. Regulação clara. Web3 se torna mainstream. O futuro está aqui.' }
          ].map((event, index) => (
            <div 
              key={index}
              className="timeline-item" 
              data-year={event.year} 
              data-title={event.title} 
              data-desc={event.desc}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-year">{event.year}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Container do grafo */}
      <div id="mynetwork" ref={networkRef} className="w-full h-full z-0" />
      
      {/* Tooltip */}
      <div id="tooltip" className="tooltip z-20"></div>
      
      {/* Controles */}
      <div className="controls z-10">
        <button className="control-btn" onClick={fitNetwork}>
          <i className="fas fa-expand"></i> Ajustar
        </button>
        <button className="control-btn" onClick={togglePhysics}>
          <i className="fas fa-atom"></i> Física ON
        </button>
        <button className="control-btn" onClick={stabilizeNetwork}>
          <i className="fas fa-magic"></i> Estabilizar
        </button>
      </div>
    </div>
  );
};

export default CryptoUniversePage;
'use client';

import React, { useEffect, useRef } from 'react';

const ParticlesBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Apenas executar no cliente
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      // Função para inicializar as partículas
      const initParticles = () => {
        // Verificar se já existe uma instância de particles
        const existingCanvas = document.querySelector('.particles-js-canvas-el');
        if (existingCanvas) {
          existingCanvas.remove();
        }
        
        // Criar e adicionar o script do particles.js
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
        
        script.onload = () => {
          // Configuração do particles.js
          const particlesConfig = {
            particles: {
              number: { value: 80, density: { enable: true, value_area: 800 } },
              color: { value: '#ffffff' },
              shape: { type: 'circle' },
              opacity: {
                value: 0.2,
                random: true,
                animation: { enable: true, speed: 1, minimumValue: 0.1, sync: false }
              },
              size: {
                value: 3,
                random: true,
                animation: { enable: true, speed: 4, minimumValue: 0.3, sync: false }
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.1,
                width: 1
              },
              move: {
                enable: true,
                speed: 1,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
              }
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: { enable: true, mode: 'repulse' },
                onclick: { enable: true, mode: 'push' },
                resize: true
              },
              modes: {
                repulse: { distance: 100, duration: 0.4 },
                push: { particles_nb: 4 }
              }
            },
            retina_detect: true
          };

          // Inicializar particles.js
          if ((window as any).particlesJS) {
            (window as any).particlesJS('particles', particlesConfig);
          }
        };

        document.head.appendChild(script);

        // Cleanup
        return () => {
          document.head.removeChild(script);
          
          // Remover o canvas do particles.js se existir
          const canvas = document.querySelector('.particles-js-canvas-el');
          if (canvas && canvas.parentNode) {
            canvas.parentNode.removeChild(canvas);
          }
          
          // Tentar limpar o particlesJS globalmente
          if ((window as any).pJSDom && (window as any).pJSDom.length > 0) {
            (window as any).pJSDom[0].pJS.fn.canvasClear();
          }
        };
      };

      initParticles();
    }
  }, []);

  return <div id="particles" ref={containerRef} className="particles absolute top-0 left-0 w-full h-full z-0" />;
};

export default ParticlesBackground;
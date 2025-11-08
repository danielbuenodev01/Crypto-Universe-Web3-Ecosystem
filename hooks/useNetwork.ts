'use client';

import { useEffect, useState } from 'react';
import { DataSet } from 'vis-data';
import { Network } from 'vis-network';

import { nodes } from '@/data/nodes';
import { edges } from '@/data/edges';

type NetworkHook = {
  network: Network | null;
  isReady: boolean;
  fitNetwork: () => void;
  togglePhysics: () => void;
  stabilizeNetwork: () => void;
};

export const useNetwork = (containerId: string): NetworkHook => {
  const [network, setNetwork] = useState<Network | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [physicsEnabled, setPhysicsEnabled] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const initNetwork = async () => {
        const vis = await import('vis-network');

        // Obter o elemento do DOM
        const container = document.getElementById(containerId);
        if (!container) {
          console.error(`Element with id ${containerId} not found`);
          return;
        }

        // Criar datasets com os dados
        const nodesDataset = new DataSet(nodes);
        const edgesDataset = new DataSet(edges as any);

        const data: any = {
          nodes: nodesDataset,
          edges: edgesDataset
        };

        // Opções de configuração do grafo
        const options: any = {
          nodes: {
            shape: 'dot',
            size: 20,
            font: {
              color: 'white',
              size: 14,
              face: 'Poppins',
              strokeWidth: 2,
              strokeColor: '#000000'
            },
            borderWidth: 2,
            shadow: false,
            scaling: {
              min: 16,
              max: 32,
              label: {
                enabled: true,
                min: 14,
                max: 24,
                maxVisible: 30,
                drawThreshold: 5
              }
            },
            chosen: {
              node: (values: any, id: any, selected: any, hovering: any) => {
                if (hovering) {
                  values.borderWidth = 4;
                }
              }
            }
          },
          edges: {
            width: 0.8,
            color: {
              color: '#ffffff',
              opacity: 0.3,
              highlight: '#ffffff',
              hover: '#ffffff'
            },
            smooth: {
              type: 'continuous',
              roundness: 0.3,
              forceDirection: 'none'
            },
            hoverWidth: 1.5,
            selectionWidth: 1.5,
            arrows: {
              to: {
                enabled: false
              }
            },
            hidden: false,
            physics: true
          },
          interaction: {
            hover: true,
            tooltipDelay: 200,
            hideEdgesOnDrag: false, // Manter linhas visíveis ao arrastar
            hideEdgesOnZoom: false, // Manter linhas visíveis ao dar zoom
            hoverConnectedEdges: true,
            selectConnectedEdges: false,
            zoomView: true,
            dragView: true,
            navigationButtons: false,
            keyboard: true,
            zoomSpeed: 0.6,
            dragNodes: true,
            multiselect: true
          },
          physics: {
            enabled: true,
            barnesHut: {
              gravitationalConstant: -35000, // Mais força para separar rápido
              springConstant: 0.06, // Mais rigidez
              springLength: 80,
              centralGravity: 0.4, // Mais gravidade central
              damping: 0.15, // Mais damping para estabilizar rápido
              avoidOverlap: 0.8 // Evitar sobreposição
            },
            stabilization: {
              enabled: true,
              iterations: 200, // Reduzido drasticamente
              updateInterval: 100, // Menos updates = mais rápido
              fit: true
            },
            minVelocity: 1.5, // Aumentado para parar mais rápido
            maxVelocity: 50, // Mais velocidade inicial
            solver: 'barnesHut',
            timestep: 0.5 // Passos maiores = mais rápido
          }
        };

        // Criar a rede
        const newNetwork = new vis.Network(container, data, options);
        setNetwork(newNetwork);
        setIsReady(true);
        
        // Quando estabilizar, ajustar visualização
        newNetwork.once('stabilizationIterationsDone', () => {
          newNetwork.fit({
            animation: {
              duration: 800,
              easingFunction: 'easeInOutQuad'
            }
          });
        });
      };

      initNetwork();
    }

    // Cleanup
    return () => {
      if (network) {
        network.destroy();
      }
    };
  }, [containerId]);

  const fitNetwork = () => {
    if (network) {
      network.fit({
        animation: {
          duration: 1000,
          easingFunction: 'easeInOutQuad'
        }
      });
    }
  };

  const togglePhysics = () => {
    if (network) {
      const newPhysicsState = !physicsEnabled;
      network.setOptions({
        physics: {
          enabled: newPhysicsState,
          barnesHut: {
            gravitationalConstant: -30000,
            springConstant: 0.04,
            springLength: 70,
            centralGravity: 0.3,
            damping: 0.09,
            avoidOverlap: 0.6
          },
          stabilization: {
            enabled: newPhysicsState,
            iterations: 300,
            updateInterval: 50,
            fit: true
          }
        },
        edges: {
          hidden: false,
          physics: true
        }
      });

      setPhysicsEnabled(newPhysicsState);
      
      // Atualizar texto do botão
      setTimeout(() => {
        const btn = document.querySelector('.control-btn:nth-child(2)');
        if (btn) {
          btn.innerHTML = `<i class="fas fa-atom"></i> Física ${newPhysicsState ? 'ON' : 'OFF'}`;
        }
      }, 100);
    }
  };

  const stabilizeNetwork = () => {
    if (network) {
      // Ativar física temporariamente se estiver desligada
      if (!physicsEnabled) {
        network.setOptions({ physics: { enabled: true } });
      }

      // Estabilizar
      network.stabilize(100);

      // Após estabilizar, voltar ao estado anterior da física
      setTimeout(() => {
        if (!physicsEnabled) {
          network.setOptions({ physics: { enabled: false } });
        }
        // Ajustar a visualização após estabilizar
        network.fit({
          animation: {
            duration: 1000,
            easingFunction: 'easeInOutQuad'
          }
        });
      }, 1000);
    }
  };

  return {
    network,
    isReady,
    fitNetwork,
    togglePhysics,
    stabilizeNetwork
  };
};
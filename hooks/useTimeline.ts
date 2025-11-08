'use client';

import { useState, useEffect } from 'react';
import { timelineEvents } from '@/data/timeline';

type TimelineHook = {
  isVisible: boolean;
  toggleTimeline: () => void;
  events: typeof timelineEvents;
};

export const useTimeline = (): TimelineHook => {
  const [isVisible, setIsVisible] = useState(false);
  
  const toggleTimeline = () => {
    setIsVisible(!isVisible);
    
    // Atualizar classes CSS para mostrar/ocultar a timeline
    setTimeout(() => {
      const timelineContainer = document.getElementById('timelineContainer');
      const mynetwork = document.getElementById('mynetwork');
      
      if (timelineContainer && mynetwork) {
        if (!isVisible) {
          timelineContainer.classList.remove('hidden');
          mynetwork.classList.add('timeline-visible');
        } else {
          timelineContainer.classList.add('hidden');
          mynetwork.classList.remove('timeline-visible');
        }
        
        // Reajustar a visualização do network após a transição
        setTimeout(() => {
          const event = new CustomEvent('timelineChanged');
          window.dispatchEvent(event);
        }, 500);
      }
    }, 10);
  };
  
  return {
    isVisible,
    toggleTimeline,
    events: timelineEvents
  };
};
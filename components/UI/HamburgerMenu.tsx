'use client';

import React, { useState } from 'react';
import { categories } from '@/data/categories';

interface HamburgerMenuProps {
  categoryState: Record<string, boolean>;
  toggleCategory: (categoryId: string) => void;
  timelineVisible: boolean;
  toggleTimeline: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  categoryState,
  toggleCategory,
  timelineVisible,
  toggleTimeline,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Botão Hamburger */}
      <button
        className="hamburger-btn"
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <div className={`hamburger-icon ${isOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="menu-overlay"
          onClick={toggleMenu}
        />
      )}

      {/* Menu Lateral */}
      <div className={`side-menu ${isOpen ? 'open' : ''}`}>
        <div className="side-menu-header">
          <h2>Menu</h2>
          <button
            className="close-menu-btn"
            onClick={toggleMenu}
            aria-label="Fechar menu"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="side-menu-content">
          {/* Seção Linha do Tempo */}
          <div className="menu-section">
            <h3 className="menu-section-title">
              <i className="fas fa-clock"></i> Linha do Tempo
            </h3>
            <button
              className={`menu-toggle-btn ${timelineVisible ? 'active' : ''}`}
              onClick={() => {
                toggleTimeline();
                setIsOpen(false);
              }}
            >
              <i className={`fas ${timelineVisible ? 'fa-eye-slash' : 'fa-eye'}`}></i>
              {timelineVisible ? 'Ocultar' : 'Mostrar'} Timeline
            </button>
          </div>

          {/* Seção Categorias */}
          <div className="menu-section">
            <h3 className="menu-section-title">
              <i className="fas fa-layer-group"></i> Categorias
            </h3>
            <div className="categories-list">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className={`category-item ${categoryState[category.id] ? 'active' : 'inactive'}`}
                  onClick={() => toggleCategory(category.id)}
                >
                  <div
                    className="category-color"
                    style={{ background: category.color }}
                  ></div>
                  <span className="category-name">{category.name}</span>
                  <i
                    className={`fas ${categoryState[category.id] ? 'fa-eye' : 'fa-eye-slash'} category-icon`}
                  ></i>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;

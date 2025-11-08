# 🌌 Crypto Universe - Web3 Ecosystem

<div align="center">

![Crypto Universe](https://img.shields.io/badge/Crypto-Universe-blueviolet?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

**Uma visualização interativa e imersiva do ecossistema Web3**

[Demo](#) • [Documentação](#funcionalidades) • [Instalação](#instalação)

</div>

---

## 📖 Sobre o Projeto

**Crypto Universe** é uma aplicação web interativa que mapeia e visualiza todo o ecossistema de criptomoedas e Web3 de forma intuitiva e envolvente. Utilizando um grafo de rede dinâmico, o projeto permite explorar as conexões entre diferentes tecnologias, protocolos e conceitos do universo cripto.

### 🎯 Objetivo

Criar uma experiência educacional e visual que ajude desenvolvedores, investidores e entusiastas a compreender a complexa rede de tecnologias que compõem o ecossistema Web3.

---

## ✨ Funcionalidades

### 🗺️ Mapa Interativo
- **Grafo de Rede Dinâmico**: Visualização das conexões entre projetos
- **Física Simulada**: Nodes com comportamento físico realista
- **Zoom e Pan**: Navegação fluida pelo universo cripto
- **Tooltips Informativos**: Descrições detalhadas ao passar o mouse

### 🎨 Categorias Visuais
- **Bitcoin & Blockchain**: Fundamentos e infraestrutura
- **Ethereum & Smart Contracts**: Contratos inteligentes e dApps
- **DeFi**: Finanças descentralizadas
- **NFTs & Metaverso**: Arte digital e mundos virtuais
- **Layer 2 & Escalabilidade**: Soluções de segunda camada
- **Privacidade & Segurança**: Protocolos de privacidade
- **Infraestrutura & Ferramentas**: Desenvolvimento e APIs
- **DAOs & Governança**: Organizações autônomas
- **Stablecoins & Pagamentos**: Moedas estáveis
- **Interoperabilidade**: Pontes entre blockchains

### 📅 Linha do Tempo
- **Marcos Históricos**: De 2009 (Bitcoin) até 2025 (Mass Adoption)
- **Eventos Importantes**: ICO Boom, DeFi Summer, NFT Mania, Crypto Winter
- **Visualização Horizontal**: Timeline elegante e responsiva

### 🎛️ Controles Avançados
- **Toggle de Categorias**: Ative/desative categorias específicas
- **Ajuste de Visualização**: Centralize e ajuste o zoom automaticamente
- **Física ON/OFF**: Controle a simulação física dos nodes
- **Estabilização**: Reorganize o grafo para melhor visualização

### 📱 Design Responsivo
- **Menu Hamburger**: Interface unificada para mobile e desktop
- **Tooltips Centralizados**: Otimizado para dispositivos touch
- **Layout Adaptativo**: Experiência perfeita em qualquer tela
- **Animações Suaves**: Transições fluidas e modernas

---

## 🛠️ Tecnologias

### Core
- **[Next.js 14](https://nextjs.org/)** - Framework React com App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[React 18](https://react.dev/)** - Biblioteca UI

### Visualização
- **[Vis.js Network](https://visjs.org/)** - Grafo de rede interativo
- **Particles.js** - Efeitos de partículas no background

### Estilização
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **CSS Custom** - Animações e efeitos personalizados
- **Glassmorphism** - Design moderno com efeito de vidro

### Ícones
- **[Font Awesome 6](https://fontawesome.com/)** - Biblioteca de ícones

---

## 🚀 Instalação

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Passo a Passo

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/crypto-universe.git
cd crypto-universe-nextjs
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Execute o projeto**
```bash
npm run dev
# ou
yarn dev
```

4. **Acesse no navegador**
```
http://localhost:3000
```

---

## 📂 Estrutura do Projeto

```
crypto-universe-nextjs/
├── app/
│   ├── globals.css          # Estilos globais
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página inicial
├── components/
│   ├── Network/             # Componentes do grafo
│   ├── Particles/           # Efeitos de partículas
│   ├── Timeline/            # Linha do tempo
│   └── UI/                  # Componentes de interface
│       └── HamburgerMenu.tsx
├── data/
│   ├── categories.ts        # Definição de categorias
│   ├── nodes.ts             # Nodes do grafo
│   ├── edges.ts             # Conexões entre nodes
│   └── timeline.ts          # Eventos históricos
├── hooks/
│   ├── useNetwork.ts        # Hook do grafo
│   ├── useCategories.ts     # Hook de categorias
│   └── useTimeline.ts       # Hook da timeline
└── public/                  # Arquivos estáticos
```

---

## 🎨 Customização

### Adicionar Nova Categoria

```typescript
// data/categories.ts
{
  id: 'nova-categoria',
  name: 'Nova Categoria',
  color: '#FF6B6B',
  icon: '🚀'
}
```

### Adicionar Novo Node

```typescript
// data/nodes.ts
{
  id: 'novo-projeto',
  label: 'Novo Projeto',
  category: 'defi',
  description: 'Descrição do projeto',
  color: '#4CAF50'
}
```

### Adicionar Conexão

```typescript
// data/edges.ts
{
  from: 'bitcoin',
  to: 'novo-projeto',
  color: '#888'
}
```

---

## 🌟 Destaques

- ✅ **100% TypeScript** - Código totalmente tipado
- ✅ **Responsivo** - Mobile-first design
- ✅ **Performance** - Otimizado com Next.js 14
- ✅ **Acessível** - ARIA labels e navegação por teclado
- ✅ **Moderno** - Glassmorphism e animações suaves
- ✅ **Educacional** - Tooltips informativos e timeline histórica

---

## 📱 Screenshots

### Desktop
![Desktop View](https://via.placeholder.com/800x400/1a1a2e/ffffff?text=Desktop+View)

### Mobile
![Mobile View](https://via.placeholder.com/400x800/1a1a2e/ffffff?text=Mobile+View)

### Menu Lateral
![Side Menu](https://via.placeholder.com/400x600/1a1a2e/ffffff?text=Side+Menu)

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Siga os passos:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📝 Roadmap

- [ ] Adicionar mais projetos e categorias
- [ ] Implementar busca e filtros avançados
- [ ] Integrar dados em tempo real (preços, TVL)
- [ ] Criar versão 3D do grafo
- [ ] Adicionar sistema de favoritos
- [ ] Implementar compartilhamento social

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

Desenvolvido com 💜 por [Danielbuenodev01]

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/seu-usuario)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/seu-perfil)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/seu-usuario)

---

## 🙏 Agradecimentos

- [Vis.js](https://visjs.org/) - Biblioteca de visualização
- [Next.js](https://nextjs.org/) - Framework React
- [Vercel](https://vercel.com/) - Hospedagem
- Comunidade Web3 - Inspiração e conhecimento

---

<div align="center">

**⭐ Se este projeto foi útil, considere dar uma estrela!**

Made with ❤️ and ☕

</div>

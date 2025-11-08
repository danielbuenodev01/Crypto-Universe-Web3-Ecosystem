// Types para o projeto Crypto Universe

export interface NodeIcon {
  face: string;
  code: string;
  size: number;
  color: string;
}

export interface NodeFont {
  size: number;
  color: string;
  strokeWidth: number;
  strokeColor: string;
}

export interface NodeColor {
  background?: string;
  border?: string;
  highlight?: {
    background?: string;
    border?: string;
  };
  hover?: {
    background?: string;
    border?: string;
  };
}

export interface Node {
  id: number;
  label: string;
  description: string;
  color: string | NodeColor;
  icon?: NodeIcon;
  image?: string; // URL da imagem/logo
  size: number;
  font?: NodeFont;
  borderWidth?: number;
  shadow?: boolean;
  hidden?: boolean;
  shape?: string;
}

export interface EdgeColor {
  color: string;
  opacity: number;
}

export interface Edge {
  from: number;
  to: number;
  color?: EdgeColor;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Category {
  id: string;
  name: string;
  color: string;
  nodeIds: number[];
}

export type CategoryState = Record<string, boolean>;

export interface NetworkOptions {
  nodes: any;
  edges: any;
  interaction: any;
  physics: any;
}
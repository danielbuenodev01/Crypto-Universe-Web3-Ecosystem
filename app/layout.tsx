import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crypto Universe - Web3 Mind Map',
  description: 'O Universo Descentralizado - Mind Map Interativo do Ecossistema Web3',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
        <link href="https://unpkg.com/vis-network/dist/dist/vis-network.min.css" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
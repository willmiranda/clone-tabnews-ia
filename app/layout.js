import "./globals.css";

export const metadata = {
  title: "Lista de Nomes",
  description: "Aplicação Next.js com lista de nomes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

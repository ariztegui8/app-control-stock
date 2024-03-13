import Navbar from "@/components/Navbar";
import "./globals.css";


export const metadata = {
  title: "Stock Control",
  description: "Coltrol de stock con Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

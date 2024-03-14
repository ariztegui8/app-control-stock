import Navbar from "@/components/Navbar";
import "./globals.css";
import Providers from "@/store/provider";


export const metadata = {
  title: "Stock Control",
  description: "Coltrol de stock con Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body>
          <Navbar />
          {children}
        </body>
      </Providers>
    </html>
  );
}

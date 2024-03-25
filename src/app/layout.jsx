import Navbar from "@/components/Navbar";
import "./globals.css";
import { InvProvider } from "@/context/InvProvider";
import { EntProvider } from "@/context/EntProvider";
import { SalProvider } from "@/context/SalProvider";


export const metadata = {
  title: "Stock Control",
  description: "Coltrol de stock con Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <InvProvider>
        <EntProvider>
          <SalProvider>
            <body>
              <Navbar />
              {children}
            </body>
          </SalProvider>
        </EntProvider>
      </InvProvider>
    </html>
  );
}

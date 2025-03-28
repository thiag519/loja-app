import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider"
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Loja shadcn-ui",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>  
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          
            {children}
            <Toaster />
          
        </ThemeProvider> 
      </body>
    </html>
  );
}

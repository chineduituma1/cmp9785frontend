'use client'
import NavBar from '@/components/Navbar';
import Footer from '@/components/Footer'
import { ChakraProvider } from '@chakra-ui/react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <NavBar />
            {children}
            <Footer />
          </ChakraProvider>

        </body>
    </html>
  );
}

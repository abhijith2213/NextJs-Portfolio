import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "./provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
   title: "Abhijith's Portfolio",
   description:
      "Building innovative web and mobile solutions. Explore my portfolio of projects leveraging MERN stack, full-stack, and AI technologies.",
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang='en' suppressHydrationWarning>
         <head>
            <link rel='icon' href='/my-logo.png' sizes='any' />
         </head>
         <body className={inter.className}>
            <ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
               {children}
            </ThemeProvider>
         </body>
      </html>
   )
}

import { Footer } from '../../components/Footer/footer';
import Navbar from '../../components/Navbar/navbar';
import './globals.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Rishi Ratan Mishra',
  description: 'Founder of Zolaha.com - "Zolaha is a digital agency providing digital solutions for businesses like Website Development, Service Management"',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={'../../src/favicon.ico'} /> {/* Replace with the actual path to your favicon */}
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

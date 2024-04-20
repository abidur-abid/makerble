import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Header from "./shared components/Header";
import Footer from "./shared components/Footer";
import Toaster from '@/app/shared components/Toaster'
import AuthProvider from "@/authentication/AuthProvider";

const inter = Roboto({ subsets: ["latin"] , weight: ['100', '300', '400', '500', '700', '900']});

export const metadata = {
  title: "Makerble",
  description: "Take the stress out of monitoring, evaluation and reporting",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Header/>
          <main className="max-w-5xl mx-auto min-h-[270px]   px-10 lg:px-0">{children}</main>
          <Footer/>
        </AuthProvider>
        <Toaster toastOptions={{
        style: {
          background: '#cbd5e1',
          color: '#3C3C59'
        }
      }}/>

      </body>
    </html>
  );
}

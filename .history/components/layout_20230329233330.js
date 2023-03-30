import Navbar from "./nav";
import Footer from "./footer";
import { Montserrat } from "next/font/google";

const Montserrat = () => ({
  weight: [400, 500, 600, 700],
  subsets: ["latin"],
});

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

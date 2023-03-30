import Navbar from "./nav";
import Footer from "./footer";
import { Montserrat } from "next/font/google";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

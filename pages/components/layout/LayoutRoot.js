import Footer from "../footer/indes";
import NavBar from "../navBar";

export default function LayoutRoot({ children }) {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 mb-4">{children}</main>
      <Footer />
    </>
  );
}

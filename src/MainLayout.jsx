import {Navbar1} from "./components/navbar1";
import Footer from "./components/shadcn-studio/blocks/footer-component-01/footer-component-01";
export default function MainLayout({ children }) {
  return (
    <div>
      <Navbar1 />
      {/* Add padding so the fixed navbar doesn't cover content */}
      <main className="pt-20 pb-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}

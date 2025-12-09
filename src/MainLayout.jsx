import {Navbar1} from "./components/navbar1";

export default function MainLayout({ children }) {
  return (
    <div>
      <Navbar1 />
      {/* Add padding so the fixed navbar doesn't cover content */}
      <main className="pt-20">
        {children}
      </main>
    </div>
  );
}

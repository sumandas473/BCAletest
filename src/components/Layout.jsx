// components/Layout.jsx
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 mt-18 md:mt-32">{children}</main>
      <Footer />
    </div>
  );
}

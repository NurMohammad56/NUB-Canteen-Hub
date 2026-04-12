import Navbar from './Navbar';
import Footer from './Footer';

export default function AppShell({ children }) {
  return (
    <div className="app-shell flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pb-10">{children}</main>
      <Footer />
    </div>
  );
}

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ServicesGrid from '@/components/Services';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-charcoal">
      <Navbar />
      <Hero />
      <About />
      <ServicesGrid />
      <ContactForm />
      <Footer />
    </main>
  );
}

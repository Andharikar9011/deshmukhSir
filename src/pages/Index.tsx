import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import {Projects}  from '@/components/Projects';
import OwnerDrawer from '@/components/OwnerDrawer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <OwnerDrawer />
      <Portfolio />
      <Projects/>
      <Contact />
    </div>
  );
};

export default Index;

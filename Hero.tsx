import heroImage from '../../public/hero-architecture.jpg'
import logo from '../../public/logo.png';
const Hero = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <div 
        // className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        className="absolute inset-0 bg-cover bg-center animate-background-zoom infinite alternate "
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>

      <div className="relative h-full flex items-center justify-center">
        <div className="text-center px-6 animate-fade-in">
           <img src={logo} alt="Acumen Logo" className="mx-auto mb-8 w-128 h-128"/>
           
          {/* <h1 className="font-display text-2xl md:text-4xl font-bold text-white mb-6 tracking-tight">
            Accurate<br /> Architechure
          </h1> */}
          <p className="font-body text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Where accuracy becomes the foundation of creativity,<br /> Acumen redefines environments through architecture that is precise, purposeful, and enduring.
          </p>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-16 bg-white/50" />
      </div>
    </section>
  );
};

export default Hero;

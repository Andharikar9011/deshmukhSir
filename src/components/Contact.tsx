import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for your message. We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              Let's Connect
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Have a project in mind? We'd love to hear about it.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-scale-in">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="font-body bg-secondary border-border focus:border-accent transition-smooth"
              />
            </div>

            <div>
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="font-body bg-secondary border-border focus:border-accent transition-smooth"
              />
            </div>

            <div>
              <Textarea
                name="message"
                placeholder="Tell us about your project"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="font-body bg-secondary border-border focus:border-accent transition-smooth resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-foreground text-background hover:bg-accent hover:text-accent-foreground transition-smooth font-body text-sm uppercase tracking-wider"
            >
              Send Message
            </Button>
          </form>

          <div className="mt-16 pt-16 border-t border-border">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  Email
                </div>
                <a
                  href="mailto:hello@studio.com"
                  className="font-body text-foreground hover:text-accent transition-smooth"
                >
                  hello@studio.com
                </a>
              </div>
              <div>
                <div className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  Phone
                </div>
                <a
                  href="tel:+1234567890"
                  className="font-body text-foreground hover:text-accent transition-smooth"
                >
                  +1 (234) 567-890
                </a>
              </div>
              <div>
                <div className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  Location
                </div>
                <div className="font-body text-foreground">New York, NY</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-20 text-center">
        <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">
          © 2024 Studio. All rights reserved.
        </p>
      </footer>
    </section>
  );
};

export default Contact;

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { IconInput } from "./ui/icon-input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    mobileNumber: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message. We will get back to you soon.");
    setFormData({ name: "", email: "", message: "", mobileNumber: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
            <IconInput
              icon="user"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <IconInput
              icon="mail"
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <IconInput
              icon="phone"
              type="number"
              name="mobileNumber"
              placeholder="Mobile Number"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />

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
                  dhawal.designer@gmail.com
                </a>
              </div>
              <div>
                <div className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  Phone
                </div>
                <a
                  href="tel:+919960969992"
                  className="font-body text-foreground hover:text-accent transition-smooth"
                >
                  +91 99609 69992
                </a>
              </div>
              <div>
                <div className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  Location
                </div>
                <div
                  className="font-body text-foreground cursor-pointer hover:underline"
                  onClick={() => {
                    window.open(
                      "https://www.google.com/maps?q=18.541807,73.8381844&z=17&hl=en",
                      "_blank"
                    );
                  }}
                >
                  Ashok Nager, RangeHills Road, Pune
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-20 text-center">
        <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">
          © 2025 Created by Sparkwise Solutions.
        </p>
      </footer>
    </section>
  );
};

export default Contact;

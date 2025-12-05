import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

/**
 * Contact.tsx
 * - Posts form data to Google Apps Script webapp URL (URL-encoded)
 * - Prevents double submissions
 * - Shows success/error toasts
 *
 * Make sure your Apps Script deployment is set to "Anyone, even anonymous"
 * or calls will be blocked by auth/CORS.
 */

const GOOGLE_SCRIPT_URL ="https://script.google.com/macros/s/AKfycbxepJre5yP7Y-Qnk2Fu17aQ6JmWnKK5v28bWN8CStiAEHo2loQMIt0hKmOsO0_6G2ep/exec"



type FormData = {
  name: string;
  email: string;
  mobileNumber: string;
  message: string;
};

const initialFormData: FormData = {
  name: "",
  email: "",
  mobileNumber: "",
  message: "",
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (data: FormData) => {
    if (!data.name.trim()) {
      toast.error("Please enter your name.");
      return false;
    }
    if (!data.email.trim()) {
      toast.error("Please enter your email.");
      return false;
    }
    // basic email pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }
    if (!data.mobileNumber.trim()) {
      toast.error("Please enter your mobile number.");
      return false;
    }
    // optional: basic mobile length check
    if (data.mobileNumber.replace(/\D/g, "").length < 7) {
      toast.error("Please enter a valid mobile number.");
      return false;
    }
    if (!data.message.trim()) {
      toast.error("Please enter a message.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!validate(formData)) return;

    setIsSubmitting(true);
    console.log("Submitting contact form:", formData);
    try {
      const payload = new URLSearchParams();
      payload.append("name", formData.name);
      payload.append("email", formData.email);
      payload.append("mobileNumber", formData.mobileNumber);
      payload.append("message", formData.message);
      payload.append("submittedAt", new Date().toISOString());

      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: payload.toString(),
      });

      // Try parsing JSON, fallback to text
      let responseBody: any = null;
      try {
        responseBody = await res.json();
        console.log("Apps Script response (success):", responseBody);
      } catch {
        responseBody = await res.text();
        console.log("Apps Script response (text):", responseBody);
      }

      if (!res.ok) {
        console.error("Apps Script response (error):", res.status, responseBody);
        throw new Error(`Server responded with ${res.status}`);
      }

      toast.success("Thanks — your message was sent successfully.");
      setFormData(initialFormData);
    } catch (err) {
      console.error("Contact form submit error:", err);
      toast.error(
        "Failed to send message. Please try again later or contact via email."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-secondary">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-2xl font-serif font-semibold mb-6">Get in touch</h2>

        {/* <form method="post" action="https://sheetdb.io/api/v1/d6hn0i8b8vhme" className="space-y-4"> */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div className="group flex items-center gap-3 bg-secondary border border-border transition-smooth focus-within:border-accent rounded-md px-2 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-muted-foreground group-focus-within:text-accent pl-[10px] pb-[7px] w-9 h-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 1115 0v.75H4.5v-.75z"
              />
            </svg>

            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border-none shadow-none bg-transparent font-body focus:ring-0"
            />
          </div>

          {/* Email */}
          <div className="group flex items-center gap-3 bg-secondary border border-border transition-smooth focus-within:border-accent rounded-md px-2 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-muted-foreground group-focus-within:text-accent pl-[10px] pb-[7px] w-9 h-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21.75 7.5l-9.75 6-9.75-6m19.5 0v9.75a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V7.5m19.5 0L12 13.5 2.25 7.5"
              />
            </svg>

            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border-none shadow-none bg-transparent font-body focus:ring-0"
            />
          </div>

          {/* Mobile */}
          <div className="group flex items-center gap-3 bg-secondary border border-border transition-smooth focus-within:border-accent rounded-md px-2 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-muted-foreground group-focus-within:text-accent pl-[10px] pb-[7px] w-9 h-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M2.25 6.75l3.5-.875a2.25 2.25 0 012.625 1.53l.52 1.74a2.25 2.25 0 01-.514 2.19l-.97.97a16.5 16.5 0 007.08 7.08l.97-.97a2.25 2.25 0 012.19-.514l1.74.52a2.25 2.25 0 011.53 2.625l-.875 3.5a2.25 2.25 0 01-2.175 1.698 20.25 20.25 0 01-17.325-17.325A2.25 2.25 0 012.25 6.75z"
              />
            </svg>

            <Input
              type="tel"
              name="mobileNumber"
              placeholder="Mobile Number"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
              className="border-none shadow-none bg-transparent font-body focus:ring-0"
            />
          </div>

          {/* Message */}
          <div className="relative bg-secondary border border-border rounded-md transition-smooth focus-within:border-accent">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full resize-none bg-transparent border-none p-4 font-body text-sm focus:outline-none"
            />
          </div>

          {/* Submit */}
          <div>
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-foreground text-background hover:bg-accent hover:text-accent-foreground transition-smooth font-body text-sm uppercase tracking-wider"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
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

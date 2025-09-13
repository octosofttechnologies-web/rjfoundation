import Link from "next/link";
import { ArrowRight, Facebook, Instagram, Linkedin, MapPin, Twitter } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";

const quickLinks = [
    { label: "Who We Are", href: "/foundation/about-us" },
    { label: "Our Team", href: "/foundation/our-team" },
    { label: "Our Specialties", href: "/our-specialties" },
    { label: "R-Jolad Plus", href: "/plus" },
    { label: "Newsroom", href: "/blog" },
    { label: "Whistle-blowing", href: "/whistle-blowing-portal" },
]

const locations = [
    "Gbagada",
    "Gbagada (Plus)",
    "Isolo",
    "Agege",
    "Bariga",
    "Agege (Pencinema)",
    "Ikeja (Jara Mall)",
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-center md:text-left">
          
          {/* Quick Links */}
          <div>
            <h4 className="font-headline font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-primary-foreground/80 hover:text-primary-foreground hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter Subscription */}
          <div>
            <h4 className="font-headline font-semibold uppercase tracking-wider mb-4">Newsletter Subscription</h4>
            <p className="text-sm text-primary-foreground/80 mb-4">Join our weekly newsletter list. Just enter your email address below.</p>
            <form className="flex items-center justify-center md:justify-start">
              <Input 
                type="email" 
                placeholder="your email address" 
                className="bg-primary/50 border-primary-foreground/50 rounded-r-none placeholder:text-primary-foreground/60"
              />
              <Button type="submit" size="icon" className="bg-accent hover:bg-accent/90 rounded-l-none">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div>
          
          {/* Opening Hours */}
          <div>
            <h4 className="font-headline font-semibold uppercase tracking-wider mb-4">Opening Hours</h4>
            <div className="text-sm text-primary-foreground/80 space-y-2">
              <div className="flex justify-between">
                <span>Monday – Sunday</span>
                <span>24 Hours</span>
              </div>
              <div className="flex justify-between">
                <span>Emergency Services</span>
                <span>24 Hours</span>
              </div>
            </div>
          </div>
          
          {/* Contact Us */}
          <div>
            <h4 className="font-headline font-semibold uppercase tracking-wider mb-4">Contact Us</h4>
            <div className="text-sm text-primary-foreground/80 space-y-2">
              <p>No 5, Safuratu Sekoni Street, Gbagada New garage, Lagos State</p>
              <p>Tel: +234-7000756523</p>
              <p>Email: wecare@rjolad.com</p>
            </div>
            <div className="flex space-x-3 mt-4 justify-center md:justify-start">
              <Link href="https://www.instagram.com/rjoladhospital" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary hover:bg-white/80">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href="https://www.facebook.com/Rjoladhospitals" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary hover:bg-white/80">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href="https://twitter.com/rjoladhospital" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary hover:bg-white/80">
                <Twitter className="h-4 w-4" />
              </Link>
              <Link href="https://ng.linkedin.com/company/r-jolad-hospital-nigeria-limited" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary hover:bg-white/80">
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Our Locations */}
          <div>
            <h4 className="font-headline font-semibold uppercase tracking-wider mb-4">Our Locations</h4>
            <ul className="space-y-2">
                {locations.map(location => (
                    <li key={location} className="flex items-center gap-2 justify-center md:justify-start">
                        <MapPin className="h-4 w-4" />
                        <span>{location}</span>
                    </li>
                ))}
            </ul>
          </div>

        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-semibold hover:text-white text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} R-Jolad Foundation | AfyA Care Nigeria Limited. | <Link href="/privacy-policy">Privacy Policy</Link><br />
          <div className="flex justify-center mt-2">
    <Image
      src="/images/ndpr.jpg"
      alt="NDPR Image"
      width={200}
      height={200}
      className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto"
    />
  </div>
        </div>
      </div>
    </footer>
  );
}

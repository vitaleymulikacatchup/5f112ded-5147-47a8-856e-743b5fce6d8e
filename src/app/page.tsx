"use client"

import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Heart, HelpCircle, Home, Mail, Search, Shield, Star, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Properties", id: "properties" },
            { name: "How it Works", id: "about" },
            { name: "Reviews", id: "reviews" },
            { name: "Support", id: "faq" }
          ]}
          brandName="StayNest"
          button={{
            text: "List Your Property",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Find Your Perfect Rental Home"
          description="Discover unique properties and unforgettable stays. From cozy apartments to luxury villas, find accommodations that feel like home."
          tag="Book Now"
          tagIcon={Home}
          buttons={[
            { text: "Explore Properties", href: "properties" },
            { text: "List Your Property", href: "contact" }
          ]}
          imageSrc="https://images.pexels.com/photos/210604/pexels-photo-210604.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Spacious, elegantly furnished hotel room featuring a balcony with a sea view and modern amenities."
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="How StayNest Works"
          description="Simple steps to find and book your perfect rental property"
          tag="Easy Process"
          tagIcon={Zap}
          bulletPoints={[
            {
              title: "Search & Discover",
              description: "Browse thousands of unique properties with detailed photos and reviews",
              icon: Search
            },
            {
              title: "Secure Booking",
              description: "Book instantly with secure payment and instant confirmation",
              icon: Shield
            },
            {
              title: "Enjoy Your Stay",
              description: "Check-in seamlessly and enjoy 24/7 customer support during your stay",
              icon: Heart
            }
          ]}
          imageSrc="https://images.pexels.com/photos/6489127/pexels-photo-6489127.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Sleek and modern kitchen with contemporary appliances and wooden cabinetry."
          imagePosition="left"
        />
      </div>

      <div id="properties" data-section="properties">
        <ProductCardThree
          title="Featured Properties"
          description="Discover our most popular rental properties with great ratings and amenities"
          tag="Top Picks"
          tagIcon={Star}
          products={[
            {
              id: "1",
              name: "Downtown Modern Loft",
              price: "$120/night",
              imageSrc: "https://images.pexels.com/photos/179845/pexels-photo-179845.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Beautiful sunrise over a snow-covered bothy in the Cairngorms, Scotland."
            },
            {
              id: "2",
              name: "Mountain Cabin Retreat",
              price: "$85/night",
              imageSrc: "https://images.pexels.com/photos/6775271/pexels-photo-6775271.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Experience tranquility with a stunning ocean view from a cozy room, blending nature with comfort."
            },
            {
              id: "3",
              name: "Beachfront Villa",
              price: "$200/night",
              imageSrc: "https://images.pexels.com/photos/8572163/pexels-photo-8572163.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Man in a modern apartment with a panoramic view of an urban skyline and skyscraper."
            },
            {
              id: "4",
              name: "City Center Apartment",
              price: "$95/night",
              imageSrc: "https://images.pexels.com/photos/4784042/pexels-photo-4784042.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "A mother and daughter pack a suitcase for a summer vacation, creating joyful memories."
            }
          ]}
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Real reviews from travelers who found their perfect stay with StayNest"
          tag="5-Star Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Family Traveler",
              company: "Chicago, IL",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Confident businesswoman using her tablet and phone, smiling outdoors in sunlight."
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Business Traveler",
              company: "Seattle, WA",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Colleagues celebrate success with a fist bump over financial charts depicting teamwork and unity."
            },
            {
              id: "3",
              name: "Emily & David Rodriguez",
              role: "Couple",
              company: "Austin, TX",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4606770/pexels-photo-4606770.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "A couple silhouetted against a starry sky on a rooftop in Minneapolis at sunset."
            },
            {
              id: "4",
              name: "The Thompson Family",
              role: "Family of 4",
              company: "Portland, OR",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/1028381/pexels-photo-1028381.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "A woman sits on a sandy beach with arms raised, enjoying a tropical day by the sea with boats and swimmers."
            },
            {
              id: "5",
              name: "Jessica Williams",
              role: "Solo Traveler",
              company: "Miami, FL",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8558897/pexels-photo-8558897.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of a smiling senior woman wearing glasses against a bright indoor background."
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about booking and staying with StayNest"
          tag="Help Center"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "How do I book a property?",
              content: "Simply browse our properties, select your dates, and click 'Book Now'. You'll receive instant confirmation and check-in details via email."
            },
            {
              id: "2",
              title: "What is your cancellation policy?",
              content: "Most properties offer free cancellation up to 24 hours before check-in. Specific cancellation policies are shown during booking."
            },
            {
              id: "3",
              title: "Are properties cleaned between stays?",
              content: "Yes, all properties undergo thorough professional cleaning between guests following strict hygiene standards."
            },
            {
              id: "4",
              title: "How do I check in to my rental?",
              content: "Check-in instructions are sent 24 hours before arrival. Most properties offer keyless entry or lockbox access for your convenience."
            },
            {
              id: "5",
              title: "What if I have issues during my stay?",
              content: "Our 24/7 customer support team is available via phone, chat, or email to assist with any questions or concerns."
            },
            {
              id: "6",
              title: "Can I list my property on StayNest?",
              content: "Yes! Property owners can list their homes through our host program. Contact us to learn about earning potential and listing requirements."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          tagIcon={Mail}
          title="Ready to List Your Property?"
          description="Join thousands of property owners earning extra income with StayNest. Start your hosting journey today."
          inputPlaceholder="Enter your email address"
          buttonText="Get Started"
          termsText="By clicking Get Started you agree to receive information about our host program and terms of service."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="StayNest"
          columns={[
            {
              items: [
                { label: "Search Properties", href: "properties" },
                { label: "How it Works", href: "about" },
                { label: "List Your Property", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Customer Reviews", href: "reviews" },
                { label: "Help Center", href: "faq" },
                { label: "Contact Support", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Terms of Service", href: "https://staynest.com/terms" },
                { label: "Privacy Policy", href: "https://staynest.com/privacy" },
                { label: "Cancellation Policy", href: "https://staynest.com/cancellation" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
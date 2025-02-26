import React from 'react'
import LinkSection from './LinkSection';
import ContactSection from './ContactSection';
import SocialSection from './SocialSection';

const Footer = () => {
  const companyLinks = [
    { text: "About Us", href: "#" },
    { text: "Contact us", href: "#" },
    { text: "Careers", href: "#" },
  ];

  const supportLinks = [
    { text: "Help Center", href: "#" },
    { text: "FAQs", href: "#" },
    { text: "Shipping Info", href: "#" },
    { text: "Returns", href: "#" },
  ];

  const legalLinks = [
    { text: "Terms & Conditions", href: "#" },
    { text: "Privacy Policy", href: "#" },
    { text: "Cookie Policy", href: "#" },
    { text: "Accessibility", href: "#" },
  ];

  return (
    <footer className="bg-emerald-950  h-[30%] ">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <ContactSection/>
            <div className="mt-8">
              <SocialSection />
            </div>
          </div>
          <div>
            <LinkSection title="Company" links={companyLinks} />
          </div>
          <div>
            <LinkSection title="Support" links={supportLinks} />
          </div>
          <div>
            <LinkSection title="Legal" links={legalLinks} />
          </div>
        </div>

        <div className="mt-8 border-t border-gray-900 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} Green Corner. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer
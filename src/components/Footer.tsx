import { Heart, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const footerLinks = {
  "Our Services": [
    "Browse Profiles",
    "Premium Membership",
    "Success Stories",
    "Wedding Planning"
  ],
  "Help & Support": [
    "Contact Us",
    "FAQ",
    "Privacy Policy",
    "Terms of Service"
  ],
  "Community": [
    "Marwadi Culture",
    "Wedding Traditions",
    "Family Values",
    "Success Tips"
  ]
};

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border items-center">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Khandelwal Parinay
              </span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              India's most trusted matrimonial platform for the Marwadi community. Connecting hearts, building families.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="h-6 w-6 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-card-foreground mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Khandelwal Parinay. All rights reserved. | Proudly serving the Marwadi community worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};
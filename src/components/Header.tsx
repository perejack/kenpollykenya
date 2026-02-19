import { useState } from "react";
import { Search, ShoppingCart, User, Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const navigationItems = [
    { label: "HOME", to: "/" },
    { label: "ABOUT US", to: "/about" },
    { label: "SHOP ONLINE", to: "/shop" },
    { label: "BUSINESS ENQUIRIES", to: "/business" },
    { label: "NEW ARRIVALS", to: "/new-arrivals" },
    { label: "KENPOLY@48", to: "/kenpoly-48" },
  ];

  return (
    <header className="bg-background border-b sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-muted/50 py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm text-muted-foreground">
          <div className="flex gap-4">
            <Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link>
          </div>
          <div className="flex gap-4 items-center">
            <Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
            <a
              href="https://wa.me/254785156830"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-secondary hover:opacity-80"
              aria-label="Order via WhatsApp"
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium">+254 785 156 830</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <img
                src="https://www.kenpoly.com/wp-content/uploads/2025/05/new-logo.svg"
                alt="Kenpoly logo"
                className="h-10 w-auto"
              />
            </Link>
            <div className="hidden md:block">
              <div className="text-secondary text-sm font-medium">
                Better Plastics, Better Living
              </div>
            </div>
          </div>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <form
              className="relative w-full"
              onSubmit={(e) => {
                e.preventDefault();
                const q = search.trim();
                navigate(q ? `/products?q=${encodeURIComponent(q)}` : "/products");
              }}
            >
              <Input
                type="text"
                placeholder="Search for products"
                className="pl-4 pr-12 h-12 rounded-xl border-muted"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button
                type="submit"
                size="sm"
                className="absolute right-1 top-1 h-10 w-10 rounded-lg bg-primary hover:bg-primary-dark"
              >
                <Search className="h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-4 mr-4">
              <div className="flex items-center gap-2 text-sm">
                <User className="h-4 w-4" />
                <span>LOGIN / CREATE AN ACCOUNT</span>
              </div>
            </div>
            
            <Button variant="secondary" className="bg-secondary hover:bg-secondary-light rounded-xl px-6">
              <ShoppingCart className="h-4 w-4 mr-2" />
              <span className="hidden md:inline">KSH50.00</span>
              <span className="md:hidden">0</span>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="outline"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center justify-between mt-4">
          <div className="flex gap-8">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
            Free Delivery Countrywide
          </div>
        </nav>

        {/* Mobile search */}
        <div className="md:hidden mt-4">
          <form
            className="relative w-full"
            onSubmit={(e) => {
              e.preventDefault();
              const q = search.trim();
              navigate(q ? `/products?q=${encodeURIComponent(q)}` : "/products");
              setIsMobileMenuOpen(false);
            }}
          >
            <Input
              type="text"
              placeholder="Search for products"
              className="pl-4 pr-12 h-12 rounded-xl"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button
              type="submit"
              size="sm"
              className="absolute right-1 top-1 h-10 w-10 rounded-lg bg-primary hover:bg-primary-dark"
            >
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </div>

        {/* Mobile navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-4">
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium hover:text-primary transition-colors py-2"
                >
                  {item.label}
                </Link>
              ))}
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium text-center mt-4">
                Free Delivery Countrywide
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
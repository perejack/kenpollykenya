import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-200 via-blue-100 to-yellow-100 min-h-[400px] flex items-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-8 h-8 bg-yellow-400 rounded-full opacity-60"></div>
        <div className="absolute top-20 right-20 w-6 h-6 bg-orange-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-20 left-20 w-4 h-4 bg-yellow-500 rounded-full opacity-60"></div>
        <div className="absolute bottom-10 right-10 w-10 h-10 bg-orange-300 rounded-full opacity-60"></div>
        <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-yellow-600 rounded-full opacity-40"></div>
        <div className="absolute top-1/3 right-1/3 w-5 h-5 bg-orange-500 rounded-full opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Navigation arrows */}
          <Button
            variant="outline"
            size="sm"
            className="rounded-full bg-white/80 hover:bg-white shadow-md"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {/* Main content */}
          <div className="text-center flex-1 px-8">
            {/* Logo with anniversary badge */}
            <div className="flex items-center justify-center mb-8">
              <div className="bg-gradient-hero text-primary-foreground p-4 rounded-xl transform rotate-45 mr-4">
                <div className="transform -rotate-45 font-bold text-2xl">
                  KENPOLY
                </div>
              </div>
              <div className="bg-white rounded-full px-6 py-3 shadow-lg">
                <div className="text-primary font-bold text-lg">48</div>
                <div className="text-xs text-muted-foreground">Year Birthday</div>
                <div className="text-xs text-secondary font-medium">With you for life</div>
              </div>
            </div>

            {/* Sale text */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold">
                <span className="text-orange-500">SALE</span>
                <span className="text-purple-600 ml-4">20</span>
                <span className="text-purple-600 text-4xl md:text-6xl align-top">%</span>
                <span className="text-purple-600 block text-2xl md:text-3xl font-medium">OFF</span>
              </h1>
              <p className="text-primary text-xl md:text-2xl font-semibold">
                On 50 Selected Products
              </p>
            </div>
          </div>

          {/* Navigation arrows */}
          <Button
            variant="outline"
            size="sm"
            className="rounded-full bg-white/80 hover:bg-white shadow-md"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
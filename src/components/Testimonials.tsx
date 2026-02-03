import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Peter muturi Mungai",
      timeAgo: "a year ago",
      rating: 5,
      review: "Kenpoly is a good place for shopping",
      avatar: "👨"
    },
    {
      name: "Adan Ali", 
      timeAgo: "a year ago",
      rating: 5,
      review: "Great quality products and excellent service",
      avatar: "👨‍🦱"
    },
    {
      name: "joshua mwangi",
      timeAgo: "a year ago", 
      rating: 3,
      review: "Good products, reasonable prices",
      avatar: "👨‍💼"
    },
    {
      name: "Zaitun Mohammed",
      timeAgo: "a year ago",
      rating: 5, 
      review: "Excellent quality and fast delivery",
      avatar: "👩"
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Customers Say
            </h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <span className="text-2xl font-bold text-primary">4.5</span>
                <div className="flex">
                  {renderStars(4.5)}
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                powered by <span className="font-semibold">Google</span>
              </div>
            </div>
          </div>
          
          <Button className="bg-secondary hover:bg-secondary-light rounded-xl">
            Write Review →
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              {/* Google logo */}
              <div className="flex justify-end mb-4">
                <div className="text-xl">🔍</div>
              </div>

              {/* Customer info */}
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.timeAgo}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Review */}
              <p className="text-sm text-muted-foreground">
                {testimonial.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
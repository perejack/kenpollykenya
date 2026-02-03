import { Link } from "react-router-dom";

const ProductCategories = () => {
  const categories = [
    {
      name: "FURNITURE",
      image: "/images/categories/furniture.jpg.webp",
      bgColor: "bg-blue-50"
    },
    {
      name: "HOUSEHOLD", 
      image: "/images/categories/household.jpg.webp",
      bgColor: "bg-blue-50"
    },
    {
      name: "INDUSTRIAL",
      image: "/images/categories/industrial.jpg.webp",
      bgColor: "bg-red-50"
    },
    {
      name: "GARDENING",
      image: "/images/categories/gardening.jpg.webp",
      bgColor: "bg-green-50"
    },
    {
      name: "BABY & KIDS",
      image: "/images/categories/baby-kids.jpg.webp",
      bgColor: "bg-pink-50"
    },
    {
      name: "BOTTLES & LUNCH BOXES",
      image: "/images/categories/bottles-lunch-boxes.png.webp",
      bgColor: "bg-orange-50"
    },
    {
      name: "POULTRIES",
      image: "/images/categories/poultries.jpg.webp",
      bgColor: "bg-red-50"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Shop by Category
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {categories.map((category, index) => {
            const slug = category.name.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-");
            return (
              <Link
                key={index}
                to={`/category/${slug}`}
                className={`${category.bgColor} rounded-2xl p-4 text-center hover:shadow-card-hover transition-all duration-300 hover:scale-105 cursor-pointer group`}
              >
                <div className="mb-3 rounded-xl overflow-hidden bg-white aspect-square flex items-center justify-center">
                  <img src={category.image} alt={category.name} className="w-full h-full object-contain p-2" />
                </div>
                <h3 className="font-semibold text-sm text-gray-800 leading-tight">
                  {category.name}
                </h3>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
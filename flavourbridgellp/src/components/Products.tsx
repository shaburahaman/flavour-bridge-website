import { MessageCircle, Star, MapPin } from 'lucide-react';

const Products = () => {
  const handleWhatsAppOrder = (productName: string) => {
    const message = `Hi, I am interested in buying your ${productName}. Please provide more details about pricing and availability.`;
    const whatsappUrl = `https://wa.me/919177718097?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const spices = [
    {
      id: 1,
      name: "Cumin Seeds",
      image: "https://www.greendna.in/cdn/shop/products/cumin1_1024x1024@2x.jpg?v=1561041488",
      rating: 4.9,
      description: "Premium quality cumin seeds with rich aroma and distinctive flavor. Perfect for tempering and spice blends.",
      origin: "Unjha, Gujarat",
      features: ["Rich Aroma", "Uniform Size", "High Oil Content", "Export Quality"]
    },
    {
      id: 2,
      name: "Fenugreek Seeds",
      image: "https://i.ebayimg.com/images/g/s~YAAOSwluZl5ChU/s-l1600.jpg",
      rating: 4.8,
      description: "High-quality fenugreek seeds with bitter-sweet flavor and medicinal properties.",
      origin: "Unjha, Gujarat",
      features: ["Medicinal Properties", "Bitter-Sweet Flavor", "Premium Grade", "Export Quality"]
    },
    {
      id: 3,
      name: "Coriander Seeds",
      image: "https://vibrantliving.in/cdn/shop/files/CorianderSeeds.png?v=1731059976&width=1200",
      rating: 4.9,
      description: "Fresh coriander seeds with citrusy notes and aromatic fragrance. Essential for Indian cooking.",
      origin: "Unjha, Gujarat",
      features: ["Fresh Ground", "Citrusy Aroma", "Fine Texture", "Premium Quality"]
    },
    {
      id: 4,
      name: "Mustard Seeds",
      image: "https://chefsmandala.com/wp-content/uploads/2018/04/Brown-Mustard-Seeds.jpg",
      rating: 4.8,
      description: "Premium mustard seeds with pungent flavor, perfect for tempering and oil extraction.",
      origin: "Unjha, Gujarat",
      features: ["Pungent Flavor", "High Oil Content", "Premium Grade", "Export Quality"]
    },
    {
      id: 5,
      name: "Black Pepper",
      image: "https://www.thewisesage.in/cdn/shop/articles/ConvertOut-Resized-black-pepper-cup-with-wood-grain-background-industry-concept_1024x1024.jpg?v=1709279546",
      rating: 5.0,
      description: "Premium black pepper with strong pungency and aroma. Known as the king of spices worldwide.",
      origin: "Kerala & Tamil Nadu",
      features: ["King of Spices", "Strong Pungency", "High Piperine", "Export Grade"]
    },
    {
      id: 6,
      name: "Cardamom",
      image: "https://preservawellness.com/cdn/shop/articles/Cardamom.jpg?v=1667972434",
      rating: 5.0,
      description: "Green cardamom pods - the queen of spices. Intense aroma and flavor, perfect for both sweet and savory dishes.",
      origin: "Kerala",
      features: ["Queen of Spices", "Intense Aroma", "Premium Grade", "Hand Picked"]
    },
    {
      id: 7,
      name: "Ajwain",
      image: "https://thumbs.dreamstime.com/b/ajwain-seeds-brown-color-raw-carom-wooden-spoon-163479398.jpg?w=768",
      rating: 4.8,
      description: "Premium ajwain seeds with strong thyme-like flavor and digestive properties.",
      origin: "Gujarat",
      features: ["Digestive Properties", "Strong Flavor", "Medicinal Uses", "Premium Quality"]
    },
    {
      id: 8,
      name: "Raw Turmeric",
      image: "https://m.media-amazon.com/images/I/61BSdktH+1L._SX679_.jpg",
      rating: 4.9,
      description: "Fresh raw turmeric with high curcumin content. Known for its medicinal properties and golden color.",
      origin: "Andhra Pradesh & Telangana",
      features: ["High Curcumin", "Fresh Quality", "Anti-inflammatory", "Golden Color"]
    },
    {
      id: 9,
      name: "Dry Red Chilli",
      image: "https://www.organicgyaan.com/cdn/shop/files/2_fe369935-66e4-4a9e-9906-a9b42fd61252.jpg?v=1721395793&width=480",
      rating: 4.9,
      description: "Premium quality dry red chilli with perfect heat and vibrant color. Sourced from the finest farms.",
      origin: "Guntur, Andhra Pradesh",
      features: ["High Capsaicin", "Rich Red Color", "Perfect Heat Level", "No Artificial Colors"]
    }
  ];

  const pulses = [
    {
      id: 10,
      name: "Urad Gota (Whole Black Gram)",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Black_gram.jpg/500px-Black_gram.jpg",
      rating: 4.8,
      description: "Premium whole black gram with rich protein content and authentic taste.",
      origin: "Andhra Pradesh",
      features: ["High Protein", "Rich Taste", "Premium Quality", "Export Grade"]
    },
    {
      id: 11,
      name: "Urad Dal",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/2/383781052/CS/IQ/CG/60065930/urad-gota-500x500.jpeg",
      rating: 4.9,
      description: "Split black gram dal, perfect for South Indian dishes and protein-rich meals.",
      origin: "Andhra Pradesh",
      features: ["Split Quality", "High Protein", "Authentic Taste", "Premium Grade"]
    },
    {
      id: 12,
      name: "Green Gram Whole (Moong)",
      image: "https://c.ndtvimg.com/2023-07/2k660c8g_green-moong_625x300_12_July_23.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350",
      rating: 4.8,
      description: "Whole green gram with excellent nutritional value and easy digestibility.",
      origin: "Andhra Pradesh",
      features: ["Easy Digestible", "High Nutrition", "Premium Quality", "Export Grade"]
    },
    {
      id: 13,
      name: "Bengal Gram (Chana Dal)",
      image: "https://c.ndtvimg.com/2022-12/4trqrfeg_chana-dal_625x300_12_December_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350",
      rating: 4.9,
      description: "Premium chana dal with rich protein content and authentic flavor.",
      origin: "Andhra Pradesh",
      features: ["High Protein", "Rich Flavor", "Premium Quality", "Export Grade"]
    },
    {
      id: 14,
      name: "Red Lentils (Masoor Dal)",
      image: "https://i0.wp.com/deshmasala.com/wp-content/uploads/2025/04/lentils-7772450-scaled.jpg?fit=1707%2C2560&ssl=1",
      rating: 4.8,
      description: "Premium red lentils with quick cooking time and excellent nutritional value.",
      origin: "Andhra Pradesh",
      features: ["Quick Cooking", "High Nutrition", "Premium Quality", "Export Grade"]
    },
    {
      id: 15,
      name: "Toor Dal",
      image: "https://www.jiomart.com/images/product/original/490155005/loose-toor-dal-1-kg-product-images-o490155005-p490155005-0-202503281711.jpg?im=Resize=(420,420)",
      rating: 4.9,
      description: "Premium toor dal, the most popular dal in Indian cuisine with rich taste.",
      origin: "Andhra Pradesh",
      features: ["Popular Choice", "Rich Taste", "Premium Quality", "Export Grade"]
    }
  ];

  const rice = [
    {
      id: 16,
      name: "Basmati Rice 1121",
      image: "https://5.imimg.com/data5/ANDROID/Default/2021/9/XH/XQ/GX/24697418/images-20-jpeg-500x500.jpeg",
      rating: 5.0,
      description: "Premium 1121 Basmati rice with extra-long grains and aromatic fragrance.",
      origin: "Punjab",
      features: ["Extra Long Grains", "Aromatic", "Premium Quality", "Export Grade"]
    },
    {
      id: 17,
      name: "Sona Masuri Rice",
      image: "https://www.indianveggiedelight.com/wp-content/uploads/2022/12/instant-pot-sona-masoori-rice-recipe.jpg",
      rating: 4.8,
      description: "Premium non-basmati rice with medium grains and excellent taste.",
      origin: "Andhra Pradesh & Telangana",
      features: ["Medium Grains", "Excellent Taste", "Premium Quality", "Export Grade"]
    },
    {
      id: 18,
      name: "Brown Rice",
      image: "https://assets.clevelandclinic.org/transform/LargeFeatureImage/f2bcdb0e-2e53-4f01-9b5d-cd2ca184c34b/brown-rice-180719868",
      rating: 4.7,
      description: "Nutritious brown rice with high fiber content and natural goodness.",
      origin: "Andhra Pradesh & Telangana",
      features: ["High Fiber", "Nutritious", "Natural Goodness", "Health Benefits"]
    },
    {
      id: 19,
      name: "Parboiled Rice",
      image: "https://motheromalvan.com/cdn/shop/files/Parboiled-Rice_1100x.jpg?v=1685715480",
      rating: 4.8,
      description: "Premium parboiled rice with enhanced nutritional value and longer shelf life.",
      origin: "Andhra Pradesh & Telangana",
      features: ["Enhanced Nutrition", "Longer Shelf Life", "Premium Quality", "Export Grade"]
    }
  ];

  const handicrafts = [
    {
      id: 20,
      name: "Indian Handicrafts",
      image: "https://indian.handicrafts.gov.in/files/scheme_file/g18.jpg",
      rating: 4.9,
      description: "Authentic Indian handicrafts showcasing traditional artistry and cultural heritage.",
      origin: "Various States of India",
      features: ["Traditional Art", "Cultural Heritage", "Handmade", "Export Quality"]
    },
    {
      id: 21,
      name: "Handmade Wooden Crafts",
      image: "https://m.media-amazon.com/images/I/818s5tZEdgL._SX679_.jpg",
      rating: 4.8,
      description: "Beautiful handmade wooden crafts representing Indian traditional woodwork.",
      origin: "Various States of India",
      features: ["Traditional Woodwork", "Handmade", "Beautiful Design", "Export Quality"]
    },
    {
      id: 22,
      name: "Handmade Pottery",
      image: "https://cdn.shopify.com/s/files/1/0041/9125/6691/files/QR_-_Indian_Pottery_1024x1024.png?v=1756095621",
      rating: 4.9,
      description: "Traditional Indian pottery made by skilled artisans with authentic techniques.",
      origin: "Various States of India",
      features: ["Traditional Pottery", "Skilled Artisans", "Authentic Techniques", "Export Quality"]
    }
  ];

  const ProductCard = ({ product }: { product: any }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group border">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
          Export Quality
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-3">{product.description}</p>
        
        <div className="flex items-center mb-3">
          <MapPin className="w-4 h-4 text-orange-600 mr-1" />
          <span className="text-sm text-orange-600 font-medium">{product.origin}</span>
        </div>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
          <ul className="text-xs text-gray-600 space-y-1">
            {product.features.slice(0, 2).map((feature: string, index: number) => (
              <li key={index} className="flex items-center">
                <span className="w-1 h-1 bg-orange-600 rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <button 
          onClick={() => handleWhatsAppOrder(product.name)}
          className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center font-medium"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Order on WhatsApp
        </button>
      </div>
    </div>
  );

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Export Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully curated selection of authentic Indian products, 
            sourced directly from farmers and processed with 30+ quality checks.
          </p>
        </div>

        {/* Spices Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">🌶️ Premium Spices</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spices.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Pulses Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">🌱 Premium Pulses & Dals</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pulses.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Rice Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">🌾 Premium Rice</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {rice.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Handicrafts Section */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">🎨 Traditional Handicrafts</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {handicrafts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

import { Product } from '@/types/product';

const dogImageBase = "https://images.unsplash.com/";
const catImageBase = "https://images.unsplash.com/";

export const PRODUCTS: Product[] = [
  // Dog Food
  {
    id: "df1",
    name: "Premium Puppy Kibble",
    description: "Nutritionally complete dry food specially formulated for growing puppies with added DHA for brain development.",
    price: 24.99,
    image: `${dogImageBase}photo-1582562124811-c09040d0a901`,
    category: "dog",
    type: "food",
    featured: true,
    rating: 4.8
  },
  {
    id: "df2",
    name: "Adult Dog Food - Chicken",
    description: "High-protein chicken formula with vegetables and essential nutrients for adult dogs.",
    price: 29.99,
    image: `${dogImageBase}photo-1535268647677-300dbf3d78d1`,
    category: "dog",
    type: "food",
    rating: 4.7
  },
  {
    id: "df3",
    name: "Senior Dog Food - Joint Support",
    description: "Easy to digest formula with added glucosamine and chondroitin for aging dogs.",
    price: 34.99,
    image: `${dogImageBase}photo-1466721591366-2d5fba72006d`,
    category: "dog",
    type: "food",
    rating: 4.9
  },
  {
    id: "df4",
    name: "Grain-Free Wet Dog Food",
    description: "Grain-free wet food with real beef chunks in a rich gravy.",
    price: 2.99,
    image: `${dogImageBase}photo-1452378174528-3090a4bba7b2`,
    category: "dog",
    type: "food",
    rating: 4.5
  },
  
  // Dog Toys
  {
    id: "dt1",
    name: "Durable Rope Tug Toy",
    description: "Extra durable rope toy, perfect for tug-of-war games and helping to clean teeth.",
    price: 12.99,
    image: `${dogImageBase}photo-1582562124811-c09040d0a901`,
    category: "dog",
    type: "toy",
    featured: true,
    rating: 4.6
  },
  {
    id: "dt2",
    name: "Interactive Treat Puzzle",
    description: "Stimulate your dog's mind with this interactive puzzle toy that dispenses treats.",
    price: 19.99,
    image: `${dogImageBase}photo-1535268647677-300dbf3d78d1`,
    category: "dog",
    type: "toy",
    rating: 4.8
  },
  {
    id: "dt3",
    name: "Plush Squeaky Toy Set",
    description: "Set of 3 plush toys with built-in squeakers that dogs love.",
    price: 14.99,
    image: `${dogImageBase}photo-1466721591366-2d5fba72006d`,
    category: "dog",
    type: "toy",
    rating: 4.4
  },
  {
    id: "dt4",
    name: "Bouncy Tennis Ball Pack",
    description: "Pack of 4 high-quality tennis balls that are perfect for fetch.",
    price: 8.99,
    image: `${dogImageBase}photo-1452378174528-3090a4bba7b2`,
    category: "dog",
    type: "toy",
    featured: true,
    rating: 4.7
  },
  
  // Cat Food
  {
    id: "cf1",
    name: "Indoor Cat Formula",
    description: "Complete nutrition designed for less active indoor cats, with hairball control.",
    price: 22.99,
    image: `${catImageBase}photo-1582562124811-c09040d0a901`,
    category: "cat",
    type: "food",
    featured: true,
    rating: 4.7
  },
  {
    id: "cf2",
    name: "Kitten Growth Formula",
    description: "Extra protein and nutrients to support healthy growth in kittens under 1 year.",
    price: 26.99,
    image: `${catImageBase}photo-1535268647677-300dbf3d78d1`,
    category: "cat",
    type: "food",
    rating: 4.9
  },
  {
    id: "cf3",
    name: "Wild-Caught Salmon Pate",
    description: "Premium wet food made with wild-caught salmon in a smooth pate texture.",
    price: 1.99,
    image: `${catImageBase}photo-1466721591366-2d5fba72006d`,
    category: "cat",
    type: "food",
    rating: 4.6
  },
  {
    id: "cf4",
    name: "Senior Cat Food - Easy Digest",
    description: "Easy to digest formula with added taurine for senior cats.",
    price: 28.99,
    image: `${catImageBase}photo-1452378174528-3090a4bba7b2`,
    category: "cat",
    type: "food",
    featured: true,
    rating: 4.8
  },
  
  // Cat Toys
  {
    id: "ct1",
    name: "Interactive Laser Pointer",
    description: "Automatic laser pointer toy that moves unpredictably to entertain your cat.",
    price: 18.99,
    image: `${catImageBase}photo-1582562124811-c09040d0a901`,
    category: "cat",
    type: "toy",
    featured: true,
    rating: 4.9
  },
  {
    id: "ct2",
    name: "Catnip Mouse Set",
    description: "Set of 5 plush mice filled with premium catnip that cats can't resist.",
    price: 9.99,
    image: `${catImageBase}photo-1535268647677-300dbf3d78d1`,
    category: "cat",
    type: "toy",
    rating: 4.7
  },
  {
    id: "ct3",
    name: "Feather Wand Teaser",
    description: "Extendable wand with replaceable feather attachments for interactive play.",
    price: 12.99,
    image: `${catImageBase}photo-1466721591366-2d5fba72006d`,
    category: "cat",
    type: "toy",
    featured: true,
    rating: 4.5
  },
  {
    id: "ct4",
    name: "Cat Tower Playground",
    description: "Multi-level cat tower with scratching posts, hiding spots and dangling toys.",
    price: 49.99,
    image: `${catImageBase}photo-1452378174528-3090a4bba7b2`,
    category: "cat",
    type: "toy",
    rating: 4.8
  }
];

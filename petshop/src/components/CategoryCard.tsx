
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  title: string;
  image: string;
  link: string;
}

const CategoryCard = ({ title, image, link }: CategoryCardProps) => {
  return (
    <Link to={link} className="block group">
      <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <h3 className="text-white font-semibold text-xl p-4 w-full text-center">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;

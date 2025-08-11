import Link from 'next/link';
import { FC } from 'react';

interface ArchangelCardProps {
  id: string;
  name: string;
  description: string;
}

const ArchangelCard: FC<ArchangelCardProps> = ({ id, name, description }) => {
  return (
    <Link href={`/archangels/${id}`} className="block bg-yellow-200 p-4 rounded-lg shadow hover:bg-yellow-300 transition">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-800">{description}</p>
    </Link>
  );
};

export default ArchangelCard;

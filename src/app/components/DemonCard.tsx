import Link from 'next/link';
import { FC } from 'react';

interface DemonCardProps {
  id: string;
  name: string;
  description: string;
}

const DemonCard: FC<DemonCardProps> = ({ id, name, description }) => {
  return (
    <Link href={`/demons/${id}`}
      className="block bg-red-800 p-4 rounded-lg shadow hover:bg-red-900 transition"
    >
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-200">{description}</p>
    </Link>
  );
};

export default DemonCard;

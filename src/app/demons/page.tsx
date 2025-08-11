import DemonCard from '../components/DemonCard';
import { demons } from '../../data/demons';

export default function DemonsPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-red-500 mb-6">Demonai</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {demons.map((demon) => (
          <DemonCard key={demon.id} {...demon} />
        ))}
      </div>
    </div>
  );
}


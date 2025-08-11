import ArchangelCard from '../components/ArchangelCard';
import { archangels } from '../../data/archangels';

export default function ArchangelsPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-yellow-600 mb-6">Archangelai</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {archangels.map((archangel) => (
          <ArchangelCard key={archangel.id} {...archangel} />
        ))}
      </div>
    </div>
  );
}

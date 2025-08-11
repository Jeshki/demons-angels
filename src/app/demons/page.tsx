import { demons } from '../../data/demons';
import DemonCard from '../../components/DemonCard';

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
export const demons = [
  {
    id: 'lucifer',
    name: 'Lucifer',
    description: 'Kritęs angelas, vadinamas Ryto Žvaigžde.',
    powers: ['Vilionė', 'Šviesos manipuliacija'],
    domain: 'Maištas'
  },
  {
    id: 'belial',
    name: 'Belial',
    description: 'Apgaulės ir chaoso valdovas.',
    powers: ['Apgaulė', 'Manipuliacija'],
    domain: 'Chaosas'
  },
  {
    id: 'asmodeus',
    name: 'Asmodeus',
    description: 'Destrukcijos ir geismo demonas.',
    powers: ['Kerštas', 'Geismo skatinimas'],
    domain: 'Destrukcija'
  }
];

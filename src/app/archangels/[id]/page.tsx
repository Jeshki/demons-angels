import { notFound } from 'next/navigation';
import { archangels } from '../../../data/archangels';

export default async function ArchangelPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const archangel = archangels.find((a) => a.id === id);
  if (!archangel) {
    notFound();
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-yellow-600 mb-4">{archangel.name}</h2>
      <p className="mb-4">{archangel.description}</p>
      <ul className="list-disc pl-5">
        {archangel.powers.map((power) => (
          <li key={power}>{power}</li>
        ))}
      </ul>
      <p className="mt-4">Domain: {archangel.domain}</p>
    </div>
  );
}

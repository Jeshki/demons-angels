import { notFound } from 'next/navigation';
import { demons } from '../../../data/demons';

export default function DemonPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const demon = demons.find((d) => d.id === id);
  if (!demon) {
    notFound();
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-red-500 mb-4">{demon.name}</h2>
      <p className="mb-4">{demon.description}</p>
      <ul className="list-disc pl-5">
        {demon.powers.map((power) => (
          <li key={power}>{power}</li>
        ))}
      </ul>
      <p className="mt-4">Domain: {demon.domain}</p>
    </div>
  );
}
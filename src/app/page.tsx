import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-6">Pasirinkite savo kelią</h2>
      <div className="flex justify-center gap-6">
        <Link href="/demons" className="bg-red-600 px-6 py-3 rounded-lg text-white hover:bg-red-800 transition">
          Demonai
        </Link>
        <Link href="/archangels" className="bg-yellow-500 px-6 py-3 rounded-lg text-black hover:bg-yellow-600 transition">
          Archangelai
        </Link>
      </div>
    </div>
  );
}
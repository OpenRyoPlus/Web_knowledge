import Link from 'next/link';

const categories = [
  { name: '歴史', href: '/history' },
  { name: '哲学', href: '/philosophy' },
  { name: 'コンピュータ', href: '/computer' },
  { name: '芸術', href: '/art' },
  { name: '科学', href: '/science' },
];

export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-8">世界の教養</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <Link key={category.name} href={category.href} className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
            <h2 className="text-2xl font-bold">{category.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
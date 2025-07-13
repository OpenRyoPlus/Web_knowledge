import CategoryClientPage from './CategoryClientPage';
import knowledge from '@/data/knowledge_cards.json';

interface PageProps {
  params: Record<string, string>;
}

export default async function CategoryPage({ params }: PageProps) {
  const category = params.category;
  const cards = knowledge[category as keyof typeof knowledge] || [];

  return <CategoryClientPage category={category} cards={cards} />;
}


import CategoryClientPage from './CategoryClientPage';
import knowledge from '@/data/knowledge_cards.json';

export default function CategoryPage({ params }: { params: { category: string } }) {
  const { category } = params;
  const cards = knowledge[category as keyof typeof knowledge] || [];

  return <CategoryClientPage category={category} cards={cards} />;
}

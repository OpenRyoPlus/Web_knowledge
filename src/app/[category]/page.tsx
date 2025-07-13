import CategoryClientPage from './CategoryClientPage';
import knowledge from '@/data/knowledge_cards.json';

export default async function Page({ params }: { params: { category: string } }) {
  const category = params.category;
  const cards = knowledge[category as keyof typeof knowledge] || [];

  return <CategoryClientPage category={category} cards={cards} />;
}


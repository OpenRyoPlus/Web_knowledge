import CategoryClientPage from './CategoryClientPage';
import knowledge from '@/data/knowledge_cards.json';

// @ts-expect-error ← ← ← ここだけ変更
export default async function Page({ params }) {
  const category = params.category;
  const cards = knowledge[category as keyof typeof knowledge] || [];

  return <CategoryClientPage category={category} cards={cards} />;
}


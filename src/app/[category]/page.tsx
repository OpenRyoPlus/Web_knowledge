import CategoryClientPage from './CategoryClientPage';
import knowledge from '@/data/knowledge_cards.json';

type Props = {
  params: {
    category: string;
  };
};

export default function CategoryPage({ params }: Props) {
  const { category } = params;
  const cards = knowledge[category as keyof typeof knowledge] || [];

  return <CategoryClientPage category={category} cards={cards} />;
}

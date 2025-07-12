interface CardItem {
  title: string;
  content: string;
}

interface KnowledgeCardProps {
  item: CardItem;
}

const KnowledgeCard: React.FC<KnowledgeCardProps> = ({ item }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full flex flex-col items-center justify-center text-center"> {/* max-w-2xl を削除 */}
      <h3 className="text-4xl font-bold mb-4 text-gray-800">{item.title}</h3>
      <p className="text-xl leading-relaxed text-gray-700 whitespace-pre-wrap">{item.content}</p>
    </div>
  );
};

export default KnowledgeCard;
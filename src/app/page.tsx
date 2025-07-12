
import Link from 'next/link';
import Image from 'next/image';
import styles from './Home.module.css';

const categories = [
  { name: '歴史', href: '/history', color: '#3498db', icon: '/icons/history.svg' },
  { name: '哲学', href: '/philosophy', color: '#9b59b6', icon: '/icons/philosophy.svg' },
  { name: 'コンピュータ', href: '/computer', color: '#2ecc71', icon: '/icons/computer.svg' },
  { name: '芸術', href: '/art', color: '#e74c3c', icon: '/icons/art.svg' },
  { name: '科学', href: '/science', color: '#f1c40f', icon: '/icons/science.svg' },
  { name: 'AI', href: '/ai', color: '#6a0dad', icon: '/icons/ai.svg' }, // AIカテゴリを追加
];

export default function HomePage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>スキマ時間に学べる</h1>
        <p className={styles.subtitle}>世界の教養</p>
      </header>

      <section className={styles.categorySection}>
        <div className={styles.categoryGrid}>
          {categories.map((category) => (
            <Link key={category.name} href={category.href} className={styles.categoryButton} style={{ backgroundColor: category.color }}>
              <Image src={category.icon} alt={category.name} width={40} height={40} className={styles.categoryIcon} />
              <p className={styles.categoryText}>{category.name}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import type { ReactNode } from 'react';
import styles from './section.module.css';

interface SectionProps {
  title: string;
  type?: 'main' | 'ext'; // по умолчанию будем использовать 'sub'
  text?: string;
  children?: ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, type = 'ext', text, children }) => {
  const HeadingTag = type === 'main' ? 'h1' : 'h2';

  return (
    <section className={styles.section}>
      <HeadingTag className={`${type === 'main' ? styles.main : ''} ${styles.title}`}>{title}</HeadingTag>
      {text && <p className={styles.text}>{text}</p>}
      {children && <div className={styles.content}>{children}</div>}
    </section>
  );
};

export default Section;
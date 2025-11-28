import React from 'react';
import styles from './footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contactInfo}>
        {/* Email-ссылка */}
        <a
          href="mailto:goodmary1024@gmail.com"
          className={styles.link}
          aria-label="Написать на почту goodmary1024@gmail.com"
        >
          goodmary1024@gmail.com
        </a>

        {/* Ссылка на скачивание PDF */}
        <a
          href="https://drive.google.com/uc?id=1LNmVKeXnBSa5cmzlBk8FylxuQGaN36Sw&export=download"
          download="Шаблон политики конфиденциальности.pdf"
          className={styles.link}
          target="_blank"
          rel="noopener"
          aria-label="Скачать политику конфиденциальности (PDF)"
        >
          Политика конфиденциальности
        </a>

        {/* Telegram-ссылка с иконкой */}
        <a
          href="https://t.me/goodmary1024"
          className={styles.tgButton}
          target="_blank"
          rel="noopener"
          aria-label="Написать в Telegram"
        >
          <img
            src="/public/tg.svg"
            alt="Логотип Telegram"
            className={styles.tgIcon}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
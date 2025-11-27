import styles from './App.module.css';
import ButtonCTA from '../ui/buttonCTA/buttonCTA';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Section from '../ui/section/section';
import dataProblems from '../assets/db/problems.json';
import dataServices from '../assets/db/services.json';
import CardList from '../ui/cardList/cardList';
import learningFormats from '../assets/learningFormats';
import Reviews from '@/components/reviews/reviews';
import reviewData from '../assets/db/imgReviews.json';
import faqData from '../assets/db/faq.json';
import FAQ from '@/components/faq/faq';

function App() {
  const hundleForm = () => {
    console.log('submit form');
  };

  const hundleGuideToForm = () => {
    console.log('guite to form');
    const targetElement = document.getElementById('action');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={styles.app}>
      <Section 
        title='Подготовьте вашу команду к эпохе ИИ'
        type='main'
        text='Эпоха искусственного интеллекта уже наступила — убедитесь, что ваша команда готова к новым вызовам.
        Узнайте, как развивать ключевые навыки и эффективно внедрять ИИ-технологии в рабочие процессы'
      >
        <ButtonCTA onClick={hundleGuideToForm}/>
        <DotLottieReact
          src="/src/assets/test.lottie"
          loop={true}
          autoplay={true}
          style={{
            maxWidth: '200px',
            width: '100%',
            height: 'auto',
          }}
        /> 
      </Section>
      <Section 
        title='Ключевые проблемы развития бизнеса'
      >
        <CardList cards={dataProblems} enableFlip={true}/>
      </Section>
      <Section 
        title='Наши преимущества'
      >
        <CardList cards={dataServices} enableFlip={false}/>
      </Section>
      <Section 
        title='Форматы обучения'
      >
        <CardList cards={learningFormats} enableFlip={false} />
      </Section>
      <Section 
        title='Отзывы'
      >
        <div className={styles.reviewSec}>
          <Reviews items={reviewData}/>
        </div>
      </Section>
      <Section 
        title='FAQ'
      >
        <div className={styles.reviewSec}>
          <FAQ items={faqData}/>
        </div>
      </Section>
      <Section 
        title='Хотите начать?'
      >
        <div id="action">
          <p>Заполните форму — и мы оперативно свяжемся с вами.</p>
          <ButtonCTA onClick={hundleForm}/>
        </div>
      </Section>
    </div>
  )
}

export default App;

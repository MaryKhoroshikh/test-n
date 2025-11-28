import styles from './App.module.css';
import ButtonCTA from '../../ui/buttonCTA/buttonCTA';
import Section from '../../ui/section/section';
import dataProblems from '../../assets/db/problems.json';
import dataServices from '../../assets/db/services.json';
import CardList from '../../ui/cardList/cardList';
import learningFormats from '../../assets/learningFormats';
import Reviews from '@/components/reviews/reviews';
import reviewData from '../../assets/db/imgReviews.json';
import faqData from '../../assets/db/faq.json';
import FAQ from '@/components/faq/faq';
import Form from '@/components/form/form';
import Footer from '@/components/footer/footer';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function App() {

  const hundleGuideToForm = () => {
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
        
        <div className={styles.header}>
          <img src='/images/generation_2.webp' className={styles.mainImg} alt='набросок робота карандашом'/>
          <ButtonCTA onClick={hundleGuideToForm}/>
          <DotLottieReact
            src="/public/test.lottie"
            autoplay={true}
            style={{
              maxWidth: '200px',
              width: '100%',
              height: 'auto',
            }}
          /> 
        </div>
        
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
        <div id="action" className={styles.formSec}>
          <Form />
        </div>
      </Section>
      <Footer />
    </div>
  )
}

export default App;

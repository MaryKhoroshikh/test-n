import './App.css'
import ButtonCTA from '../ui/buttonCTA/buttonCTA'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Section from '../ui/section/section';

function App() {

  // const hundleForm = () => {
  //   console.log('submit form');
  // };

  const hundleGuideToForm = () => {
    console.log('guite to form');
  };

  return (
    <>
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
    </>
  )
}

export default App;

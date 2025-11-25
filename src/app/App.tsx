import './App.css'
import ButtonCTA from '../ui/buttonCTA/buttonCTA'

function App() {

  // const hundleForm = () => {
  //   console.log('submit form');
  // };

  const hundleGuideToForm = () => {
    console.log('guite to form');
  };

  return (
    <>
      <ButtonCTA onClick={hundleGuideToForm}/>
    </>
  )
}

export default App

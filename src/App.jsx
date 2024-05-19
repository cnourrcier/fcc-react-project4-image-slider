import ImageSlider from './components/imageSlider';
import './App.css'

function App() {

  return (
    <>
      <ImageSlider
        url={'https://picsum.photos/v2/list'}
        page={'1'}
        limit={'10'}
      />
    </>
  )
}

export default App

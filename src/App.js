import './App.css';
import { Header } from './components/header/Header';
import { ImgSlider } from './components/ImgSilder/ImgSlider';
import { Catalog } from './components/catalog/Catalog';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <ImgSlider />
      <Catalog />
    </div>
  );
}

export default App;

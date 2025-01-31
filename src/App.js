import './App.css';
import { Icon } from 'react-icons-kit'
import { home } from 'react-icons-kit/icomoon/home'
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

function App() {
  return (
    <div className='flex flex-col w-full min-h-screen overflow-hidden bg-black items-center' style={{fontFamily: 'Vazir'}}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

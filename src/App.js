import './App.css';
import { Icon } from 'react-icons-kit'
import { home } from 'react-icons-kit/icomoon/home'
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
// import videoSrc from './vid/1.mp4';

function App() {
  return (
    <div className='flex flex-col w-full min-h-screen overflow-hidden bg-black'>
      <video autoPlay muted loop className='absolute w-[100%] h-auto z-0'>    
        <source src={require('./vid/2.mp4')} type="video/mp4"></source>  
      </video>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import { Icon } from 'react-icons-kit'
import { home } from 'react-icons-kit/icomoon/home'
import Header from './Header';
import Cover from './Cover';
import Footer from './Footer';

function App() {
  return (
    <div className='flex flex-col w-full min-h-screen overflow-hidden bg-black items-center'>
      <video autoPlay muted loop className='absolute w-[100%] h-auto z-0'>    
        <source src={require('./vid/2.mp4')} type="video/mp4"></source>  
      </video>
      <Header />
      <Cover />
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import { useEffect, useRef } from 'react';

function App() {
  const mouseCursorRef = useRef(null);

  useEffect(() => {
    const mouseCursor = mouseCursorRef.current;

    const handleMouseMove = (e) => {
      let x = e.pageX;
      let y = e.pageY;
      mouseCursor.style.top = (y - 30) + "px";
      mouseCursor.style.left = (x - 35) + "px";
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className='flex flex-col w-full min-h-screen overflow-hidden bg-black items-center scroll-smooth' style={{ fontFamily: 'Vazir' }}>
      <div ref={mouseCursorRef} id='mouseCursor' className='absolute rounded-full p-10 opacity-35 bg-purple-900 shadow-lg z-50 pointer-events-none'></div>
      <Header />
      <Content />
      <Footer/>
    </div>
  );
}

export default App;
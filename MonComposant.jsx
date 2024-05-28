import React, { useEffect } from 'react';
import gsap from 'gsap';

function App() {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from('.title', { opacity: 0, y: -50, duration: 1 });
    tl.from('.btn', { opacity: 0, duration: 1 }, '-=0.5');
  }, []);

  return (
    <div>
      <h1 className="title">Mon Application React</h1>
      <button className="btn">Cliquez-moi</button>
    </div>
  );
}

export default App;

import React from 'react'
import './scss/styles.scss';
import { Header } from './Header';
import { Footer } from './Footer';
import { About } from './About';
import { Portfolio } from './Portfolio'
import { Services } from './Services';
import { Contacts } from './Contacts';




function App() {
  return (
    <>
      <Header />
      <main className="main">
        <About />
        <Portfolio />
        <Services />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}

export default App;


import React, {Suspense} from 'react';
import './scss/styles.scss';
import { Header } from './Header';
import { Footer } from './Footer';

const About = React.lazy(() => import('./About'));
const Portfolio = React.lazy(() => import('./Portfolio'));
const Services = React.lazy(() => import('./Services'));
const Contacts = React.lazy(() => import('./Contacts'));



function App() {
  return (
    <>
      <Header />
      <main className="main">
      <Suspense fallback={<div>Загрузка о нас...</div>}>
        <About />
      </Suspense>
      <Suspense fallback={<div>Загрузка портфолио...</div>}>
       <Portfolio />
      </Suspense>
      <Suspense fallback={<div>Загрузка услуг...</div>}>
        <Services />
      </Suspense>
      <Suspense fallback={<div>Загрузка формы...</div>}>
        <Contacts />
      </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;

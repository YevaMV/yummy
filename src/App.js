import { Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';
import Home from './pages/Home';
import Header from './components/Layout/Header';
import AllAccessorize from './pages/AllAccessorize';
import Contact from './pages/Contact';

function App() {
  return (
    <Fragment>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<AllAccessorize />} exact />
          <Route path="all-accessorize" element={<AllAccessorize />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <main>
        <Home />
      </main>
    </Fragment>
  );
}

export default App;

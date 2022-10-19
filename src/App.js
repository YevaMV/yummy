import { Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';
import Home from './pages/Home';
import Header from './components/Layout/Header';
import AllAccessorize from './pages/AllAccessorize';
import Contact from './pages/Contact';
import Card from './UI/Card';

function App() {
  return (
    <Fragment>
      <Card>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="all-accessorize" element={<AllAccessorize />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Card>
    </Fragment>
  );
}

export default App;

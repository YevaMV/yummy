import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AllAccessorize from './pages/AllAccessorize';
import Contact from './pages/Contact';
import Card from './UI/Card';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Card>
      <Layout>
        <div>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="all-accessorize" element={<AllAccessorize />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Layout>
    </Card>
  );
}

export default App;

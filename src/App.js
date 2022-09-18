import { Fragment } from 'react';
import Accessorize from './components/Accessorize/Accessorize';
import Header from './components/Layout/Header';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Accessorize />
      </main>
    </Fragment>
  );
}

export default App;

import { BrowserRouter } from 'react-router-dom';

import Layout from './app/Layout';
import Page from './app/Page';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Page />
      </Layout>
    </BrowserRouter>
  );
}

export default App;

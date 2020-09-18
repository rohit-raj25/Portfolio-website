import React from 'react';
import Layout from './hoc/Layout/Layout';
import Main from './containers/Main/Main';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faDatabase ,faFire ,faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
import './App.css';

library.add(fab,
  faDatabase , faFire,faExternalLinkAlt);

function App() {
  return (
    <div >
     <Layout>
     <Main />
     </Layout>
    </div>
  );
}

export default App;

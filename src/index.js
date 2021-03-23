import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/app.css';
import { Main} from './pages/Main.jsx';
import { Header } from './containers/Header';
import { Footer } from './containers/Footer';
import { Whatsapp } from "./containers/Whatsapp";

ReactDOM.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
  document.getElementById('header')
);

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
  document.getElementById('footer')
);


ReactDOM.render(
  <React.StrictMode>
    <Whatsapp />
  </React.StrictMode>,
  document.getElementById('wpp')
);
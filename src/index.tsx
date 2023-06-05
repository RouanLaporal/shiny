import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Survey from './pages/Survey';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Header from './components/Header';
import Error from './components/Error';
import Footer from './components/Footer';
import Freelances from './pages/Freelances';
import Results from './pages/Results';
import GlobalStyles  from './utils/styles/GlobalStyles';
import { ThemeProvider, SurveyProvider } from './utils/context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider>
      <SurveyProvider>
      <GlobalStyles/>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/survey/:questionNumber' element={<Survey/>}/>
        <Route path='/freelances' element={<Freelances/>}/>
        <Route path='/results' element={<Results/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/>
      </SurveyProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

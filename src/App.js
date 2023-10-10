import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import HomePage from './components/pages/home/HomePage';
import Footer from './components/layout/Footer';
import ReservationPage from './components/pages/reservations/ReservationPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservation" element={<ReservationPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

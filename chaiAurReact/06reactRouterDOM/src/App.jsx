// this is acting like a layout in this case rather than a app

import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      {/*Yahan pe mai cheeze change kar skta hoon ab, header and footer ko same rakhte hue. */}
      <Footer />
    </>
  );
}

export default App;

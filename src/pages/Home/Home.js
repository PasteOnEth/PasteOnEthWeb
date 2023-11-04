import React from 'react';
import PasteForm from '../../components/PasteForm/PasteForm'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/footer'

function Home() {
  return (
    <div>
        <Header />
        <PasteForm />
        <Footer />
    </div>
  );
}

export default Home;
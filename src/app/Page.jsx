// import React from 'react';
import NavBar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Content from '../Components/Content';
import Footer from '../Components/Footer';

const Page = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <main className="max-w-7xl mx-auto flex-1">
        <Content />
      </main>
      <Footer />
    </div>
  );
};

export default Page;
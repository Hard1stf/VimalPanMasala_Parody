// import React from 'react';
import NavBar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Content from '../Components/Content';

const Page = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <main className="max-w-7xl mx-auto">
        <Content />
      </main>
    </>
  );
};

export default Page;
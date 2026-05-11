import Hero from '../Components/Hero';
import Content from '../Components/Content';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto flex-1">
        <Hero />
        <Content />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

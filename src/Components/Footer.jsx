import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="py-4 px-4 mb-8 flex flex-col items-center justify-center gap-4 lg:mb-8">
        <div className="max-w-sm flex flex-col items-center justify-center gap-2">
          <Link to="/">
            <h1 className="text-2xl font-extrabold text-orange-50 tracking-tighter hover:text-orange-400 transition-all duration-300 hover:bg-orange-50 rounded-2xl py-2 px-4">
              Bimal
            </h1>
          </Link>
          <p className="text-sm text-orange-50 text-center">
            Bimal cannot be held accountable for any health issues, including
            cancer, that may arise from consumption.
          </p>
        </div>
        <p className="text-sm text-orange-200">
          &copy; {new Date().getFullYear()} Bolo Zubaan Canceri. All rights
          reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;

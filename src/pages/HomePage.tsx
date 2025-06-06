import { Link } from 'react-router-dom';

import bg from '@assets/bg-home.jpg';
import Button from '@components/ui/Button';

const HomePage = () => {
  return (
    <main
      className="flex flex-grow justify-start bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="mx-auto max-w-[1440px] px-16 w-full flex items-center">
        <div>
          <h1 className="text-5xl leading-8 font-semibold text-inputs">Campers of your dreams</h1>
          <p className="mt-4 text-2xl text-inputs">
            You can find everything you want in our catalog
          </p>
          <Button className="inline-block mt-10" as={Link} to="/catalog">
            View Now
          </Button>
        </div>
      </div>
    </main>
  );
};

export default HomePage;

import Button from './components/ui/Button';
import Category from './components/ui/Category';
import CupHot from './components/ui/icons/CupHot';
import Diagram from './components/ui/icons/Diagram';
import Fridge from './components/ui/icons/Fridge';
import FuelPump from './components/ui/icons/FuelPump';
import Microwave from './components/ui/icons/Microwave';
import Radio from './components/ui/icons/Radio';
import Shower from './components/ui/icons/Shower';
import Stove from './components/ui/icons/Stove';
import Water from './components/ui/icons/Water';
import Wind from './components/ui/icons/Wind';

function App() {
  return (
    <>
      <Button className="">Search</Button>
      <Button variant="outline" className="inline-block">
        Load more
      </Button>
      <div className="flex gap-2">
        <CupHot className="size-5 text-button" />
        <Diagram className="size-5 text-button" />
        <Fridge className="size-5 text-button" />
        <FuelPump className="size-5 text-button" />
        <Microwave className="size-5 text-button" />
        <Radio className="size-5 text-button" />
        <Shower className="size-5 text-button" />
        <Stove className="size-5 text-button" />
        <Water className="size-5 text-button" />
        <Wind className="size-5 text-button" />
      </div>
      <Category name="automatic" />
    </>
  );
}

export default App;

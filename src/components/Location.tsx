import Map from '@components/ui/icons/Map';

const Location = ({ location }: { location: string }) => {
  return (
    <span className="flex items-center gap-1">
      <Map className="size-4" />
      {location}
    </span>
  );
};

export default Location;

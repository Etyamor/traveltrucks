import Star from '@components/ui/icons/Star';

const Rating = ({ rating, reviewsLength }: { rating: number; reviewsLength: number }) => {
  return (
    <span className="flex items-center gap-1">
      <Star className="size-4 text-rating" />
      {rating}({reviewsLength} Reviews)
    </span>
  );
};

export default Rating;

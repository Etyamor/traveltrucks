import Star from '@components/ui/icons/Star';
import { cn } from '@lib/utils';

import type { ReviewsItem } from '@/types';

const Reviews = ({ reviews }: { reviews: ReviewsItem[] }) => {
  return (
    <div>
      <ul className="flex flex-col gap-11">
        {reviews.map((review, index) => (
          <li key={index} className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <div className="flex justify-center items-center size-[60px] rounded-full bg-badges text-button font-semibold text-2xl">
                {review.reviewer_name[0]}
              </div>
              <div>
                <p className="text-main font-medium">{review.reviewer_name}</p>
                <div className="flex gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={cn(
                        star <= review.reviewer_rating ? 'text-rating' : 'text-badges',
                        'size-4',
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-text">{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '@components/Button';
import EquipmentItem from '@components/EquipmentItem';
import Image from '@components/Image';
import Heart from '@components/ui/icons/Heart';
import Map from '@components/ui/icons/Map';
import Star from '@components/ui/icons/Star';
import equipmentList from '@lib/equipmentList';
import { cn, formatPrice } from '@lib/utils';
import { getAll } from '@redux/campers/operations';
import { selectCampers, selectCampersLoading, selectCampersOnPage, selectTotalCampers } from '@redux/campers/selectors';
import { loadMore } from '@redux/campers/slice';
import { selectFavorites, toggleFavorite } from '@redux/favorites/slice';

import type { AppDispatch, Camper } from '@/types';
import { selectFilter } from '@redux/filter/selectors';

const CampersList = () => {
  const dispatch: AppDispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const filter = useSelector(selectFilter);
  const onPage = useSelector(selectCampersOnPage);
  const total = useSelector(selectTotalCampers);
  const favorites = useSelector(selectFavorites);
  const loading = useSelector(selectCampersLoading);

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch, filter]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[400px]">
        <span className="text-text">Loading...</span>
      </div>
    );
  }

  return (
    <>
      {!!campers.length &&
        campers.slice(0, onPage).map((camper: Camper) => (
          <div
            key={camper.id}
            className="border border-gray-light rounded-[20px] p-6 w-full flex gap-6"
          >
            <Image url={camper.gallery[0].thumb} alt={camper.name} />
            <div className="w-full">
              <div className="flex items-start justify-between gap-4 text-2xl font-semibold text-main">
                <h3>{camper.name}</h3>
                <div className="flex items-center gap-3">
                  <span>{formatPrice(camper.price)}</span>
                  <button
                    onClick={() => dispatch(toggleFavorite(camper.id))}
                    className="inline-block hover:text-button"
                  >
                    <Heart
                      className={cn(
                        'size-6',
                        favorites.includes(camper.id) ? 'text-button' : 'text-gray-light',
                      )}
                    />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-2">
                {!!camper.rating && (
                  <span className="flex items-center gap-1">
                    <Star className="size-4 text-rating" />
                    {camper.rating}({camper.reviews.length} Reviews)
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <Map className="size-4" />
                  {camper.location}
                </span>
              </div>
              <p className="mt-6 text-text line-clamp-1">{camper.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {equipmentList(camper).map(({ icon, text }, index) => (
                  <li key={index}>
                    <EquipmentItem label={text} icon={icon} />
                  </li>
                ))}
              </ul>
              <Button as={Link} to={`/catalog/${camper.id}`} className="inline-block mt-6">
                Show more
              </Button>
            </div>
          </div>
        ))}
      {onPage < total && (
        <Button className="mx-auto" variant="outline" onClick={() => dispatch(loadMore())}>
          Load more
        </Button>
      )}
    </>
  );
};

export default CampersList;

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import Features from '@components/Features';
import Image from '@components/Image';
import Location from '@components/Location';
import Rating from '@components/Rating';
import Reviews from '@components/Reviews';
import { fetchCamperById } from '@lib/api';
import { cn, formatPrice } from '@lib/utils';
import { selectCampers } from '@redux/campers/selectors';

import type { Camper } from '@/types';

const CatalogItemPage = () => {
  const { id } = useParams();
  const campers = useSelector(selectCampers);
  const [camper, setCamper] = useState<Camper>({} as Camper);
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<'features' | 'reviews'>('features');
  const activeTabClass =
    'relative before:absolute before:-bottom-[27px] before:left-0 before:w-full before:h-[5px] before:bg-button';

  useEffect(() => {
    if (!id) return;

    // Check if the camper is already in the Redux store to prevent additional API call by camper ID
    const cachedCamper = campers.find((c) => Number(c.id) === Number(id));
    if (cachedCamper) {
      setCamper(cachedCamper);
      return;
    }

    const fetchData = async () => {
      try {
        const camper: Camper = await fetchCamperById(Number(id));
        setCamper(camper);
      } catch (error) {
        navigate('/');
      }
    };
    fetchData();
  }, []);

  if (!camper.id) {
    return <div className="py-12 text-center">Loading...</div>;
  }

  return (
    <div className="py-12">
      <div className="mx-auto max-w-[1440px] px-16 w-full">
        <h1 className="text-2xl font-semibold text-main">{camper.name}</h1>
        <div className="flex items-center gap-4 mt-2">
          {!!camper.rating && (
            <Rating rating={camper.rating} reviewsLength={camper.reviews.length} />
          )}
          <Location location={camper.location} />
        </div>
        <p className="text-2xl font-semibold text-main mt-4">{formatPrice(camper.price)}</p>
        <div className="w-full flex mt-7 gap-12">
          {camper.gallery.map((image, index) => (
            <Image key={index} url={image.thumb} alt={camper.name} />
          ))}
        </div>
        <p className="mt-7 text-text">{camper.description}</p>
        <div className="mt-[60px]">
          <div className="pb-6 flex w-full gap-10 border-b border-gray-light text-xl text-main font-semibold [&>button]:cursor-pointer">
            <button
              className={cn(activeTab === 'features' && activeTabClass)}
              onClick={() => setActiveTab('features')}
            >
              Features
            </button>
            <button
              className={cn(activeTab === 'reviews' && activeTabClass)}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews
            </button>
          </div>
        </div>
        <div className="mt-11 flex justify-between gap-10">
          <div className="shrink-0 max-w-[631px]">
            {activeTab === 'features' ? (
              <Features camper={camper} />
            ) : (
              <Reviews reviews={camper.reviews} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogItemPage;

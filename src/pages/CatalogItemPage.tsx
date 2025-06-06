import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import Image from '@components/ui/Image';
import Location from '@components/ui/Location';
import Rating from '@components/ui/Rating';
import { fetchCamperById } from '@lib/api';
import { formatPrice } from '@lib/utils';
import { selectCampers } from '@redux/campers/selectors';

import type { Camper } from '@/types';

const CatalogItemPage = () => {
  const { id } = useParams();
  const campers = useSelector(selectCampers);
  const [camper, setCamper] = useState<Camper>({} as Camper);
  const navigate = useNavigate();

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
      </div>
    </div>
  );
};

export default CatalogItemPage;

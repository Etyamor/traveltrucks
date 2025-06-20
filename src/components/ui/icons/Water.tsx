import type { FC } from 'react';

const Water: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.625 12.5C15.625 15.952 13.452 18.125 10 18.125C6.54805 18.125 4.375 15.952 4.375 12.5C4.375 8.79571 8.40742 3.79492 9.64414 2.34844C9.68815 2.29705 9.74276 2.25579 9.80422 2.2275C9.86568 2.19922 9.93254 2.18457 10.0002 2.18457C10.0679 2.18457 10.1347 2.19922 10.1962 2.2275C10.2576 2.25579 10.3122 2.29705 10.3562 2.34844C11.5926 3.79492 15.625 8.79571 15.625 12.5Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeMiterlimit="10"
      />
      <path
        d="M13.4375 12.8125C13.4375 13.5584 13.1412 14.2738 12.6137 14.8012C12.0863 15.3287 11.3709 15.625 10.625 15.625"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Water;

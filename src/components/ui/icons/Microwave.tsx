import type { FC } from 'react';

const Microwave: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.6667 3.33331H3.33335C2.41288 3.33331 1.66669 4.07951 1.66669 4.99998V14.1666C1.66669 15.0871 2.41288 15.8333 3.33335 15.8333H16.6667C17.5872 15.8333 18.3334 15.0871 18.3334 14.1666V4.99998C18.3334 4.07951 17.5872 3.33331 16.6667 3.33331Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.8333 6.66669H5.83333C5.3731 6.66669 5 7.03978 5 7.50002V11.6667C5 12.1269 5.3731 12.5 5.83333 12.5H10.8333C11.2936 12.5 11.6667 12.1269 11.6667 11.6667V7.50002C11.6667 7.03978 11.2936 6.66669 10.8333 6.66669Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 6.66669V12.5M5 15.8334V17.5M15 15.8334V17.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Microwave;

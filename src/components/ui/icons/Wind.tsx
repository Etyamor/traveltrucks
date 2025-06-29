import type { FC } from 'react';

const Wind: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="currentColor">
      <g>
        <path d="M15.625 2.5A3.125 3.125 0 0 0 12.5 5.625a.625.625 0 1 1-1.25 0A4.375 4.375 0 1 1 15.625 10h-15a.625.625 0 0 1 0-1.25h15a3.125 3.125 0 1 0 0-6.25Zm-8.75 1.25A1.25 1.25 0 0 0 5.625 5a.625.625 0 0 1-1.25 0 2.5 2.5 0 1 1 2.5 2.5H.625a.625.625 0 0 1 0-1.25h6.25a1.25 1.25 0 1 0 0-2.5ZM0 11.875a.625.625 0 0 1 .625-.625h12.553A3.75 3.75 0 1 1 9.428 15a.625.625 0 1 1 1.25 0 2.5 2.5 0 1 0 2.5-2.5H.624A.625.625 0 0 1 0 11.875Z" />
      </g>
    </svg>
  );
};

export default Wind;

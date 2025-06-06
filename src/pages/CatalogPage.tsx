import CampersList from '@components/CampersList';

const CatalogPage = () => {
  return (
    <div className="p-12">
      <div className="mx-auto max-w-[1440px] px-16 w-full flex items-center">
        <div className="flex w-full gap-16">
          <div className="shrink-0 w-[360px]">Future Filters</div>
          <div className="w-full">
            <div className="flex flex-col gap-8">
              <CampersList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;

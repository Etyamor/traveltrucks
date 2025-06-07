const Image = ({ url, alt }: { url: string; alt: string }) => {
  return (
    <div className="shrink-0 w-[292px] h-[320px] rounded-[10px] overflow-hidden">
      <img className="w-full h-full object-cover" src={url} alt={alt} />
    </div>
  );
};

export default Image;

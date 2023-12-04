const CardCategory = ({ func, icon, id, title }) => {
  return (
    <>
      <a
        className="h-70 flex w-1/4 scroll-mt-32 flex-col items-center rounded bg-[#F3F3F3] pb-1 pt-2.5 text-xs"
        onClick={func}
        href={`#${id}`}
      >
        <img className="h-12 w-8" src={icon} alt={id} />
        <p>{title}</p>
      </a>
    </>
  );
};

export default CardCategory;

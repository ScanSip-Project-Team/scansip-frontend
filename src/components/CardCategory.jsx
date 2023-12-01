const CardCategory = ({ func, icon, id, title }) => {
  return (
    <>
      <a
        className="h-70 flex w-1/4 flex-col items-center rounded bg-[#F3F3F3] p-1.5"
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

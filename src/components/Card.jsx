const Card = (props) => {
  return (
    <div className="border-[1px] border-[#576374] rounded-lg bg-[#1e293b] w-full max-w-[1000px] mx-auto pt-14 pb-8 px-14 my-7">
      {props.children}
    </div>
  );
};

export default Card;

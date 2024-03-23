const Service = ({ data }) => {
  return (
    <div className="p-2 mx-auto rounded-md bg-gray-800 text-white transition shadow-sm hover:scale-105 duration-y transform ">
      <div className="h-[125px]">
        <img
          className="h-[100%] w-[100%] rounded-md object-cover"
          src={data?.info?.ImageId}
          alt="design-img"
        />
      </div>
      <h2 className="text-sm font-medium my-1">{data?.info?.name}</h2>
      <p className="font-normal text-xs">{data?.info?.brief} </p>
    </div>
  );
};

export default Service;

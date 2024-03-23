const Testimonial = ({ data }) => {
  return (
    <div className="flex p-2 bg-white rounded-md transition hover:scale-[1.02] duration-y transform">
      <div className="flex-none w-[30px] h-[30px]">
        <img
          src={data?.info?.ImageId}
          alt="user-img"
          className="object-cover w-[30px] h-[30px] rounded-full"
        />
      </div>
      <div className="flex-1">
        <div className="flex flex-row justify-between">
          <div>
            <span className="mx-2 font-medium">{data?.info?.name}</span>
            <button className="ml-1 text-sm bg-black text-white rounded-full px-3">
              {data?.info?.locality}
            </button>
          </div>
          <div>
            <span className="text-xs text-[#007AFF]">{data?.info?.time}</span>
          </div>
        </div>
        <h2 className="ml-2 my-2 text-sm">{data?.info?.message}</h2>
        <div className="ml-2 flex justify-between">
          <span className="text-sm cursor-pointer flex flex-row gap-x-2">
            <div>🧡</div>
            <div>{data?.info?.like}</div>
          </span>
          <span className="text-sm cursor-pointer flex flex-row gap-x-2">
            <div>👁</div>
            <div>{data?.info?.view}</div>
          </span>
          <span className="text-sm cursor-pointer flex flex-row gap-x-2">
            <div> 🗨 </div>
            <div> {data?.info?.comment}</div>
          </span>
          <span className="text-sm cursor-pointer flex flex-row gap-x-2">
            <div>🔃</div>
            <div>{data?.info?.share}</div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

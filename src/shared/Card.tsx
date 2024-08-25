interface CardProps {
  imgs: string;
  price: string;
  info: string;
  badge: string;
}

const Card: React.FC<CardProps> = ({ imgs, price, info, badge }) => {
  return (
    <div className="w-[100%] border-r-2 flex items-center">
      <div className="w-[100%] ">
        <div className=" w-[80%] flex justify-center items-center space-x-2">
          <div>
            <img src={imgs} alt={info} className="w-6 h-6 rounded-full" />
          </div>
          <div className="text-xl font-semibold text-gray-600">{info}</div>
        </div>
        <div className="w-[80%] flex justify-center items-center space-x-8 py-2">
          <div className="text-2xl font-semibold">{price}</div>
          <div className="w-10 h-6 bg-green-300 px-1 rounded-lg text-white justify-center items-center">
            <p className="text-xs mt-1">{badge}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

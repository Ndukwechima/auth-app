import React from "react";
import { ItemsInter } from "../interfaces";
import Card from "../shared/Card";
import BarChart from "../components/BarChart";
import Activities from "../components/Activities";
import TableInfo from "../components/TableInfo";

// Define cardItems as an array of objects
const cardItems: ItemsInter[] = [
  {
    imgs: "/src/assets/dining.jpg",
    price: "$216k",
    info: "Total Revenue",
    badge: "245%",
  },
  {
    imgs: "/src/assets/dining.jpg",
    price: "$2,221k",
    info: "Invoices",
    badge: "134*",
  },
  {
    imgs: "/src/assets/dining.jpg",
    price: "$1,423k",
    info: "Clients",
    badge: "875#",
  },
  {
    imgs: "/src/assets/dining.jpg",
    price: "78%",
    info: "Royalty",
    badge: "123 + ",
  },
];

const DashboardHome: React.FC = () => (
  <div>
    <div className="w-[97%] flex bg-white ml-4 py-4 shadow-sm h-[18vh] rounded-2xl mt-10">
      {/* Cards Here */}
      {cardItems.map((item, i) => (
        <Card
          key={i}
          imgs={item.imgs}
          price={item.price}
          info={item.info}
          badge={item.badge}
        />
      ))}
    </div>
    <section className="flex w-[97%] mt-8 justify-between ml-4">
      <section className="w-[58%] bg-white shadow-sm rounded-2xl">
        <BarChart />
      </section>

      <div className="w-[40%] h-[34vh] flex rounded-2xl mb-5 overflow-hidden">
        <div className="w-[100%] h-[40vh] bg-[url('assets/group.png')] bg-cover bg-center bg-no-repeat">
          <div className=" px-[4rem] py-2 ">
            <div className="pt-6">
              <button className="bg-white py-1  px-4 rounded-full font-semibold">
                Get Now
              </button>
            </div>
            <p className="w-[50%] text-white text-2xl font-bold pt-8">
              We have added new invoice templates!
            </p>
            <p className="w-[60%] text-[#e2e1e1] font-bold pt-6">
              New templates focus on helping you improve your business
            </p>
            <div className="">
              <button className="bg-white py-2 px-[12rem] rounded-lg font-semibold mt-[4rem]">
                Download Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="h-[36vh] shadow-sm flex w-[97%] justify-between ml-4 mt-10 rounded-2xl">
      <div className="w-[37%] bg-white flex justify-center items-center rounded-2xl">
        <Activities />
      </div>
      <div className="w-[60%] bg-white flex justify-center items-center  pb-[5rem] rounded-2xl">
        <TableInfo />
      </div>
    </section>
  </div>
);

export default DashboardHome;

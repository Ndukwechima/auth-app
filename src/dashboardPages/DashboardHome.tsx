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
  <div className="w-[100%]">
    <div className="w-[96%] mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 py-4 h-[18vh] rounded-2xl mt-4">
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
    <section className="w-[96%] mx-auto grid grid-cols-1 gap-4 lg:grid-cols-2 ml-4 sm:ml-0 mt-[36rem] sm:mt-[12rem] md:mt-[12rem] lg:mt-[6rem]">
      <section className="w-[100%] h-[40vh] lg:h-0 order-2 lg:order-1">
        <BarChart />
      </section>

      <div className="w-[100%] lg:h-[38vh] flex rounded-2xl mb-5 order-1 lg:order-2">
        <div className="w-[100%] bg-[url('assets/group.png')] bg-cover bg-center bg-no-repeat">
          <div className="w-[100%] px-[4rem] py-2 ">
            <div className="pt-6">
              <button className="bg-white py-1  px-4 rounded-full font-semibold">
                Get Now
              </button>
            </div>
            <div className="">
              <p className="w-[100%] lg:w-[100%] text-white text-2xl font-bold pt-8">
                We have added new invoice templates!
              </p>
              <p className="w-[100%] lg:w-[100%]  text-[#e2e1e1] font-bold pt-6">
                New templates focus on helping you improve your business
              </p>
            </div>
            <div>
              <button className="w-[100%] bg-white py-2 rounded-lg font-semibold md:mt-[4rem] ">
                Download Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="w-[96%] mx-auto grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-3 justify-start ml-[1.3rem] sm:ml-0 shadow-sm mt-10 rounded-2xl">
      <div>
        <Activities />
      </div>
      <div className=" col-span-2 flex flex-col">
        <TableInfo />
      </div>
    </section>
  </div>
);

export default DashboardHome;

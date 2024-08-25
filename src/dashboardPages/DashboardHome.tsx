import React from "react";
import { ItemsInter } from "../interfaces";
import Card from "../shared/Card";
import BarChart from "../components/BarChart";
import Activities from "../components/Activities";
import Table from "../components/Table";

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
    <div className="w-[97%] flex bg-white ml-4 py-4 shadow-sm h-[18vh] rounded-[1.5rem] mt-10">
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
    <section className="flex w-[97%] justify-between ml-4">
      <section className="w-[58%] border border-green-500 bg-white shadow-sm rounded-[1.5rem] mt-10 flex justify-center items-start">
        <BarChart />
      </section>

      <div className="w-[40%] h-[56.3vh] flex justify-center items-center mt-[3rem] rounded-[1.5rem] overflow-y-hidden">
        <div className="w-[100%] h-[66.3vh] mt-[2.6rem] bg-[url('assets/group.png')] bg-cover bg-center bg-no-repeat">
          <div className="w-[100%] mt-[6rem] p-[4rem] overflow-x-hidden ">
            <button className="bg-white py-1  px-4 rounded-full font-semibold">
              Get Now
            </button>
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
    <section className="bg-white h-[30vh] shadow-sm">
      <Activities />
      <Table />
    </section>
  </div>
);

export default DashboardHome;

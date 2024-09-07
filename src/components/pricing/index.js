import React from "react";
import { Fade } from "react-awesome-reveal";

function Pricing() {
  return (
    <div id="pricing" className="py-8 px-8 lg:px-40 mt-20">
      <h1 className="mb-20 text-4xl">Pricing</h1>
      <div className="grid grid-cols-1 xl:grid-cols-3 w-full gap-12 xl:gap-24">
        <Fade triggerOnce direction="up">
          <div className="transform transition h-full xl:h-[600px] duration-500 hover:scale-110 cursor-pointer rounded-xl p-10 border border-red-primary shadow flex justify-center flex-col items-center">
            <h2 className="text-2xl text-red-primary lg:text-4xl font-bold mb-8">
              Basic
            </h2>
            <h3 className="my-2 font-bold text-xl">Rp. 1.599.000/mo</h3>
            <ul>
              <li className="text-xl my-4 my-2">Mencatat barang masuk</li>
              <li className="text-xl my-4 my-2">Mencatat barang keluar</li>
              <li className="text-xl my-4 my-2">Mencatat hasil keuntungan</li>
            </ul>
          </div>
        </Fade>
        <Fade triggerOnce direction="up">
          <div className="transform transition h-full xl:h-[600px] duration-500 hover:scale-110 cursor-pointer rounded-xl p-10 border border-red-primary shadow flex justify-center flex-col items-center">
            <h2 className="text-2xl text-red-primary lg:text-4xl font-bold mb-8">
              Business
            </h2>
            <h3 className="my-2 font-bold text-xl">Rp. 2.599.000/mo</h3>
            <ul>
              <li className="text-xl my-4 my-2">
                Mencatat barang masuk dan keluar
              </li>
              <li className="text-xl my-4 my-2">Mencatat Keuntungan</li>
              <li className="text-xl my-4 my-2">
                Dapat menganalisa hasil penjualan dengan CHART
              </li>
              <li className="text-xl my-4 my-2">Support 7x24 Jam</li>
            </ul>
          </div>
        </Fade>
        <Fade triggerOnce direction="up">
          <div className="transform transition h-full xl:h-[600px] duration-500 hover:scale-110 cursor-pointer rounded-xl p-10 border border-red-primary shadow flex justify-center flex-col items-center">
            <h2 className="text-2xl text-red-primary lg:text-4xl font-bold mb-8">
              Entrepreneur
            </h2>
            <h3 className="my-2 font-bold text-xl">Rp. 3.599.000/mo</h3>
            <ul>
              <li className="text-xl my-4 my-2">
                Mencatat barang masuk dan keluar
              </li>
              <li className="text-xl my-4 my-2">Mencatat Keuntungan</li>
              <li className="text-xl my-4 my-2">
                Dapat menganalisa hasil penjualan dengan CHART
              </li>
              <li className="text-xl my-4 my-2">Support 7x24 Jam</li>
              <li className="text-xl my-4 my-2">Export data ke Excel</li>
              <li className="text-xl my-4 my-2">AI Prediksi penghasilan</li>
            </ul>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Pricing;

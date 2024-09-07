import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import React, { Fragment } from "react";

export const Footer = () => {
  return (
    <div className="bg-black py-14 px-8 lg:px-20 mt-14 flex flex-col md:flex-row gap-12 justify-between text-white">
      <div className="w-3/4">
        {/* <img
          src="/blog/assets/images/gooddreamer-logo-white.svg"
          width={200}
          height={27}
          alt="gooddreamer-logo"
        /> */}
        <div className="flex mt-4 gap-8">
          <div>
            <h4 className="text-[18px] font-bold">Menu</h4>
            <ul className="text-[16px] flex flex-col gap-2 mt-4">
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/pricing">Pricing</a>
              </li>
              {/* <li><a href="/author">Benefit Penulis {"&"} Jadi Penulis</a>Benefit Penulis {"&"} Jadi Penulis</li> */}
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[18px] font-bold">Ketentuan</h4>
            <ul className="text-[16px] flex flex-col gap-2 mt-4">
              <li>
                <a href="/terms">Syarat {"&"} Ketentuan</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-auto">
        <h4 className="text-[18px] font-bold">
          Ingin mendapat update terbaru?
        </h4>
        <h5 className="text-[16px] mt-2">
          Masukkan email untuk mendapat update terbaru dari KedaTech
        </h5>

        <form className="mt-4 flex items-center gap-2">
          <div className="relative">
            <input
              type="email"
              className="rounded-[8px] py-[12px] pl-12 w-full border border-white bg-black-primary"
              placeholder="Tulis emailmu disini"
            />
            <img
              src="/icons/envelope.svg"
              width={24}
              height={24}
              alt="envelope"
              className="absolute left-4 top-1/2 transform -translate-y-1/2"
            />
          </div>

          <button
            type="submit"
            className="rounded-[8px] border border-white bg-transparent px-[20px] py-[12px]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

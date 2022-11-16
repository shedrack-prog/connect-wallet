import React, { useState } from "react";
import { categoryDate } from "../data";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import { Link } from "react-router-dom";
import { images } from "../constants";

const HomeScreen = () => {
  return (
    <div className="bg-gradient-to-b from-[#000000] to-[#0c0e29] ">
      <div className="pt-[2rem] lg:max-w-[60vw] lg:mx-auto">
        {/* <img src="https://chain-kits.co/user/logo.svg" alt="" /> */}
        <div className="flex flex-col items-center justify-center px-3 ">
          <h1 className="text-end text-[#195ba6] text-md absolute right-3 top-2">
            beta
          </h1>
          <p className="text-white font-semibold mb-5">
            Open protocol to communicate securely between Wallets and Dapps
            (Web3 Apps).
          </p>
          <p className="text-white font-semibold mb-5">
            The protocol establishes a remote connection using a Bridge server.
          </p>
          <span
            className=" animate-pulse hover:scale-105 transition-all duration-200 px-[20px] font-bold text-white
          cursor-pointer  mt-4 py-3 border-l-2 border-[#3182ce] rounded-lg bg-[#1a1c34]"
          >
            <Link to="/wallet">Connect Wallet</Link>
          </span>
        </div>
        <div className="max-w-[70vw] mx-auto mt-[2rem]">
          <img src={images.banner} alt="" className="w-full h-full" />
        </div>
        <div className="h-[2px] w-full bg-gray-500 mt-3" />
        <div className="flex items-center justify-center p-3 flex-col mt-[2rem]">
          <h1 className="font-bold text-md text-[#0150b8] mb-[2rem]">
            Qucik Start
          </h1>
          <div className="flex gap-5 flex-wrap items-center justify-center">
            {categoryDate.map((item, index) => (
              <Link to="/wallet" key={index}>
                <div
                  className="md:w-[220px] md:h-[210px] bg-[#1a1c34] w-[320px] h-[140px]
              flex flex-col items-center justify-center border-l-[6px]
              cursor-pointer hover:scale-105 transition-all duration-300 border-[#3182ce] rounded-lg"
                >
                  <span></span>
                  <img src={item.imgurl} alt="" />
                  <h1 className="text-md font-semibold mt-4 text-white">
                    {item.title}
                  </h1>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-[4rem] md:max-w-[70vw] mx-auto">
          <h1 className="text-[#195ba6] font-bold text-md">Distribution</h1>
          <div className="flex justify-between text-white w-full px-3">
            <div>
              <p className="text-[1rem] mt-3 md:text-[2rem] font-bold">50K+</p>
              <p className="text-md font-semibold">resolved issues</p>
            </div>
            <div>
              <p className="text-[1rem] mt-3 md:text-[2rem] font-bold">200K+</p>
              <p className="text-md font-semibold">active Wallets</p>
            </div>
            <div>
              <p className="text-[1rem] mt-3 md:text-[2rem] font-bold">100+</p>
              <p className="text-md font-semibold">contributors</p>
            </div>
          </div>
        </div>

        <div className="mt-[3rem]  mb-[5rem] flex flex-col items-center">
          <p className="text-md text-white font-semibold">
            Ready to resolve your blockchain issues?
          </p>
          <p className="text-md text-white font-semibold">
            We are here to provide help.
          </p>
          <span
            className="px-5 py-2 bg-[#0150b8] 
          cursor-pointer rounded-lg text-white
          mt-[1rem]  font-bold hover:scale-105 transition-all duration-300 "
          >
            <Link to="/wallet">Get Started</Link>
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex gap-4 text-gray-400 mb-3 ">
            <a
              href="https://www.instagram.com/"
              className="hover:text-gray-500"
            >
              <AiOutlineInstagram size={19} />
            </a>
            <a href="https://discord.com/" className="hover:text-gray-500">
              <SiDiscord size={19} />
            </a>
            <a href="https://twitter.com/" className="hover:text-gray-500">
              <AiOutlineTwitter size={19} />
            </a>
          </div>
          <p className="text-white text-sm font-semibold">
            secured-© 2022 All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;

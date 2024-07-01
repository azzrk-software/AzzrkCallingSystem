import { useState } from 'react';
import SideBar from '../components/SideBar';
import { FaArrowRight } from 'react-icons/fa';
import { IoCall, IoClose } from 'react-icons/io5';
import circleIcon from '../assets/images/circleIcon.png';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import InnocallsRTCComponent from '../components/InnCallRTLComponents';

export default function Calling() {
  const [isOpenSidebar, setIsOpenSiderbar] = useState(true);

  return (
    <div className="flex justify-end">
      <div
        className={`z-[999] w-[310px] min-w-[310px] fixed top-0 bottom-0 transition-all ease-in-out duration-500 left-0 max-lg:z-[9] ${
          isOpenSidebar ? 'left-0' : 'max-lg:left-[-310px]'
        }`}
        style={{ boxShadow: '2px 1px 15px -1px #00000040' }}
      >
        <button
          onClick={() => setIsOpenSiderbar(!isOpenSidebar)}
          className="bg-[#00092A] text-white absolute top-[20px] right-[-40px] text-xl w-[40px] rounded-tr-[20px] rounded-br-[20px] h-[40px]  items-center justify-center hidden max-lg:flex"
        >
          {isOpenSidebar ? (
            <IoClose className="font-bold text-[24px] mr-1" />
          ) : (
            <FaArrowRight className="text-lg mr-1" />
          )}
        </button>
        <SideBar />
      </div>

      <div
        className={`px-24 py-[55px] w-full space-y-7 flex-1 overflow-x-hidden transition-all ease-in-out duration-500 max-w-[calc(100%-310px)]  max-lg:max-w-full`}
      >
        <div className="flex justify-between items-center w-full mb-8">
          <h1 className="text-2xl font-semibold capitalize">calling</h1>
        </div>

        <InnocallsRTCComponent />

        {/* <div
          className="w-[496px] h-auto rounded-xl overflow-hidden pb-8"
          style={{ boxShadow: '2px 1px 15px -1px #00000040' }}
        >
          <div className="w-full bg-[#10B981] px-2 py-2 flex items-center gap-x-[0.25rem]">
            <RiCheckboxBlankCircleFill className="text-white" />
            <p className="text-white text-[24px]">Connected 504</p>
          </div>

          <input
            type="text"
            placeholder="Enter digits....."
            className="mt-4 w-[80%] p-4 bg-[#EBEBEB] rounded-lg mx-auto block outline-none"
          />

          <div className="max-w-[70%] mx-auto mt-10">
            <div className="grid grid-cols-3 gap-4 mt-6 ">
              {Array.from({ length: 9 }).map((_, index) => {
                return (
                  <button
                    key={`button-${index}`}
                    className="text-4xl font-semibold m-auto bg-[#EBEBEB] transition-all ease-in-out hover:bg-[#e0dfdf] text-[#1A1A1A] flex items-center justify-center w-[90px] h-[90px] rounded-full fit-content"
                  >
                    <p>{index + 1}</p>
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-3 gap-4 mt-[1rem]">
              <button className="text-6xl font-semibold m-auto bg-[#EBEBEB] transition-all ease-in-out hover:bg-[#e0dfdf] text-[#1A1A1A] flex items-center justify-center w-[90px] h-[90px] rounded-full fit-content">
                <p className="mb-[-20px]">*</p>
              </button>
              <button className="text-4xl font-semibold m-auto bg-[#EBEBEB] transition-all ease-in-out hover:bg-[#e0dfdf] text-[#1A1A1A] flex items-center justify-center w-[90px] h-[90px] rounded-full fit-content">
                <p>0</p>
              </button>
              <button className="text-4xl font-semibold m-auto bg-[#EBEBEB] transition-all ease-in-out hover:bg-[#e0dfdf] text-[#1A1A1A] flex items-center justify-center w-[90px] h-[90px] rounded-full fit-content">
                <p>#</p>
              </button>
            </div>

            <div className="mt-10">
              <button className="text-4xl font-semibold m-auto bg-[#10B981] text-[#fff] flex items-center justify-center w-[90px] h-[90px] rounded-full fit-content transition-all ease-in-out hover:bg-[#10b981da]">
                <IoCall />
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

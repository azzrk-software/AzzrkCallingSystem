import { useEffect, useState } from 'react';
import SideBar from '../components/SideBar';
import { FaArrowRight } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import InnocallsRTCComponent from '../components/InnCallRTLComponents';

export default function Calling() {
  const [isOpenSidebar, setIsOpenSiderbar] = useState(true);

  const azzrkCallingSystemToken = localStorage.getItem(
    'azzrkCallingSystemToken'
  );

  useEffect(() => {
    if (!azzrkCallingSystemToken) {
      window.location.pathname = '/';
    }
  }, []);

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
      </div>
    </div>
  );
}

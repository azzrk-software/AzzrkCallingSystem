import { useNavigate } from 'react-router';
import historyIcon from '../assets/images/historyIcon.png';
import callIcon from '../assets/images/callIcon.png';

export default function SideBar() {
  const navigate = useNavigate('');

  return (
    <div className="w-full m-auto min-h-full grid">
      <div className="flex flex-col justify-between gap-6">
        <div className="bg-white rounded-b-3xl flex-1">
          <div
            className="h-[10vh] w-full m-auto text-left pl-6 py-6 bg-[#00092A] flex items-center gap-x-2"
            style={{ boxShadow: '2px 1px 15px -1px #00000040' }}
          >
            <img src={historyIcon} alt="" className="max-w-10 h-auto" />
            <h1 className="text-2xl capitalize text-[#fff]">history</h1>
          </div>

          <section className="history-section-sidebar w-full pt-4 px-4 h-[90vh] flex flex-col overflow-y-scroll">
            {Array.from({ length: 50 }).map((call, index) => {
              return (
                <div
                  key={`call-${index}`}
                  className="flex items-center justify-between pt-4 pb-4 border-b border-[#E2E2E2]"
                >
                  <button className="max-w-6">
                    <img src={callIcon} className="w-full h-auto" alt="" />
                  </button>

                  <div>
                    <p className="font-semibold text-black capitalize">
                      ahmed ali
                    </p>
                    <span className="text-[#A8A8A8] text-[14px]">
                      50 <span className="capitalize">min</span>
                    </span>
                  </div>

                  <p className="text-[#A8A8A8] text-[14px] font-normal">
                    1:15 <span className="capitalize">pm</span>
                  </p>
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </div>
  );
}

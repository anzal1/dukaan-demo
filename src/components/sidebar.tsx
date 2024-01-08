export const Sidebar = () => {
  return (
    <div className="w-56 min-h-[882px] left-0 top-0 absolute flex-col justify-start items-start inline-flex">
      <div className="w-56 grow shrink basis-0 px-2.5 py-4 bg-slate-800 flex-col justify-start items-center gap-4 flex">
        <div className="w-52 grow shrink basis-0 flex-col justify-start items-center gap-6 flex">
          <div className="w-48 justify-start items-center gap-3 inline-flex">
            <img className="w-[39px] h-[39px] rounded" src="logo.png" />
            <div className="grow shrink basis-0 flex-col justify-center items-start gap-1 inline-flex">
              <div className="self-stretch text-white text-[15px] font-medium font-['Inter'] leading-snug">
                Nishyan
              </div>
              <div className="self-stretch opacity-80 text-white text-[13px] font-normal font-['Galano Grotesque'] underline leading-none">
                Visit store
              </div>
            </div>
            <img src="sidedown.svg" />
          </div>
          <div className="w-52 grow shrink basis-0 flex-col justify-start items-start gap-1 flex">
            <div className="w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex">
              <img src="homeicon.svg" className="w-5 h-5 relative opacity-80" />
              <div className="opacity-80 text-white text-sm font-medium font-['Inter'] leading-tight">
                Home
              </div>
            </div>
            <div className="w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex">
              <img
                src="ordericon.svg"
                className="w-5 h-5 relative opacity-80"
              />
              <div className="opacity-80 text-white text-sm font-medium font-['Inter'] leading-tight">
                Orders
              </div>
            </div>
            <div className="w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex">
              <img src="products.svg" className="w-5 h-5 relative opacity-80" />
              <div className="opacity-80 text-white text-sm font-medium font-['Inter'] leading-tight">
                Products
              </div>
            </div>
            <div className="w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex">
              <img src="delivery.svg" className="w-5 h-5 relative opacity-80" />
              <div className="opacity-80 text-white text-sm font-medium font-['Inter'] leading-tight">
                Delivery
              </div>
            </div>
            <div className="w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex">
              <img
                src="marketing.svg"
                className="w-5 h-5 relative opacity-80"
              />
              <div className="opacity-80 text-white text-sm font-medium font-['Inter'] leading-tight">
                Marketing
              </div>
            </div>
            <div className="w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex">
              <img
                src="analytics.svg"
                className="w-5 h-5 relative opacity-80"
              />
              <div className="opacity-80 text-white text-sm font-medium font-['Inter'] leading-tight">
                Analytics
              </div>
            </div>
            <div className="w-52 px-4 py-2 bg-white bg-opacity-10 rounded justify-start items-start gap-3 inline-flex">
              <img src="payouts.svg" className="w-5 h-5 relative" />
              <div className="text-white text-sm font-medium font-['Galano Grotesque'] leading-tight">
                Payouts
              </div>
            </div>
            <div className="w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex">
              <img
                src="discounts.svg"
                className="w-5 h-5 relative opacity-80"
              />
              <div className="opacity-80 text-white text-sm font-medium font-['Inter'] leading-tight">
                Discounts
              </div>
            </div>
            <div className="w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex">
              <img src="audience.svg" className="w-5 h-5 relative opacity-80" />
              <div className="opacity-80 text-white text-sm font-medium font-['Inter'] leading-tight">
                Audience
              </div>
            </div>
            <div className="w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex">
              <img
                src="appearance.svg"
                className="w-5 h-5 relative opacity-80"
              />
              <div className="opacity-80 text-white text-sm font-medium font-['Inter'] leading-tight">
                Appearance
              </div>
            </div>
            <div className="w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex">
              <img src="plugins.svg" className="w-5 h-5 relative opacity-80" />
              <div className="opacity-80 text-white text-sm font-medium font-['Inter'] leading-tight">
                Plugins
              </div>
            </div>
          </div>
        </div>
        <div className="h-[54px] px-3 py-1.5 bg-slate-700 rounded flex-col justify-start items-start gap-2.5 flex">
          <div className="justify-start items-center gap-3 inline-flex">
            <div className="p-1.5 bg-white bg-opacity-10 rounded justify-start items-start gap-2.5 flex">
              <div className="w-6 h-6 relative">
                <img
                  className="w-[23.65px] h-[19.60px] left-[0.20px] top-[2.20px] absolute"
                  src="credits.svg"
                />
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-0.5 inline-flex">
              <div className="opacity-80 text-white text-[13px] font-normal font-['Inter'] leading-none">
                Available credits
              </div>
              <div className="text-white text-base font-medium font-['Inter'] leading-normal">
                222.10
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

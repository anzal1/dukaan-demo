import React from "react";

export const Navbar = () => {
  return (
    <div className="w-[1216px] px-8 py-3 left-[224px] top-0 absolute bg-white border-b border-zinc-300 justify-start items-center gap-4 inline-flex">
      <div className="grow shrink basis-0 h-7 justify-start items-center gap-4 flex">
        <div className="justify-start items-center gap-4 flex">
          <div className="text-zinc-900 text-xl font-medium font-['Galano Grotesque'] leading-7">
            Payouts
          </div>
        </div>
        <div className="justify-start items-center gap-1.5 flex">
          <div className="w-3.5 h-3.5 relative" />
          <img src="navques.svg"/>
          <div className="text-neutral-600 text-xs font-normal font-['Galano Grotesque'] leading-none">
            How it works
          </div>
        </div>
      </div>
      <div className="w-[400px] self-stretch px-4 py-[9px] bg-zinc-100 rounded-md justify-start items-center gap-2 flex">
        <img src="search.svg" className="w-4 h-4" />
        <div className="text-zinc-500 text-[15px] font-normal font-['Galano Grotesque'] leading-snug">
          Search features, tutorials, etc.
        </div>
      </div>
      <div className="grow shrink basis-0 h-10 justify-end items-start gap-2 flex">
        <div className="justify-start items-start gap-3 flex">
          <div className="w-10 h-10 relative">
            <img src="navgroup.svg" />
          </div>
          <div className="w-10 h-10 relative">
            {/* <div className="w-10 h-10 left-0 top-0 absolute bg-neutral-200 rounded-full" />
             */}
            <img src="navdown.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

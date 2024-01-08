export const Frame = () => {
  return (
    <div className="h-[754px] left-[256px] top-[96px] absolute flex-col justify-start items-start gap-8 inline-flex">
      <div className="self-stretch h-[214px] flex-col justify-start items-start gap-6 flex">
        <div className="self-stretch justify-between items-center inline-flex">
          <div className="text-zinc-900 text-xl font-medium font-['Galano Grotesque'] leading-7">
            Overview
          </div>
          <div className="justify-start items-center gap-4 flex">
            <div className="w-[137px] h-9 relative">
              <div className="w-[137px] h-9 left-0 top-0 absolute bg-white rounded border border-zinc-300" />
              <div className="left-[14px] top-[6px] absolute text-neutral-600 text-base font-normal font-['Galano Grotesque'] leading-normal">
                This Month
              </div>
              <img
                src="framedown.svg"
                className="w-4 h-4 left-[107px] top-[10px] absolute"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch justify-start items-start gap-5 inline-flex">
          <div className="grow shrink basis-0 shadow flex-col justify-center items-center inline-flex">
            <div className="self-stretch h-[154px] p-5 bg-sky-700 rounded-lg flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch h-[78px] flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="justify-start items-center gap-2 flex">
                    <div className="text-white text-base font-normal font-['Inter'] leading-normal">
                      Next Payout
                    </div>
                    <img src="navqueswhite.svg" />
                  </div>
                </div>
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-white text-[32px] font-medium font-['Galano Grotesque'] leading-[38px]">
                    ₹2,312.23
                  </div>
                  <div className="justify-start items-center flex">
                    <div className="justify-start items-start gap-2 flex">
                      <div className="text-white text-base font-medium font-['Galano Grotesque'] underline leading-normal">
                        23 orders
                      </div>
                    </div>
                    <div className="w-6 h-6 relative" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[370.67px] absolute px-6 py-2 bg-sky-800 rounded-lg justify-between items-start inline-flex top-1/4">
              <div className="text-zinc-100 text-sm font-normal font-['Galano Grotesque'] leading-tight">
                Next payout date:
              </div>
              <div className="text-zinc-100 text-sm font-medium font-['Galano Grotesque'] leading-tight">
                Today, 04:00PM
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 h-[118px] justify-center items-center gap-6 flex">
            <div className="grow shrink basis-0 p-5 bg-white rounded-lg shadow flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch h-[78px] flex-col justify-start items-start gap-4 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="text-neutral-600 text-base font-normal font-['Inter'] leading-normal">
                    Amount Pending
                  </div>
                  <img src="navques.svg" />
                </div>
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-zinc-900 text-[32px] font-medium font-['Galano Grotesque'] leading-[38px]">
                    ₹92,312.20
                  </div>
                  <div className="justify-start items-center flex">
                    <div className="justify-start items-start gap-2 flex">
                      <div className="text-sky-700 text-base font-medium font-['Galano Grotesque'] underline leading-normal">
                        13 orders
                      </div>
                    </div>
                    <div className="w-6 h-6 relative" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 h-[118px] justify-center items-center gap-6 flex">
            <div className="grow shrink basis-0 p-5 bg-white rounded-lg shadow flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch h-[78px] flex-col justify-start items-start gap-4 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="text-neutral-600 text-base font-normal font-['Inter'] leading-normal">
                    Amount Processed
                  </div>
                  <img src="navques.svg" />
                </div>
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="grow shrink basis-0 h-[38px] justify-between items-center flex">
                    <div className="text-zinc-900 text-[32px] font-medium font-['Galano Grotesque'] leading-[38px]">
                      ₹23,92,312.19
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col justify-start items-start gap-6 flex">
        <div className="flex-col justify-start items-start gap-6 flex">
          <div className="text-zinc-900 text-xl font-medium font-['Galano Grotesque'] leading-7">
            Transactions | This Month
          </div>
          <div className="justify-start items-start gap-3 inline-flex">
            <div className="px-4 py-1.5 bg-neutral-200 rounded-[40px] justify-start items-center gap-2.5 flex">
              <div className="text-zinc-500 text-sm font-medium font-['Inter'] leading-tight">
                Payouts (22)
              </div>
            </div>
            <div className="px-4 py-1.5 bg-sky-700 rounded-[40px] justify-start items-center gap-1.5 flex">
              <div className="text-white text-sm font-medium font-['Inter'] leading-tight">
                Refunds (6)
              </div>
            </div>
          </div>
        </div>
        <div className="h-[400px] px-3 pt-3 pb-2 bg-white rounded-lg shadow flex-col justify-start items-end flex">
          <div className="flex-col justify-start items-end gap-3 flex">
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="h-10 justify-start items-start flex">
                <div className="grow shrink basis-0 h-10 px-4 py-2.5 bg-white rounded border border-zinc-300 justify-start items-center gap-2 flex">
                  <img src="search.svg" className="w-3.5 h-3.5 relative" />
                  <div className="grow shrink basis-0 text-neutral-400 text-sm font-normal font-['Galano Grotesque'] leading-tight">
                    Order ID or transaction ID
                  </div>
                </div>
              </div>
              <div className="justify-start items-center gap-3 flex">
                <div className="justify-end items-center gap-4 flex">
                  <div className="justify-start items-center gap-3 flex">
                    <div className="px-3 py-1.5 bg-white rounded border border-zinc-300 justify-start items-center gap-1.5 flex">
                      <div className="text-neutral-600 text-base font-normal font-['Inter'] leading-normal">
                        Sort
                      </div>
                      <img src='sort.svg' className="w-4 h-4 relative" />
                    </div>
                  </div>
                  <div className="w-9 h-9 relative">
                    <div className="w-9 h-9 left-0 top-0 absolute rounded border border-zinc-300" />
                    <img src='download.svg' className="w-5 h-5 left-[8px] top-[8px] absolute" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[1128px] px-3 py-2.5 bg-zinc-100 rounded justify-between items-center inline-flex">
              <div className="w-[150.67px] flex-col justify-center items-start inline-flex">
                <div className="justify-start items-center gap-1 inline-flex">
                  <div className="justify-start items-center gap-4 flex">
                    <div className="justify-start items-center gap-3 flex">
                      <div className="flex-col justify-center items-start gap-0.5 inline-flex">
                        <div className="justify-start items-center gap-2 inline-flex">
                          <div className="justify-start items-center gap-1 flex">
                            <div className="text-neutral-600 text-sm font-medium font-['Galano Grotesque'] leading-tight">
                              Order ID
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-0 justify-start items-start gap-[90px] inline-flex">
                  <div className="w-[0px] h-[0px] rounded-full" />
                  <div className="w-[0px] h-[0px] rounded-full" />
                </div>
              </div>
              <div className="w-[150.67px] flex-col justify-center items-start inline-flex">
                <div className="justify-start items-center gap-1 inline-flex">
                  <div className="justify-start items-center gap-4 flex">
                    <div className="justify-start items-center gap-3 flex">
                      <div className="flex-col justify-center items-start gap-0.5 inline-flex">
                        <div className="justify-start items-center gap-2 inline-flex">
                          <div className="justify-start items-center gap-1 flex">
                            <div className="text-right text-neutral-600 text-sm font-medium font-['Galano Grotesque'] leading-tight">
                              Status
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-0 justify-start items-start gap-[90px] inline-flex">
                  <div className="w-[0px] h-[0px] rounded-full" />
                  <div className="w-[0px] h-[0px] rounded-full" />
                </div>
              </div>
              <div className="w-[150.67px] flex-col justify-center items-start inline-flex">
                <div className="justify-start items-center gap-1 inline-flex">
                  <div className="justify-start items-center gap-4 flex">
                    <div className="justify-start items-center gap-3 flex">
                      <div className="flex-col justify-center items-start gap-0.5 inline-flex">
                        <div className="justify-start items-center gap-2 inline-flex">
                          <div className="justify-start items-center gap-1 flex">
                            <div className="text-right text-neutral-600 text-sm font-medium font-['Galano Grotesque'] leading-tight">
                              Transaction ID
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-0 justify-start items-start gap-[90px] inline-flex">
                  <div className="w-[0px] h-[0px] rounded-full" />
                  <div className="w-[0px] h-[0px] rounded-full" />
                </div>
              </div>
              <div className="w-[150.67px] flex-col justify-center items-start inline-flex">
                <div className="justify-start items-center gap-1 inline-flex">
                  <div className="justify-start items-center gap-4 flex">
                    <div className="justify-start items-center gap-3 flex">
                      <div className="flex-col justify-center items-start gap-0.5 inline-flex">
                        <div className="justify-start items-center gap-2 inline-flex">
                          <div className="justify-start items-center gap-1 flex">
                            <div className="text-neutral-600 text-sm font-medium font-['Galano Grotesque'] leading-tight">
                              Refund date
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-0 justify-start items-start gap-[90px] inline-flex">
                  <div className="w-[0px] h-[0px] rounded-full" />
                  <div className="w-[0px] h-[0px] rounded-full" />
                </div>
              </div>
              <div className="w-[150.67px] flex-col justify-center items-end inline-flex">
                <div className="justify-start items-center gap-1 inline-flex">
                  <div className="justify-start items-center gap-4 flex">
                    <div className="justify-start items-center gap-3 flex">
                      <div className="flex-col justify-center items-start gap-0.5 inline-flex">
                        <div className="justify-start items-center gap-2 inline-flex">
                          <div className="justify-start items-center gap-1 flex">
                            <div className="text-right text-neutral-600 text-sm font-medium font-['Galano Grotesque'] leading-tight">
                              Order amount
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-0 justify-start items-start gap-[90px] inline-flex">
                  <div className="w-[0px] h-[0px] rounded-full" />
                  <div className="w-[0px] h-[0px] rounded-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1128px] h-12 px-3 py-3.5 bg-white justify-between items-center inline-flex">
            <div className="w-[150.67px] bg-white flex-col justify-center items-start inline-flex">
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="justify-start items-center gap-3 flex">
                  <div className="flex-col justify-center items-start gap-0.5 inline-flex">
                    <div className="justify-start items-center gap-2 inline-flex">
                      <div className="text-sky-700 text-sm font-medium font-['Galano Grotesque'] leading-tight">
                        #281209
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-0 justify-start items-start gap-[376px] inline-flex">
                <div className="w-[0px] h-[0px] rounded-full" />
                <div className="w-[0px] h-[0px] rounded-full" />
              </div>
            </div>

            <div className="w-[150.67px] bg-white flex-col justify-center items-start inline-flex">
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="justify-start items-center gap-1.5 flex">
                  <div className="w-2.5 h-2.5 bg-green-600 rounded-full" />
                  <div className="text-zinc-900 text-sm font-normal font-['Inter'] leading-tight">
                    Successful
                  </div>
                </div>
              </div>
              <div className="opacity-0 justify-start items-start gap-[120px] inline-flex">
                <div className="w-[0px] h-[0px] rounded-full" />
                <div className="w-[0px] h-[0px] rounded-full" />
              </div>
            </div>
            <div className="w-[150.67px] bg-white flex-col justify-center items-start inline-flex">
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="justify-start items-center gap-3 flex">
                  <div className="flex-col justify-center items-start gap-0.5 inline-flex">
                    <div className="justify-start items-center gap-2 inline-flex">
                      <div className="justify-start items-center gap-1 flex">
                        <div className="text-neutral-600 text-sm font-normal font-['Galano Grotesque'] leading-tight">
                          131634495747
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-0 justify-start items-start gap-[90px] inline-flex">
                <div className="w-[0px] h-[0px] rounded-full" />
                <div className="w-[0px] h-[0px] rounded-full" />
              </div>
            </div>
            <div className="w-[150.67px] bg-white flex-col justify-center items-start inline-flex">
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="justify-start items-center gap-3 flex">
                  <div className="flex-col justify-center items-start gap-0.5 inline-flex">
                    <div className="justify-start items-center gap-2 inline-flex">
                      <div className="justify-start items-center gap-1 flex">
                        <div className="text-neutral-600 text-sm font-normal font-['Galano Grotesque'] leading-tight">
                          Today, 08:45 PM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-0 justify-start items-start gap-[90px] inline-flex">
                <div className="w-[0px] h-[0px] rounded-full" />
                <div className="w-[0px] h-[0px] rounded-full" />
              </div>
            </div>
            <div className="w-[150.67px] bg-white flex-col justify-center items-end inline-flex">
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="justify-start items-center gap-3 flex">
                  <div className="flex-col justify-center items-start gap-0.5 inline-flex">
                    <div className="justify-start items-center gap-2 inline-flex">
                      <div className="justify-start items-center gap-1 flex">
                        <div className="text-right text-zinc-900 text-sm font-normal font-['Galano Grotesque'] leading-tight">
                          ₹1,125.00
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-0 justify-start items-start gap-[90px] inline-flex">
                <div className="w-[0px] h-[0px] rounded-full" />
                <div className="w-[0px] h-[0px] rounded-full" />
              </div>
            </div>
          </div>
          <div className="w-[1104px] h-[0px] justify-center items-center flex">
            <div className="w-[1104px] h-[0px] border border-neutral-200"></div>
          </div>
          <div className="w-[1128px] h-12 px-3 py-3.5 bg-white justify-between items-center inline-flex">
            <div className="w-[150.67px] bg-white flex-col justify-center items-start inline-flex">
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="justify-start items-center gap-3 flex">
                  <div className="flex-col justify-center items-start gap-0.5 inline-flex">
                    <div className="justify-start items-center gap-2 inline-flex">
                      <div className="text-sky-700 text-sm font-medium font-['Galano Grotesque'] leading-tight">
                        #281208
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-0 justify-start items-start gap-[376px] inline-flex">
                <div className="w-[0px] h-[0px] rounded-full" />
                <div className="w-[0px] h-[0px] rounded-full" />
              </div>
            </div>

            <div className="w-[150.67px] bg-white flex-col justify-center items-start inline-flex">
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="justify-start items-center gap-1.5 flex">
                  <div className="w-2.5 h-2.5 bg-neutral-400 rounded-full" />
                  <div className="text-zinc-900 text-sm font-normal font-['Inter'] leading-tight">
                    Processing
                  </div>
                </div>
              </div>
              <div className="opacity-0 justify-start items-start gap-[120px] inline-flex">
                <div className="w-[0px] h-[0px] rounded-full" />
                <div className="w-[0px] h-[0px] rounded-full" />
              </div>
            </div>
            <div className="w-[150.67px] bg-white flex-col justify-center items-start inline-flex">
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="justify-start items-center gap-3 flex">
                  <div className="flex-col justify-center items-start gap-0.5 inline-flex">
                    <div className="justify-start items-center gap-2 inline-flex">
                      <div className="justify-start items-center gap-1 flex">
                        <div className="text-neutral-600 text-sm font-normal font-['Galano Grotesque'] leading-tight">
                          131634495747
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-0 justify-start items-start gap-[90px] inline-flex">
                <div className="w-[0px] h-[0px] rounded-full" />
                <div className="w-[0px] h-[0px] rounded-full" />
              </div>
            </div>
            <div className="w-[150.67px] bg-white flex-col justify-center items-start inline-flex">
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="justify-start items-center gap-3 flex">
                  <div className="flex-col justify-center items-start gap-0.5 inline-flex">
                    <div className="justify-start items-center gap-2 inline-flex">
                      <div className="justify-start items-center gap-1 flex">
                        <div className="text-neutral-600 text-sm font-normal font-['Galano Grotesque'] leading-tight">
                          Yesterday, 3:00 PM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-0 justify-start items-start gap-[90px] inline-flex">
                <div className="w-[0px] h-[0px] rounded-full" />
                <div className="w-[0px] h-[0px] rounded-full" />
              </div>
            </div>
            <div className="w-[150.67px] bg-white flex-col justify-center items-end inline-flex">
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="justify-start items-center gap-3 flex">
                  <div className="flex-col justify-center items-start gap-0.5 inline-flex">
                    <div className="justify-start items-center gap-2 inline-flex">
                      <div className="justify-start items-center gap-1 flex">
                        <div className="text-right text-zinc-900 text-sm font-normal font-['Galano Grotesque'] leading-tight">
                          ₹1,125.00
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-0 justify-start items-start gap-[90px] inline-flex">
                <div className="w-[0px] h-[0px] rounded-full" />
                <div className="w-[0px] h-[0px] rounded-full" />
              </div>
            </div>
          </div>
          <div className="w-[1104px] h-[0px] justify-center items-center flex">
            <div className="w-[1104px] h-[0px] border border-neutral-200"></div>
          </div>
          <div className="w-[1128px] h-12 px-3 py-3.5 bg-white justify-between items-center inline-flex">
            <div className="w-[150.67px] bg-white flex-col justify-center items-start inline-flex">
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="justify-start items-center gap-3 flex">
                  <div className="flex-col justify-center items-start gap-0.5 inline-flex">
                    <div className="justify-start items-center gap-2 inline-flex">
                      <div className="text-sky-700 text-sm font-medium font-['Galano Grotesque'] leading-tight">
                        #281207
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-0 justify-start items-start gap-[376px] inline-flex">
                <div className="w-[0px] h-[0px] rounded-full" />
                <div className="w-[0px] h-[0px] rounded-full" />
              </div>
            </div>

            <div className="w-[150.67px] bg-white flex-col justify-center items-start inline-flex">
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="justify-start items-center gap-1.5 flex">
                  <div className="w-2.5 h-2.5 bg-green-600 rounded-full" />
                  <div className="text-zinc-900 text-sm font-normal font-['Inter'] leading-tight">
                    Successful
                  </div>
                </div>
              </div>
              <div className="opacity-0 justify-start items-start gap-[120px] inline-flex">
                <div className="w-[0px] h-[0px] rounded-full" />
                <div className="w-[0px] h-[0px] rounded-full" />
              </div>
            </div>
            <div className="w-[150.67px] bg-white flex-col justify-center items-start inline-flex">
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="justify-start items-center gap-3 flex">
                  <div className="flex-col justify-center items-start gap-0.5 inline-flex">
                    <div className="justify-start items-center gap-2 inline-flex">
                      <div className="justify-start items-center gap-1 flex">
                        <div className="text-neutral-600 text-sm font-normal font-['Galano Grotesque'] leading-tight">
                          131634495747
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-0 justify-start items-start gap-[90px] inline-flex">
                <div className="w-[0px] h-[0px] rounded-full" />
                <div className="w-[0px] h-[0px] rounded-full" />
              </div>
            </div>
            <div className="w-[150.67px] bg-white flex-col justify-center items-start inline-flex">
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="justify-start items-center gap-3 flex">
                  <div className="flex-col justify-center items-start gap-0.5 inline-flex">
                    <div className="justify-start items-center gap-2 inline-flex">
                      <div className="justify-start items-center gap-1 flex">
                        <div className="text-neutral-600 text-sm font-normal font-['Galano Grotesque'] leading-tight">
                          12 Jul 2023, 03:00 PM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-0 justify-start items-start gap-[90px] inline-flex">
                <div className="w-[0px] h-[0px] rounded-full" />
                <div className="w-[0px] h-[0px] rounded-full" />
              </div>
            </div>
            <div className="w-[150.67px] bg-white flex-col justify-center items-end inline-flex">
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="justify-start items-center gap-3 flex">
                  <div className="flex-col justify-center items-start gap-0.5 inline-flex">
                    <div className="justify-start items-center gap-2 inline-flex">
                      <div className="justify-start items-center gap-1 flex">
                        <div className="text-right text-zinc-900 text-sm font-normal font-['Galano Grotesque'] leading-tight">
                          ₹1,125.00
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-0 justify-start items-start gap-[90px] inline-flex">
                <div className="w-[0px] h-[0px] rounded-full" />
                <div className="w-[0px] h-[0px] rounded-full" />
              </div>
            </div>
          </div>
          <div className="w-[1104px] h-[0px] justify-center items-center flex">
            <div className="w-[1104px] h-[0px] border border-neutral-200"></div>
          </div>
          <div className="w-[1128px] h-12 px-3 py-3.5 bg-white justify-between items-center inline-flex">
            <div className="w-[150.67px] bg-white flex-col justify-center items-start inline-flex">
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="justify-start items-center gap-3 flex">
                  <div className="flex-col justify-center items-start gap-0.5 inline-flex">
                    <div className="justify-start items-center gap-2 inline-flex">
                      <div className="text-sky-700 text-sm font-medium font-['Galano Grotesque'] leading-tight">
                        #281206
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-0 justify-start items-start gap-[376px] inline-flex">
                <div className="w-[0px] h-[0px] rounded-full" />
                <div className="w-[0px] h-[0px] rounded-full" />
              </div>
            </div>

            <div className="w-[150.67px] bg-white flex-col justify-center items-start inline-flex">
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="justify-start items-center gap-1.5 flex">
                  <div className="w-2.5 h-2.5 bg-green-600 rounded-full" />
                  <div className="text-zinc-900 text-sm font-normal font-['Inter'] leading-tight">
                    Successful
                  </div>
                </div>
              </div>
              <div className="opacity-0 justify-start items-start gap-[120px] inline-flex">
                <div className="w-[0px] h-[0px] rounded-full" />
                <div className="w-[0px] h-[0px] rounded-full" />
              </div>
            </div>
            <div className="w-[150.67px] bg-white flex-col justify-center items-start inline-flex">
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="justify-start items-center gap-3 flex">
                  <div className="flex-col justify-center items-start gap-0.5 inline-flex">
                    <div className="justify-start items-center gap-2 inline-flex">
                      <div className="justify-start items-center gap-1 flex">
                        <div className="text-neutral-600 text-sm font-normal font-['Galano Grotesque'] leading-tight">
                          131634495747
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-0 justify-start items-start gap-[90px] inline-flex">
                <div className="w-[0px] h-[0px] rounded-full" />
                <div className="w-[0px] h-[0px] rounded-full" />
              </div>
            </div>
            <div className="w-[150.67px] bg-white flex-col justify-center items-start inline-flex">
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="justify-start items-center gap-3 flex">
                  <div className="flex-col justify-center items-start gap-0.5 inline-flex">
                    <div className="justify-start items-center gap-2 inline-flex">
                      <div className="justify-start items-center gap-1 flex">
                        <div className="text-neutral-600 text-sm font-normal font-['Galano Grotesque'] leading-tight">
                          12 Jul 2023, 03:00 PM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-0 justify-start items-start gap-[90px] inline-flex">
                <div className="w-[0px] h-[0px] rounded-full" />
                <div className="w-[0px] h-[0px] rounded-full" />
              </div>
            </div>
            <div className="w-[150.67px] bg-white flex-col justify-center items-end inline-flex">
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="justify-start items-center gap-3 flex">
                  <div className="flex-col justify-center items-start gap-0.5 inline-flex">
                    <div className="justify-start items-center gap-2 inline-flex">
                      <div className="justify-start items-center gap-1 flex">
                        <div className="text-right text-zinc-900 text-sm font-normal font-['Galano Grotesque'] leading-tight">
                          ₹1,125.00
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-0 justify-start items-start gap-[90px] inline-flex">
                <div className="w-[0px] h-[0px] rounded-full" />
                <div className="w-[0px] h-[0px] rounded-full" />
              </div>
            </div>
          </div>
          <div className="w-[1104px] h-[0px] justify-center items-center flex">
            <div className="w-[1104px] h-[0px] border border-neutral-200"></div>
          </div>
          <div className="w-[1128px] h-12 px-3 py-3.5 bg-white justify-between items-center inline-flex">
            <div className="w-[150.67px] bg-white flex-col justify-center items-start inline-flex">
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="justify-start items-center gap-3 flex">
                  <div className="flex-col justify-center items-start gap-0.5 inline-flex">
                    <div className="justify-start items-center gap-2 inline-flex">
                      <div className="text-sky-700 text-sm font-medium font-['Galano Grotesque'] leading-tight">
                        #281205
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-0 justify-start items-start gap-[376px] inline-flex">
                <div className="w-[0px] h-[0px] rounded-full" />
                <div className="w-[0px] h-[0px] rounded-full" />
              </div>
            </div>

            <div className="w-[150.67px] bg-white flex-col justify-center items-start inline-flex">
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="justify-start items-center gap-1.5 flex">
                  <div className="w-2.5 h-2.5 bg-green-600 rounded-full" />
                  <div className="text-zinc-900 text-sm font-normal font-['Inter'] leading-tight">
                    Successful
                  </div>
                </div>
              </div>
              <div className="opacity-0 justify-start items-start gap-[120px] inline-flex">
                <div className="w-[0px] h-[0px] rounded-full" />
                <div className="w-[0px] h-[0px] rounded-full" />
              </div>
            </div>
            <div className="w-[150.67px] bg-white flex-col justify-center items-start inline-flex">
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="justify-start items-center gap-3 flex">
                  <div className="flex-col justify-center items-start gap-0.5 inline-flex">
                    <div className="justify-start items-center gap-2 inline-flex">
                      <div className="justify-start items-center gap-1 flex">
                        <div className="text-neutral-600 text-sm font-normal font-['Galano Grotesque'] leading-tight">
                          131634495747
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-0 justify-start items-start gap-[90px] inline-flex">
                <div className="w-[0px] h-[0px] rounded-full" />
                <div className="w-[0px] h-[0px] rounded-full" />
              </div>
            </div>
            <div className="w-[150.67px] bg-white flex-col justify-center items-start inline-flex">
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="justify-start items-center gap-3 flex">
                  <div className="flex-col justify-center items-start gap-0.5 inline-flex">
                    <div className="justify-start items-center gap-2 inline-flex">
                      <div className="justify-start items-center gap-1 flex">
                        <div className="text-neutral-600 text-sm font-normal font-['Galano Grotesque'] leading-tight">
                          12 Jul 2023, 03:00 PM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-0 justify-start items-start gap-[90px] inline-flex">
                <div className="w-[0px] h-[0px] rounded-full" />
                <div className="w-[0px] h-[0px] rounded-full" />
              </div>
            </div>
            <div className="w-[150.67px] bg-white flex-col justify-center items-end inline-flex">
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="justify-start items-center gap-3 flex">
                  <div className="flex-col justify-center items-start gap-0.5 inline-flex">
                    <div className="justify-start items-center gap-2 inline-flex">
                      <div className="justify-start items-center gap-1 flex">
                        <div className="text-right text-zinc-900 text-sm font-normal font-['Galano Grotesque'] leading-tight">
                          ₹1,125.00
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-0 justify-start items-start gap-[90px] inline-flex">
                <div className="w-[0px] h-[0px] rounded-full" />
                <div className="w-[0px] h-[0px] rounded-full" />
              </div>
            </div>
          </div>
          <div className="w-[1104px] h-[0px] justify-center items-center flex">
            <div className="w-[1104px] h-[0px] border border-neutral-200"></div>
          </div>
          <div className="w-[1128px] h-12 px-3 py-3.5 bg-white justify-between items-center inline-flex">
            <div className="w-[150.67px] bg-white flex-col justify-center items-start inline-flex">
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="justify-start items-center gap-3 flex">
                  <div className="flex-col justify-center items-start gap-0.5 inline-flex">
                    <div className="justify-start items-center gap-2 inline-flex">
                      <div className="text-sky-700 text-sm font-medium font-['Galano Grotesque'] leading-tight">
                        #281204
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-0 justify-start items-start gap-[376px] inline-flex">
                <div className="w-[0px] h-[0px] rounded-full" />
                <div className="w-[0px] h-[0px] rounded-full" />
              </div>
            </div>

            <div className="w-[150.67px] bg-white flex-col justify-center items-start inline-flex">
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="justify-start items-center gap-1.5 flex">
                  <div className="w-2.5 h-2.5 bg-green-600 rounded-full" />
                  <div className="text-zinc-900 text-sm font-normal font-['Inter'] leading-tight">
                    Successful
                  </div>
                </div>
              </div>
              <div className="opacity-0 justify-start items-start gap-[120px] inline-flex">
                <div className="w-[0px] h-[0px] rounded-full" />
                <div className="w-[0px] h-[0px] rounded-full" />
              </div>
            </div>
            <div className="w-[150.67px] bg-white flex-col justify-center items-start inline-flex">
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="justify-start items-center gap-3 flex">
                  <div className="flex-col justify-center items-start gap-0.5 inline-flex">
                    <div className="justify-start items-center gap-2 inline-flex">
                      <div className="justify-start items-center gap-1 flex">
                        <div className="text-neutral-600 text-sm font-normal font-['Galano Grotesque'] leading-tight">
                          131634495747
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-0 justify-start items-start gap-[90px] inline-flex">
                <div className="w-[0px] h-[0px] rounded-full" />
                <div className="w-[0px] h-[0px] rounded-full" />
              </div>
            </div>
            <div className="w-[150.67px] bg-white flex-col justify-center items-start inline-flex">
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="justify-start items-center gap-3 flex">
                  <div className="flex-col justify-center items-start gap-0.5 inline-flex">
                    <div className="justify-start items-center gap-2 inline-flex">
                      <div className="justify-start items-center gap-1 flex">
                        <div className="text-neutral-600 text-sm font-normal font-['Galano Grotesque'] leading-tight">
                          12 Jul 2023, 03:00 PM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-0 justify-start items-start gap-[90px] inline-flex">
                <div className="w-[0px] h-[0px] rounded-full" />
                <div className="w-[0px] h-[0px] rounded-full" />
              </div>
            </div>
            <div className="w-[150.67px] bg-white flex-col justify-center items-end inline-flex">
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="justify-start items-center gap-3 flex">
                  <div className="flex-col justify-center items-start gap-0.5 inline-flex">
                    <div className="justify-start items-center gap-2 inline-flex">
                      <div className="justify-start items-center gap-1 flex">
                        <div className="text-right text-zinc-900 text-sm font-normal font-['Galano Grotesque'] leading-tight">
                          ₹1,125.00
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-0 justify-start items-start gap-[90px] inline-flex">
                <div className="w-[0px] h-[0px] rounded-full" />
                <div className="w-[0px] h-[0px] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import { faBiohazard, faHouseFloodWater, faSunPlantWilt, faTornado, faVolcano, faWheatAwnCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image"
import { FaLongArrowAltRight } from "react-icons/fa";

const Services = ()  =>{
  return(
    <div className="flex flex-col items-stretch px-5">
      <div className="text-center  font-bold leading-[61.88px]  self-center max-md:max-w-full max-md:text-4xl">
       <h1> Latest earth services</h1>
      </div>
      <div className="text-zinc-600 text-center text-base leading-7 self-center max-w-[594px] mt-8 max-md:max-w-full">
        Integer vehicula diam et sollicitudin scelerisque. Vestibulum
        pellentesque bibendum magna, et bibendum turpis lacinia id. Praesent
        egestas tincidunt risus.
      </div>
      <div className="w-full mt-14 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[36%] max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col max-md:mt-10">
            <FontAwesomeIcon icon={faSunPlantWilt}  height={200} className="aspect-[1.11] object-contain object-center w-[88px] overflow-hidden self-center max-w-full"/>
              <div className="text-zinc-600 text-center text-base leading-7 self-center whitespace-nowrap mt-7">
                Earth Service 1
              </div>
              <div className=" text-center text-2xl font-medium leading-9 capitalize self-stretch mt-4">
               Find out more here,
              </div>
              <div className="self-center flex items-center gap-2 mt-8">
              <FaLongArrowAltRight />

                <div className="text-zinc-600 text-base leading-7 self-stretch">
                  Read More
                </div>
              </div>

              <FontAwesomeIcon icon={faVolcano}  width={300} height={200} className="aspect-[1.11] object-contain object-center w-[88px] overflow-hidden self-center max-w-full"/>
              <div className="text-zinc-600 text-center text-base leading-7 self-center whitespace-nowrap mt-7">
              Earth Service 2
              </div>
              <div className="text-zinc-900 text-center text-2xl font-medium leading-9 capitalize self-stretch mt-4">
              Find out more here,
              </div>
              <div className="self-center flex items-center gap-2 mt-8">
              <FaLongArrowAltRight />

                <div className="text-zinc-600 text-base leading-7 self-stretch">
                  Read More
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col max-md:mt-10">
            <FontAwesomeIcon icon={faTornado}  width={300} height={200} className="aspect-[1.11] object-contain object-center w-[88px] overflow-hidden self-center max-w-full"/> 
              <div className="text-zinc-600 text-center text-base leading-7 self-center whitespace-nowrap mt-7">
              Earth Service 3
              </div>
              <div className="text-zinc-900 text-center text-2xl font-medium leading-9 capitalize self-stretch mt-4">
              Find out more here,
              </div>
              <div className="self-center flex items-center gap-2 mt-8">
              <FaLongArrowAltRight />

                <div className="text-zinc-600 text-base leading-7 self-stretch">
                  Read More
                </div>
              </div>
              <FontAwesomeIcon icon={faWheatAwnCircleExclamation}  width={300} height={200} className="aspect-[1.11] object-contain object-center w-[88px] overflow-hidden self-center max-w-full"/>
              <div className="text-zinc-600 text-center text-base leading-7 self-center whitespace-nowrap mt-7">
              Earth Service 4
              </div>
              <div className="text-zinc-900 text-center text-2xl font-medium leading-9 capitalize self-stretch mt-4">
              Find out more here,
              </div>
              <div className="self-center flex items-center gap-2 mt-8">
              <FaLongArrowAltRight />

                <div className="text-zinc-600 text-base leading-7 self-stretch">
                  Read More
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[31%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col max-md:mt-10">
            <FontAwesomeIcon icon={faHouseFloodWater}  width={300} height={200} className="aspect-[1.11] object-contain object-center w-[88px] overflow-hidden self-center max-w-full"/>
              <div className="text-zinc-600 text-center text-base leading-7 self-center whitespace-nowrap mt-7">
              Earth Service 5
              </div>
              <div className="text-zinc-900 text-center text-2xl font-medium leading-9 capitalize self-stretch mt-4">
              Find out more here,
              </div>
              <div className="self-center flex items-center gap-2 mt-8">
              <FaLongArrowAltRight />
                <div className="text-zinc-600 text-base leading-7 self-stretch">
                  Read More
                </div>
              </div>
              <FontAwesomeIcon icon={faBiohazard}  width={300} height={200} className="aspect-[1.11] object-contain object-center w-[88px] overflow-hidden self-center max-w-full"/>
              <div className="text-zinc-600 text-center text-base leading-7 self-center whitespace-nowrap mt-7">
              Earth Service 6
              </div>
              <div className="text-zinc-900 text-center text-2xl font-medium leading-9 capitalize self-stretch mt-4">
              Find out more here,
              </div>
              <div className="self-center flex items-center gap-2 mt-8">
              <FaLongArrowAltRight />
                <div className="text-zinc-600 text-base leading-7 self-stretch">
                  Read More
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Services


import  { FC } from "react";
import VectorImg from "../images/VectorHIW.svg";
import Img1 from "../images/connect.svg";
import Img2 from "../images/find.svg";
import Img3 from "../images/bet.svg";
import Img4 from "../images/winner.svg";

export interface TimelineProps {
  className?: string;
  data?: typeof DEMO_DATA[0][];
}
const DEMO_DATA = [
  {
  id: 1,
  img:  Img1,
  imgDark:  Img1,
  title: "Whitelist Cutoff",
    desc: "Sign ups for early investor exclusive promotions close shortly before the protocol launch  ",
  date: "Dec 10"
},
{
  id: 2,
  img:  Img2,
  imgDark:  Img2,
  title: "Limited Token Launch",
  desc: "Penthouse auctions its limited number of tokens to raise money for early protocol growth",
  date: "Dec 12"
  },
  {
    id: 3,
    img: Img3,
    imgDark: Img3,
    title: "Real Estate Flash Sale",
    desc: "Co-invest in high return holiday rental properties at a discount by the 14th, or at your leisure at any time.",
    date: "Dec 14"
  },
  {
    id: 4,
    img: Img4,
    imgDark:" WinnerDark,",
    title: "High Yield Passive Income",
    desc: "Gain the benefits of being a home-owner, while Penthouse manages everything for you, from tenants to handling repairs.",
  },
]
const Timeline: FC<TimelineProps> = ({
  className = "bg-primary dark:bg-bdark m-5 rounded-3xl pt-9 px-2",
  data = DEMO_DATA,
}) => {
  return (
      <div
      className={`nc-SectionHowItWork  ${className}`}
      data-nc-id="SectionHowItWork"
    >
      <div className="relative  grid sm:grid-cols-2 lg:grid-cols-4  gap-6 items-start justify-center ">
      <img
          className="lg:block md:hidden absolute -top-3 mobile:hidden sm:hidden   object-cover w-full"
          src={VectorImg}
          alt="vector"
        />
        {
          data.map((item: typeof DEMO_DATA[number], index: number) => (
            <div
            key={item.id}
            className="relative flex flex-col items-center gap-5 mx-auto"
            >
              <div className="mb-5 sm:mb-10 lg:mb-20 max-w-[100px] mx-auto">
                <img src={item.img} alt={item.title} /></div>
              <span className="nc-Badge inline-flex px-2.5 py-1 mb-4 rounded-full text-black font-medium text-xs bg-yellow-100">{`Step: ${item.id}` }</span>
              <div className="text-center mb-8">
                <h3 className="text-lg font-semibold  dark:text-yellow-100">{item.title}</h3>
                <p className="text-neutral-500 dark:text-gray-300">
                {item.desc}
                </p>
                <p className="text-gray-600 dark:text-yellow-100 mt-5 ">
                {item.date}
                </p>
                
              </div>
             
          </div>
          ))
        }
       </div>

    </div>
  
)
 }


export default Timeline;

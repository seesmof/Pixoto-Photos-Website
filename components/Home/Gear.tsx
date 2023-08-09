import Image from "next/image";
import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const GearItem = ({ name }: { name: string }) => {
  return (
    <div className="flex flex-row font-medium gap-2 text-lg items-center">
      <AiOutlineCheckCircle className="text-3xl stroke-[1]" />
      {name}
    </div>
  );
};

const Gear = () => {
  const GearData = [
    "Canon EOS R5",
    "Sony Alpha 7R IV",
    "Nikon Z7 II",
    "Fujifilm X-T4",
    "Panasonic Lumix S1R",
    "Leica Q2",
  ];

  return (
    <>
      <div className="flex py-10 flex-col p-4">
        <div className="flex flex-row gap-4">
          <Image
            src="/mainGearOne.jpg"
            alt="my photo camera"
            className="row-span-full flex-1 rounded-full object-cover object-center"
            width={999}
            height={999}
          />
          <div className="grid grid-rows-3 w-[40%] gap-4">
            <Image
              src="/mainGearTwo.jpg"
              alt="my photo camera"
              className="row-span-1 rounded-t-full rounded-br-full object-cover object-center"
              width={999}
              height={999}
            />
            <Image
              src="/mainGearThree.jpg"
              alt="my photo camera"
              className="row-span-1 rounded-b-full object-cover object-center"
              width={999}
              height={999}
            />
          </div>
        </div>
        <div className="flex flex-col pt-10">
          <h3 className="subheading">Explore My Gear</h3>
          <h2 className="heading">
            Cameras That Have Shaped My Photographic Journey
          </h2>
          <div className="flex flex-col gap-4 py-8">
            {GearData.map((gear) => (
              <GearItem name={gear} key={gear} />
            ))}
          </div>
          <button className="btn btn-fill">Discover More</button>
        </div>
      </div>
    </>
  );
};

export default Gear;

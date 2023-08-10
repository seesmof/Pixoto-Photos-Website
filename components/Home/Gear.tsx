import Image from "next/image";
import React from "react";
import { GearItem } from "./GearItem";

const GearData = [
  "Canon EOS R5",
  "Sony Alpha 7R IV",
  "Nikon Z7 II",
  "Fujifilm X-T4",
  "Panasonic Lumix S1R",
  "Leica Q2",
];

const Gear = () => {
  return (
    <>
      <div className="lg:flex-row lg:gap-8 xl:gap-16 layout">
        <div className="flex flex-row gap-4 md:max-w-lg self-center">
          <Image
            src="/mainGearOne.jpg"
            alt="my photo camera"
            className="row-span-full flex-1 rounded-full object-cover object-center"
            width={999}
            height={999}
          />
          <div className="grid grid-rows-3 md:grid-rows-2 w-[40%] md:w-1/2 gap-4">
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
        <div className="flex flex-col pt-10 lg:pt-0">
          <h3 className="subheading">Explore My Gear</h3>
          <h2 className="heading">Cameras That Shaped My Journey</h2>
          <div className="grid md:grid-cols-2 gap-4 py-8 lg:py-12 lg:gap-8">
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

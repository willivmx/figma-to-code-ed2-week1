import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div
      className={
        "w-full h-auto relative flex max-lg:flex-col gap-16 lg:gap-0 items-start"
      }
    >
      <div
        className={
          "lg:absolute flex flex-col w-full lg:w-2/3 gap-[18px] md:gap-[34px] lg:gap-[52px]"
        }
      >
        <span
          className={
            "text-[52px] md:text-[96px] lg:text-[120px] leading-[52px] md:leading-[82px] lg:leading-[108px]"
          }
        >
          See the NFT new world
        </span>
        <div
          className={"flex flex-col gap-[26px] w-full lg:w-1/2 font-semibold"}
        >
          <span className={"text-[#484D56] text-sm lg:text-base"}>
            Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, di
          </span>
          <div className={"relative"}>
            <div
              className={
                "absolute flex justify-start items-center gap-[16px] group cursor-pointer"
              }
            >
              <span>Discover Now</span>
              <Image
                src={"/assets/vectors/icons/arrow_right_rounded.svg"}
                alt={"arrow-right"}
                width={48}
                height={48}
                quality={100}
                className={
                  "size-[48px] group-hover:translate-x-1 transition-all"
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className={"w-full flex justify-end items-end"}>
        <div className={"w-full lg:w-1/2"}>
          <Image
            src={"/assets/vectors/hero.svg"}
            alt={"hero"}
            width={590}
            height={590}
            quality={100}
            className={"size-auto"}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

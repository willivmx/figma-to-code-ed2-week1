import React from "react";
import Button from "@/components/button";

const CtaSection = () => {
  return (
    <div
      className={
        "w-full flex flex-col justify-center items-center rounded-[32px] gap-[40px] py-[72px] bg-[url('/assets/vectors/cta.svg')] bg-center bg-scroll bg-cover bg-no-repeat text-white text-center"
      }
    >
      <span className={"font-medium text-[28px] md:text-[46px] lg:text-[64px]"}>
        Build your NFT profile
      </span>
      <span className={"text-xs md:text-ld lg:text-xl font-semibold"}>
        Join almost 10k NFT profiles on Digit !
      </span>
      <Button className={"rounded-full bg-white text-neutral-800"}>
        Sign up now
      </Button>
    </div>
  );
};

export default CtaSection;

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const nav = [
    {
      label: "Privacy",
      href: "#",
    },
    {
      label: "Terms & Conditions",
      href: "#",
    },
    {
      label: "About Us",
      href: "#",
    },
  ];
  return (
    <div className={"px-[20px] md:px-[46px] lg:px-[120px]"}>
      <div
        className={
          "border-l border-[#E8E9EA] w-full flex flex-col gap-[14px] pb-[12px]"
        }
      >
        <Link href={"/"} className={"size-[36px]"}>
          <Image
            src={"/assets/vectors/logo/logo.svg"}
            alt={"Logo"}
            width={36}
            height={36}
            quality={100}
            className={"w-full"}
          />
        </Link>
        <div
          className={
            "w-full border-t border-[#E8E9EA] flex max-lg:flex-col justify-between items-start lg:items-center py-[32px] gap-[16px]"
          }
        >
          <span className={"text-2xl font-semibold text-black"}>
            Create Explore & Collect Digital NFTs
          </span>
          <div className={"flex justify-center items-center gap-[30px]"}>
            {nav.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={"text-sm font-medium text-black hover:text-black/80"}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

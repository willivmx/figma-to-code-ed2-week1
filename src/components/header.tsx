"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/button";
import { cn } from "@/lib/utils";
import useScrollLock from "@/hooks/useScrollLock";

const navItems = [
  {
    label: "Home",
    href: "#",
  },
  {
    label: "Top sales",
    href: "#",
  },
  {
    label: "Collections",
    href: "#",
  },
  {
    label: "Our blog",
    href: "#",
  },
  {
    label: "About us",
    href: "#",
  },
];

const Header = () => {
  return (
    <div
      className={
        "w-full px-[20px] md:px-[46px] lg:px-[120px] bg-background text-[16px] border-b border-[#E8E9EA]"
      }
    >
      <div className={"w-full border-l border-[#E8E9EA]"}>
        <div
          className={
            "w-full flex justify-between items-center py-[12px] lg:py-[26px]"
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
          <Navigation />
          <Buttons className={"hidden lg:flex"} />
          <Burger />
        </div>
      </div>
    </div>
  );
};

export default Header;

const Navigation = () => {
  return (
    <div className={"hidden lg:flex justify-center items-center gap-[28px]"}>
      {navItems.map((item, index) => (
        <Link key={index} href={item.href} className={"font-semibold"}>
          {item.label}
        </Link>
      ))}
    </div>
  );
};

const Buttons = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "h-[44px] flex justify-center items-center gap-[20px]",
        className,
      )}
    >
      <Link
        href={"/"}
        className={
          "inline-flex justify-center items-center font-semibold px-[26px] my-[4px] border-r-2 border-neutral-800 cursor-pointer"
        }
      >
        Sign up
      </Link>
      <Button
        className={"bg-primary text-white rounded-full px-[26px] py-[10px]"}
      >
        Connect Wallet
      </Button>
    </div>
  );
};

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLocked, lock, unlock } = useScrollLock({
    autoLock: false,
  });

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      lock();
    } else {
      unlock();
    }
  }, [isOpen]);

  return (
    <>
      <div
        className={
          "flex lg:hidden size-[30px] p-[8px] bg-[#E8E9EA] rounded-[8px] overflow-hidden justify-center items-center cursor-pointer"
        }
        onClick={handleClick}
      >
        <Image
          src={"/assets/vectors/icons/burger.svg"}
          alt={"burger"}
          width={20}
          height={20}
          quality={100}
          className={"size-[20px]"}
        />
      </div>
      {isOpen && (
        <div
          className={
            "lg:hidden absolute top-0 left-0 z-[100] bg-background w-full h-screen flex flex-col gap-20 px-[52px]"
          }
        >
          <div
            className={
              "w-full border-r border-[#E8E9EA] size-full py-[12px] flex flex-col gap-[64px]"
            }
          >
            <div className={"flex justify-end items-center"}>
              <div
                className={
                  "flex lg:hidden size-[30px] p-[8px] bg-[#E8E9EA] rounded-[8px] overflow-hidden justify-center items-center cursor-pointer"
                }
                onClick={handleClick}
              >
                <Image
                  src={"/assets/vectors/icons/cancel-02.svg"}
                  alt={"burger"}
                  width={20}
                  height={20}
                  quality={100}
                  className={"size-[20px]"}
                />
              </div>
            </div>
            <div className={"flex flex-col gap-[28px]"}>
              {navItems.map((item, index) => {
                return (
                  <Link href={item.href} key={index}>
                    {item.label}
                  </Link>
                );
              })}
            </div>
            <div
              className={"flex justify-center items-center w-full"}
            >
              <Buttons />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

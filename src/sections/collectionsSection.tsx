"use client";
import React, { useState } from "react";
import Button from "@/components/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const collections = [
  {
    id: "all",
    label: "All categories",
  },
  {
    id: "art",
    label: "Art",
  },
  {
    id: "celebrities",
    label: "Celebrities",
  },
  {
    id: "gaming",
    label: "Gaming",
  },
  {
    id: "sport",
    label: "Sport",
  },
];

const nfts = [
  {
    id: "1",
    label: "CyberPunk",
    price: "68",
    category: "art",
    image: "/assets/vectors/nfts/cyberpunk.svg",
  },
  {
    id: "2",
    label: "Durolost Boll - Upper",
    price: "68",
    category: "celebrities",
    image: "/assets/vectors/nfts/durolost_boll_upper.svg",
  },
  {
    id: "3",
    label: "Space X Wiper",
    price: "68",
    category: "gaming",
    image: "/assets/vectors/nfts/space_x_wiper.svg",
  },
  {
    id: "4",
    label: "Snoop Dogg",
    price: "68",
    category: "sport",
    image: "/assets/vectors/nfts/snoop_dog.svg",
  },
];

const CollectionsSection = () => {
  return (
    <div className={"w-full flex flex-col gap-[36px]"}>
      <span className={"font-bold text-3xl"}>Our Collections</span>
      <CardList />
    </div>
  );
};

export default CollectionsSection;

const CardList = () => {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <>
      <div className={"flex justify-start items-center gap-[8px] flex-wrap"}>
        {collections.map((collection) => (
          <Button
            key={collection.id}
            className={cn(
              "text-sm bg-[#E8E9EA] rounded-[12px]",
              collection.id === activeTab && "bg-neutral-800 text-white",
            )}
            onClick={() => {
              setActiveTab(collection.id);
            }}
          >
            {collection.label}
          </Button>
        ))}
      </div>
      <div
        className={
          "w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] px-[24px] lg:px-0"
        }
      >
        {nfts
          .filter((nft) => activeTab === "all" || nft.category === activeTab)
          .map((nft) => (
            <NFTCard nft={nft} key={nft.id} />
          ))}
      </div>
    </>
  );
};

const NFTCard = ({
  nft,
}: {
  nft: {
    id: string;
    label: string;
    price: string;
    category: string;
    image: string;
  };
}) => {
  return (
    <div
      className={
        "w-full flex flex-col justify-center items-center gap-[16px] p-[12px] rounded-[20px] bg-neutral-100 border"
      }
    >
      <div className={"w-full aspect-square rounded-[20px] overflow-hidden"}>
        <Image
          src={nft.image}
          alt={nft.label}
          width={200}
          height={200}
          quality={100}
          className={"size-full scale-125"}
        />
      </div>
      <div className={"w-full flex justify-between items-center font-bold"}>
        <span>{nft.label}</span>
        <div className={"flex justify-end items-center gap-[2px]"}>
          <Image
            src={"/assets/vectors/icons/ethereum-ellipse.svg"}
            alt={"ethereum-ellipse"}
            width={24}
            height={24}
            quality={100}
            className={"size-[24px]"}
          />
          <span>{nft.price}</span>
        </div>
      </div>
      <Button className={"w-full border-2 border-neutral-800 rounded-[12px]"}>
        Place a Bid
      </Button>
    </div>
  );
};

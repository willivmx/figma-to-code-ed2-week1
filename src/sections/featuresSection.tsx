import React from "react";
import Image from "next/image";

const FeaturesSection = () => {
  const features = [
    {
      id: "1",
      label: "Set up your wallet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      icon: "/assets/vectors/icons/wallet-02.svg",
    },
    {
      id: "2",
      label: "Add your NFT’s",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      icon: "/assets/vectors/icons/cloud-download.svg",
    },
    {
      id: "3",
      label: "Promote your NFT’s",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      icon: "/assets/vectors/icons/sale-tag-02.svg",
    },
    {
      id: "4",
      label: "Sell your NFT’s",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      icon: "/assets/vectors/icons/bitcoin-ellipse.svg",
    },
  ];
  return (
    <div className={"w-full flex flex-col gap-[36px]"}>
      <span className={"font-bold text-3xl"}>Create and Sell Now</span>
      <div
        className={
          "w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] px-[24px] lg:px-0"
        }
      >
        {features.map((feature) => (
          <FeatureCard feature={feature} key={feature.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;

const FeatureCard = ({
  feature,
}: {
  feature: {
    id: string;
    label: string;
    description: string;
    icon: string;
  };
}) => {
  return (
    <div
      className={
        "w-full flex flex-col rounded-[24px] p-[24px] gap-[10px] bg-[#E8E9EA]"
      }
    >
      <div
        className={
          "p-[10px] rounded-[8px] flex justify-center items-center bg-[#181D28] size-[50px]"
        }
      >
        <Image
          src={feature.icon}
          alt={feature.label}
          width={30}
          height={30}
          quality={100}
          className={"size-[30px]"}
        />
      </div>
      <span className={"text-xl font-bold"}>{feature.label}</span>
      <span className={"text-[#484D56] text-sm font-medium"}>
        {feature.description}
      </span>
    </div>
  );
};

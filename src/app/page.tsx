import React from "react";
import Header from "@/components/header";
import HeroSection from "@/sections/heroSection";
import CollectionsSection from "@/sections/collectionsSection";
import FeaturesSection from "@/sections/featuresSection";
import CtaSection from "@/sections/ctaSection";
import Footer from "@/components/footer";

const Page = () => {
  return (
    <div className={"w-full min-h-[100dvh] bg-background flex flex-col"}>
      <Header />
      <div className={"flex-1 w-full px-[20px] md:px-[46px] lg:px-[120px]"}>
        <div
          className={
            "flex flex-col py-[96px] gap-[96px] border-l border-[#E8E9EA]"
          }
        >
          <HeroSection />
          <CollectionsSection />
          <FeaturesSection />
          <CtaSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;

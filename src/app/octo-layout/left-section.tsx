import { useSiteData } from "shared/hooks/useHeaderData";

import Header from "./components/header";
import SessionInfo from "./components/session-info";
import BannerInfo from "./components/banner-info";

const LeftSection: React.FC = () => {
  const { data } = useSiteData();

  return (
    <section className="bg-secondary-foreground pl-11 pt-11 pr-11">
      <div className="grid h-full bg-primary rounded-t-lg py-5 px-10">
        <div className="flex justify-between">
          <Header />
          <SessionInfo />
        </div>
        <main className="py-10 flex flex-col lg:w-[42%] gap-y-10">
          <article
            className="text-center-text text-4xl"
            dangerouslySetInnerHTML={{
              __html: data?.home?.["header-title"] ?? "",
            }}
          />
          <button className="font-bold bg-center-text px-4 py-2 w-fit shadow-[4px_4px_0px_0_#d2aae4] flex gap-4 items-center justify-center text-base">
            <img
              src="avatar-btn.png"
              alt="avatar"
              className="w-[32px] h-[32px]"
            />
            {data?.home["header-cta"]}
          </button>
        </main>
        <BannerInfo />
      </div>
    </section>
  );
};

export default LeftSection;

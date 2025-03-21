import LeftText from "@/components/LeftText";
import ProfileCard from "@/components/ProfileCard";
import { TimelineDemo } from "@/components/timeline-demo";
import { Spotlight } from "@/components/ui/spotlight-new";

export default function Home() {
  return (
    <>
      <div className="  w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased relative overflow-hidden dark ">
        <Spotlight />
        <div className=" p-2  mx-auto relative z-10  w-screen md:pt-0 bg-white dark:bg-slate-950 font-sans md:px-10 dark:bg-grid-white/[0.025] bg-grid-black/[0.025] ">
          {/** this is the floating div for photo and name */}

          <div className="flex md:flex-row flex-col items-center justify-center p-8 min-h-screen">
            <LeftText />

            <ProfileCard />
          </div>
        </div>
      </div>
      <div className="dark">
        <TimelineDemo />
      </div>
      <div></div>
    </>
  );
}

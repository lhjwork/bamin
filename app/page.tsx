import BottomNavigation from "@/components/navigation/BottomNavigation";
import TopNavigation from "@/components/navigation/TopNavigation";
import MainSection from "@/components/section/MainSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <TopNavigation />
      <MainSection />
      <BottomNavigation />
    </main>
  );
}

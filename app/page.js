import Image from "next/image";
import Navigator from '@/components/navigator';
import Hero from '@/components/Hero';
import Stats from '@/components/stats';
import Problem from '@/components/Problem';
import PersonalityCards from "@/components/PersonalityCards";

export default function Home() {
  return (
    <div className="w-full overflow-hidden relative">
      < Navigator/>
      <Hero/>
      <Stats/>
      <Problem/>
      <PersonalityCards/>
    </div>
  );
}

import Image from "next/image";
import Navigator from '@/components/navigator';
import Hero from '@/components/Hero';
import Stats from '@/components/stats';
import Problem from '@/components/Problem';
import PersonalityCards from "@/components/PersonalityCards";
import CTAQuote from "@/components/CTAQuote";
import BankSystem from "@/components/BankSystem";
import CodeBreaker from "@/components/CodeBreaker";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full overflow-hidden relative">
      < Navigator/>
      <Hero/>
      <Stats/>
      <Problem/>
      <BankSystem/>
      <PersonalityCards/>
      <CTAQuote/>
      <CodeBreaker/>
      <Footer/>

    </div>
  );
}

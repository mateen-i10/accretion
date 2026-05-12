import { AccretionAI } from "@/components/AccretionAI";
import { CTA } from "@/components/CTA";
import { DarkBumpTransition } from "@/components/DarkBumpTransition";
import { DashboardPreview } from "@/components/DashboardPreview";
import { Essentials } from "@/components/Essentials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { GetMoreDone } from "@/components/GetMoreDone";
import { Hero } from "@/components/Hero";
import { Integrations } from "@/components/Integrations";
import { Nav } from "@/components/Nav";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { TrustedBy } from "@/components/TrustedBy";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        <div className="bg-cream">
          <div className="relative z-20 -mt-24 px-6">
            <DashboardPreview />
          </div>

          <section className="pt-10 pb-10 relative">
            <TrustedBy />
          </section>

          <DarkBumpTransition />
        </div>

        <Essentials />
        <GetMoreDone />
        <AccretionAI />
        <Integrations />
        <Testimonials />
        <Pricing />
        <FAQ />

        {/* Inverted dome between dark FAQ and cream CTA */}
        <DarkBumpTransition inverted />

        <CTA />
        <Footer />
      </main>
    </>
  );
}

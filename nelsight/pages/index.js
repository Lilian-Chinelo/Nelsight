import Head from "next/head";
import Hero from "../components/hero";
import Features from "../components/features";
import Services from "../components/services";
import Testimonials from "../components/testimonials";

export default function Home() {
  return (
    <div >
      <Head>
        <title>NelSight</title>
      </Head>

      <main>
        <Hero />
        <Features />
        <Services />
        <Testimonials />
      </main>
    </div>
  );
}

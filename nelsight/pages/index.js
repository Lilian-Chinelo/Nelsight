import Head from "next/head";
import Hero from "../components/hero";
import Features from "../components/features";

export default function Home() {
  return (
    <div >
      <Head>
        <title>NelSight</title>
      </Head>

      <main>
        <Hero />
        <Features />
      </main>
    </div>
  );
}

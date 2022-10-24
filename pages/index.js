/* eslint-disable */
import Head from "next/head";
import Script from "next/script";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Header from "../components/Header";

export default function Home({ exploreData }) {
  return (
    <div>
      <Head>
        <Script
          id="62d1605bf9ab8e267a5710d6"
          src="https://dashboard.chatfuel.com/integration/fb-entry-point.js"
          async
          defer
        />
        <title>Sam Yusuf | Front-End Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <Banner />
        <main className="px-8 sm:px-16 max-w-6xl mx-auto">
          <section className="pt-6">
            <h2 className="text-4xl font-semibold pb-5">Search Nearby</h2>
            {exploreData.map(({ img, location, distance }) => (
              <Card img={img} distance={distance} location={location} />
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
    },
  };
}

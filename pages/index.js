import Head from "next/head";
import Layout from "src/components/Layout";
import About from "src/components/Home/About";
import Banner from "src/components/Home/Banner";
import BestDishes from "src/components/Home/BestDishes";
import Info from "src/components/Home/Info";
import Introduce from "src/components/Home/Introduce";
import MapLocation from "src/components/Home/MapLocation";
import { client } from "src/helpers/contentful";

export default function Home({ dishes }) {
  return (
    <>
      <Head>
        <title>Trang chủ</title>
        <link
          rel="icon"
          href="/icons/logoIcon.png"
          type="image/png"
          sizes="30x30"
        />
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Layout>
        <Banner />
        <Info hasBg />
        <Introduce />
        <BestDishes hasBg dishes={dishes} />
        <About />
        <MapLocation hasBg />
      </Layout>
    </>
  );
}
export async function getStaticProps() {
  const res = await client.getEntries({ content_type: "dishes" });
  return {
    props: {
      dishes: res.items
    },
    revalidate: 1
  };
}

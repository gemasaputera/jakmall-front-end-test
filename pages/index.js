import Head from "next/head";
import MainOrder from "../src/components/MainOrder";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Jakmall Front End Test</title>
        <meta
          name="description"
          content="Jakmall front end test build with NextJS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainOrder />
    </div>
  );
}

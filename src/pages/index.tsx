import Head from "next/head";
import { MenuCard } from "../../components/molecules/MenuCard";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Social Good</title>
        <link rel="icon" />
      </Head>
      <div>
        {/* dummy cards */}
        <MenuCard label="Prevención" />
        <MenuCard label="Prevención" />
      </div>
    </div>
  );
}

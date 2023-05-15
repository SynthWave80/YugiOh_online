import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "@/utils/api";
import PaginatedItems from "@/components/pagination";

const Home: NextPage = () => {
  const { data, error, refetch } = api.cards.getAll.useQuery();

  return (
    <>
      <Head>
        <title>YuGiOh project</title>
        <meta name="description" content="YuGiOh Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-20 items-center border-b border-gray-300 bg-gradient-to-b from-cyan-500 to-blue-500">
        <div className="text-5xl text-white">YuGiOh db.</div>
      </div>

      <div className="flex min-h-full min-w-full bg-gradient-to-b from-blue-500 to-sky-950 p-4 ">
        <PaginatedItems itemsPerPage={12} cards={data} />
      </div>
    </>
  );
};

export default Home;

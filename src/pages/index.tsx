import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "@/utils/api";
import PaginatedItems from "@/components/pagination";
import { Spinner } from "react-bootstrap";
import Skeleton from "@/components/skeleton";
import { Card, Placeholder } from "react-bootstrap";

const Home: NextPage = () => {
  const { data, error, refetch, isLoading } = api.cards.getAll.useQuery();
  const items = 12;

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

      <div className="flex min-h-full min-w-full items-center justify-center bg-gradient-to-b from-blue-500 to-sky-950 p-4 ">
        {isLoading && (
          <div className=" grid grid-cols-4  gap-4 pb-5">
            {Array.from({ length: items }).map((_, index) => (
              <Skeleton key={index} />
            ))}
          </div>
        )}

        {data && (
          <PaginatedItems
            itemsPerPage={items}
            cards={data}
            isLoading={isLoading}
          />
        )}
      </div>
    </>
  );
};

export default Home;

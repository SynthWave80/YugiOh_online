import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "@/utils/api";
import PaginatedItems from "@/components/pagination";
import { Spinner } from "react-bootstrap";
import Skeleton from "@/components/skeleton";
import { Card, Placeholder } from "react-bootstrap";
import { set, string } from "zod";
import { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";

const Home: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searching, setSearching] = useState(false);

  const { data, error, refetch, isLoading } = api.cards.getAll.useQuery();

  const {
    data: searchData,
    isLoading: searchIsLoading,
    refetch: searchRefetch,
  } = api.cards.getCardsLike.useQuery(searchTerm);

  useEffect(() => {
    console.log(`Search content: ${searchTerm}`);
    console.log(searchData);
    searchTerm.length == 0 ? setSearching(false) : setSearching(true);
  }, [searchTerm]);

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

        <div className="relative flex items-center pl-20 text-gray-600">
          <input
            className="h-10 w-72 rounded-lg border-2 border-gray-300 bg-white px-5 pr-16 text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
            onChange={(text) =>
              text.target.value.length > 1
                ? (setSearchTerm(text.target.value), setSearching(true))
                : setSearching(false)
            }
          />
        </div>
      </div>

      <div className="flex min-h-full min-w-full items-center justify-center  bg-gradient-to-b from-blue-500 to-sky-950 p-4 ">
        {isLoading || searchIsLoading ? (
          <div className="grid w-full grid-cols-4 gap-3">
            {Array.from({ length: items }).map((_, index) => (
              <Skeleton key={index} />
            ))}
          </div>
        ) : searchData?.length == 0 && !searchIsLoading ? (
          <Alert
            variant="danger"
            className="mt-5 flex flex-col items-center justify-center"
          >
            <Alert.Heading>ERROR!</Alert.Heading>
            <p>NO CARDS FOUND.</p>
          </Alert>
        ) : (
          <PaginatedItems
            itemsPerPage={items}
            cards={
              data && !searching
                ? data
                : searchData && searching
                ? searchData
                : undefined
            }
            isLoading={isLoading}
          />
        )}
      </div>
    </>
  );
};

export default Home;

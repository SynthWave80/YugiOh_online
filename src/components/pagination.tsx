import { cards } from "@/utils/cardsInterface";
import { YuGiOhDB } from "@prisma/client";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import Cards from "./cards";

interface PageEvent {
  selected: number;
}

// Example items, to simulate fetching from another resources.

function Items({
  currentItems,
  cards,
}: {
  currentItems: YuGiOhDB[] | undefined;
  cards: YuGiOhDB[] | undefined;
}) {
  return (
    <div className="grid grid-cols-4 gap-4 pb-5">
      {currentItems?.map((item) => (
        <Cards item={item} />
      ))}
    </div>
  );
}

export default function PaginatedItems({
  itemsPerPage,
  cards,
}: {
  itemsPerPage: number;
  cards: YuGiOhDB[] | undefined;
}) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = cards?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(cards?.length || 0 / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: PageEvent) => {
    const newOffset = (event.selected * itemsPerPage) % (cards?.length || 0);
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className="flex min-w-full flex-col items-center justify-center">
      <Items currentItems={currentItems} cards={cards} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< Previous"
        renderOnZeroPageCount={null}
        activeClassName={"item active "}
        breakClassName={"item break-me "}
        containerClassName={"pagination"}
        disabledClassName={"disabled-page"}
        nextClassName={"item next "}
        pageClassName={"item pagination-page "}
        previousClassName={"item previous"}
      />
    </div>
  );
}

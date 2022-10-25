import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";

function Search() {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMM yyy");
  const formattedEndDate = format(new Date(endDate), "dd MMM yyy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  router.query;
  return (
    <div>
      <Header />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            200+ stays -{range}- for {noOfGuests} number of guest
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">stays {location}</h1>
          <div
            className="hidden lg:inline-flex mb-5 space-x-3 
          text-gray-800 whitespace-nowrap"
          >
            <button className=" button">
              <p>Cancellation Flexibility</p>
            </button>
            <button className=" button">
              <p>Type of place</p>
            </button>
            <button className=" button">
              <p>Price</p>
            </button>
            <button className=" button">
              <p>Pools</p>
            </button>
            <button className=" button">
              <p>More Filters</p>
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

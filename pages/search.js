import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Search() {
  return (
    <div>
      <Header />

      <main className="flex">
        <section>
          <p className="text-xs">200+ stays of 6 guest</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            stays in the moon
          </h1>
          <div className="hidden lg:inline-flex justify-between">
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

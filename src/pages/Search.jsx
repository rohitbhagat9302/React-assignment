import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import Ratings from "../components/Ratings";
import ShopPageProducts from "../components/ShopPageProducts";
import { faker } from "@faker-js/faker";

const Search = () => {
  return (
    <div className="searchPage">
      <div className="searchBar">
        <input type="search" placeholder="search" id="search1" />
        <CiSearch className="search-icon" />
      </div>
      <div className="searchMainDiv">
        <div className="filterDiv">
          <p>Search Results</p>

          <div className="brandDiv">
            <div className="titleDiv">
              <p>BRAND</p>
              <MdKeyboardArrowDown />
            </div>

            <div>
              <input type="checkbox" />
              <span class="checkmark">{faker.commerce.department()}</span>
            </div>
            <div className="secondRadiobtn">
              <input type="checkbox" />
              <span class="checkmark">{faker.commerce.department()}</span>
            </div>
          </div>

          <div className="brandDiv">
            <div className="titleDiv">
              <p>PRICE RANGE</p>
              <MdKeyboardArrowDown />
            </div>

            <div>
              <input type="checkbox" />
              <span class="checkmark">Under 500</span>
            </div>
            <div className="secondRadiobtn">
              <input type="checkbox" />
              <span class="checkmark">1000 - 3000</span>
            </div>
          </div>

          <div>
            <div className="titleDiv">
              <p>RATINGS</p>
              <MdKeyboardArrowDown />
            </div>

            <div className="ratingDiv">
              <input type="checkbox" />
              <Ratings totalStars={5} markedStars={5} />
            </div>
            <div className="ratingDiv">
              <input type="checkbox" />
              <Ratings totalStars={5} markedStars={4} />
            </div>
            <div className="ratingDiv">
              <input type="checkbox" />
              <Ratings totalStars={5} markedStars={3} />
            </div>
            <div className="ratingDiv">
              <input type="checkbox" />
              <Ratings totalStars={5} markedStars={2} />
            </div>
            <div className="ratingDiv">
              <input type="checkbox" />
              <Ratings totalStars={5} markedStars={1} />
            </div>
          </div>
        </div>
        <div className="productsDiv">
          <ShopPageProducts/>
          <ShopPageProducts/>
          <ShopPageProducts/>
          <ShopPageProducts/>
          <ShopPageProducts/>
          <ShopPageProducts/>
          <ShopPageProducts/>
          <ShopPageProducts/>
        </div>
      </div>
    </div>
  );
};

export default Search;

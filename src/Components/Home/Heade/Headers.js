import React from "react";
import "./Headers.css";
import SplitButton from "./SplitButton";
import SearchBar from "./SearchBar";
import VariantButtonGroup from "./VariantButtonGroup";


function Headers() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.burlycare.com/static/media/logo.4d9ce206.svg"
          alt=""
        />

        <SplitButton />
      </div>
      <div className="header__center">
        {/* <SearchAppBar /> */}
        <SearchBar />
      </div>
      <div className="header__right">
        <VariantButtonGroup />
      </div>
    </div>
  );
}

export default Headers;
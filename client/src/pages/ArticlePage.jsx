import React from "react";
import {  Articles, Footer } from "../components";

const ArticlePage = ({ articles }) => {
  return (
    <div>
      {/* <Navbar /> */}
      <Articles />
      <Footer />
    </div>
  );
};

export default ArticlePage;

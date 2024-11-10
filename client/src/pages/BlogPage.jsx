import React from 'react';
import {  Blogs} from "../components";

const BlogPage = ({blogs}) => {



  return (
    <div>
      {/* <Navbar /> */}
      <Blogs blogs={blogs} />       
    </div>
  )
}

export default BlogPage
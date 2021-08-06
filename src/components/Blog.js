import React from "react";
import styled from "@emotion/styled";
import Navbar from "./Navbar";

const BlogPageWrapper = styled.main``;

const Blog = () => {
  return (
    <BlogPageWrapper>
      <Navbar />
      <div>content</div>
    </BlogPageWrapper>
  );
};

export default Blog;

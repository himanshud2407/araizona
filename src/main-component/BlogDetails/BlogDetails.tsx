import React, { Fragment } from "react";
import Header from "../../components/Header/Header";
import PageTitle from "../../components/pagetitle/PageTitle";
import BlogDetailsSection from "../../components/BlogDetails/BlogSingle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";

const BlogDetails = ({ post }: { post: any }) => {
  return (
    <Fragment>
      <div className='about-page inner-page'>
        <div className="body_wrap o-clip">
          <Header />
          <main>
            <PageTitle pageTitle={post.title} pagesub="Blog details" />
            <BlogDetailsSection post={post} />
          </main>
          <Footer />
          <Scrollbar />
        </div>
      </div>
    </Fragment>
  );
};

export default BlogDetails;
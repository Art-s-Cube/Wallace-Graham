import React from "react";
import { Link } from "gatsby";

const BlogList = ({ blogs }) => {
  const generateLinkFromTitle = (title) => {
    return title.toLowerCase().replace(/\s+/g, "-");
  };
  return (
    <section className="blog-pg blog-list section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="posts mt-80">
            {
                blogs.map((blogItem) => {
                  const blogLink = generateLinkFromTitle(blogItem.title);
                  
                  return (
                  <div
                    className="item mb-80 wow fadeInUp"
                    key={blogItem.id}
                    data-wow-delay=".3s"
                  >
                    <div className="row">
                      <div className="col-lg-6 valign">
                        <div className="img md-mb50">
                          <img src={blogItem.image.file.url} alt="" />
                        </div>
                      </div>
                      <div className="col-lg-6 valign">
                        <div className="cont">
                          <div>
                            <div className="info">
                              <Link to={`/blog/${blogLink}`} className="date">
                                <span>
                                  <i>{new Date(blogItem.publishDate).getDate()}</i>
                                  {new Date(blogItem.publishDate).toLocaleString('default', { month: 'short' })}
                                </span>
                              </Link>
                              {/* Add tags if they exist in your Contentful data */}
                            </div>
                            <h5>
                              <Link to={`/blog/${blogLink}`}>
                                {blogItem.title}
                              </Link>
                            </h5>
                            <p className="mt-10">
                              {JSON.parse(blogItem.content.raw).content[0].content[0].value.substr(0, 146) + '...'}
                            </p>
                            <div className="btn-more mt-30">
                              <Link to={`/blog/${blogLink}`} className="simple-btn">
                                Read More
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )})
              }
              <div className="pagination">
                <span className="active">
                  <Link to={`/blog/blog-dark`}>1</Link>
                </span>
                <span>
                  <Link to={`/blog/blog-dark`}>2</Link>
                </span>
                <span>
                  <Link to={`/blog/blog-dark`}>
                    <i className="fas fa-angle-right"></i>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogList;

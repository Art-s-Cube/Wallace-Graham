import React from "react";
import { Link } from "gatsby";

const createSlugFromHeadline = (headline) => {
  const cleanedHeadline = headline.replace(/\?/g, "");
  const slug = cleanedHeadline.replace(/\s+/g, "-").toLowerCase();
  return slug;
};

const BlogGrid = ({ news = [] }) => {
  return (
    <section className="blog-pg blog section-padding pt-0">
      <div className="container">
        <div className="posts">
          <div className="row">
          {
            Array.isArray(news) && news.map((newsItem) => {
              const slug = createSlugFromHeadline(newsItem.headline);

              return (
                <div className="col-lg-4" key={newsItem.id}>
                  <div className="item mb-80 wow fadeInUp" data-wow-delay=".3s">
                    <div className="img">
                      <img className=" newsImg" src={newsItem.image.file.url} alt={newsItem.headline} />
                    </div>
                    <div className="cont">
                      <div>
                        <div className="info">
                          <span className="date">
                            {new Date(newsItem.date).toLocaleDateString()}
                          </span>
                        </div>
                        <h5 className="newsTitle">
                          <Link to={`/news/${slug}`}>
                            {newsItem.headline.substr(0, 175) + "..."}
                          </Link>
                        </h5>
                        <div className="btn-more">
                          <Link to={`/news/${slug}`} className="simple-btn">
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )})
            }
            <div className="pagination">
              <span className="active">
                <Link to={`/news`}>1</Link>
              </span>
              <span>
                <Link to={`/news`}>2</Link>
              </span>
              <span>
                <Link to={`/news`}>
                  <i className="fas fa-angle-right"></i>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;

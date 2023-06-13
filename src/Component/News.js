import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResult] = useState(0);

  const newsUpdate = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6eb4aa1a89ff4fc08a1c5a5d918c5e0c&page=${page}&pageSize=12`;

    let data = await fetch(url);
    setLoading(true);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(70);
    console.log(parseData);
    setArticles(parseData.articles);
    setTotalResult(parseData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    newsUpdate();
  }, []);

  /*
  sonst prePg = async () => {
    // console.log("previos");
    setPage(page-1);
    newsUpdate();
  };

  const nextPg = async () => {
    // console.log("next");
    if (page + 1 > Math.ceil(totalResults / 12)) {
    } else {
      setPage(page+1);
      newsUpdate();
    }
  };

*/

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=6eb4aa1a89ff4fc08a1c5a5d918c5e0c&page=${
      page + 1
    }&pageSize=12`;
    setPage(page + 1);

    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    setArticles(articles.concat(parseData.articles));
    setTotalResult(parseData.totalResults);
  };

  // console.log("second");
  return (
    <div>
      <div className="container my-5">
        {loading && <Loading />}

        <InfiniteScroll
          // dataLength={articles.length}
          dataLength={articles?.length ?? 0}
          next={fetchMoreData}
          hasMore={articles?.length !== totalResults}
          loader={<Loading />}
        >
          <div className="container">
            <div className="row">
              {articles?.map((elements) => {
                return (
                  <div className="col-md-4" key={elements.url}>
                    <NewsItem
                      title={elements.title ? elements.title.slice(0, 50) : ""}
                      description={
                        elements.description
                          ? elements.description.slice(0, 50)
                          : ""
                      }
                      imgUrl={elements.urlToImage}
                      url={elements.url}
                    />
                  </div>
                );
              })}

              {/* <div className="col-md-4">
              <NewsItem title="mytitle" description="newsApp" />
            </div>

            <div className="col-md-4">
              <NewsItem
                title="mytitle"
                description="newsApp"
                imgUrl="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-finish-unselect-gallery-1-202207_GEO_EMEA_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=95&.v=1654902551914"
              />
            </div> */}
            </div>
          </div>
        </InfiniteScroll>
        {/*
          <div className="d-flex justify-content-between my-3">
            <button
              type="button"
              className="btn btn-dark "
              onClick={this.prePg}
              disabled={page <= 1}
            >
              &larr; Previous
            </button>
            <button
              type="button"
              onClick={this.nextPg}
              className="btn btn-dark"
              disabled={
                page + 1 > Math.ceil(totalResults / 12)
              }
            >
               Next &rarr;
            </button> 
          </div>
            */}
      </div>
    </div>
  );
};

News.defaultProps = {
  country: "us",
  pageSize: 12,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;

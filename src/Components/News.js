import React, {Component} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner.js'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component{
    constructor(){
        super();
        this.state={
            articles: [],
            loading: true,
            page: 1,
            totalResults:0
        }
    }
    static propTypes={
      pageSize: PropTypes.number,
      category: PropTypes.string
    }
    static defaultProps={
      pageSize: 5,
      category: "general"
    }
    updateNews= async()=>{
      this.props.setProgress(10);
      let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=614d3cffc0424631a43beab962c34891&page=1&pageSize=${this.props.pageSize}&category=${this.props.category}`;

      this.setState({loading:true})
      let data= await fetch(url);
      this.props.setProgress(30)
      let parsedData= await data.json()     
      this.props.setProgress(70)
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false
      })
      this.props.setProgress(100);
    }
    async componentDidMount(){
      this.updateNews()
    }
    // handlePrev= async ()=>{
    //   this.setState({page: this.state.page-1})
    //   this.updateNews()
    // }
    // handleNext= async()=>{
    //   this.setState({page: this.state.page+1})
    //   this.updateNews()
      
    // }
    fetchMoreData = async() => {
      this.setState({page: this.state.page+1})
      let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=614d3cffc0424631a43beab962c34891&page=${this.state.page}&pageSize=${this.props.pageSize}&category=${this.props.category}`;

      let data= await fetch(url);
      let parsedData= await data.json() 
      console.log(parsedData)     
      this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults,
      })
    };
    render(){
        return (
          <>
            <h2 className="text-center">PaperBoy - Top Headlines</h2>
            {this.state.loading && <Spinner/>}
            <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.articles.length!==this.state.totalResults}
              loader={<Spinner/>}
            >
            <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col md-4 my-3" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 40) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 80)
                          : ""
                      }
                      imageUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://img.freepik.com/free-vector/realistic-news-studio-background_23-2149985612.jpg?w=996&t=st=1716822469~exp=1716823069~hmac=99c812bd062314311dc19ac4b9ceadae85196003ce3078ea2ba3d4e0d0a8aabc"
                      }
                      newsUrl={element.url}
                      date={element.publishedAt}
                      author={element.author}
                      source={
                        element.source.name ? element.source.name : "Unknown"
                      }
                    />
                  </div>
                );
              })}
            </div>
            </div>
            </InfiniteScroll>
            {/* <div className="d-flex justify-content-between">
              <button
                disabled={this.state.page <= 1}
                type="button"
                className="btn btn-outline-success btn-lg"
                onClick={this.handlePrev}
              >
                &larr; Previous
              </button>
              <button
                disabled={
                  this.state.page + 1 >
                  Math.ceil(this.state.totalResults / this.props.pageSize)
                }
                type="button"
                className="btn btn-outline-success btn-lg"
                onClick={this.handleNext}
              >
                Next &rarr;
              </button>
            </div> */}
          </>
        );
    }
}
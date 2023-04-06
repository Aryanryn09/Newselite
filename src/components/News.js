import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <>
      <h1 className="my-4 mx-4">Morning News - Top Headlines</h1>
      <div className="container my-5">

        
      <div className = "row md-4 my-3">
        <div className="col-md-4">
            <NewsItem title="mytitle" description="mydes" ImgUrl="https://www.irishtimes.com/resizer/EFFf3G3MEX2A1gWd3xt4DFKX468=/1200x630/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/WPRJHBNYRJG2CZMQDIHENBPQ5Q.jpg"/>
        </div>
        <div className="col-md-4">
            <NewsItem title="mytitle" description="mydes" />
        </div>
        <div className="col-md-4">
            <NewsItem title="mytitle" description="mydes" />
        </div>
        
        <div className="col-md-4 my-4">
            <NewsItem title="mytitle" description="mydes" />
        </div>
        <div className="col-md-4 my-4">
            <NewsItem title="mytitle" description="mydes" />
        </div>
        <div className="col-md-4 my-4">
            <NewsItem title="mytitle" description="mydes" />
        </div>
        
        
          
    </div>
    
    
            </div>
            
            </>
    )
  }
}

export default News

import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
    {
      source: { id: "the-irish-times", name: "The Irish Times" },
      author: "Jill Colvin, AP Reporter",
      title:
        "Trump to hold first rally of 2024 presidential campaign in Waco, Texas",
      description:
        "Former US president hoping to put on show of strength as he faces possible criminal charges over ‘hush money’ payments to women",
      url: "https://www.irishtimes.com/world/2023/03/25/trump-to-hold-first-rally-of-2024-presidential-campaign-in-waco-texas/",
      urlToImage:
        "https://www.irishtimes.com/resizer/EFFf3G3MEX2A1gWd3xt4DFKX468=/1200x630/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/WPRJHBNYRJG2CZMQDIHENBPQ5Q.jpg",
      publishedAt: "2023-03-25T10:33:56Z",
      content:
        "A defiant Donald Trump, who is staring down a possible indictment, is hoping to put on a show of force on Saturday as he holds the first rally of his 2024 presidential campaign in a city made famous … [+3420 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Trump holds first election rally in Waco overshadowed by legal threats",
      description:
        "Donald Trump will hold an election rally in Texas on Saturday at a site that critics say will play to his far-right supporters as he seeks to boost a presidential campaign dogged by the threat of criminal indictments.",
      url: "https://www.reuters.com/world/us/trump-holds-first-election-rally-waco-overshadowed-by-legal-threats-2023-03-25/",
      urlToImage:
        "https://www.reuters.com/resizer/l9YfVwP__wwTbXIWse-yuhm0Ht4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/TC7M2KLM7VLBXI3RSAS3KVTLUQ.jpg",
      publishedAt: "2023-03-25T10:02:45Z",
      content:
        "March 25 (Reuters) - Donald Trump will hold an election rally in Texas on Saturday at a site that critics say will play to his far-right supporters as he seeks to boost a presidential campaign dogged… [+3361 chars]",
    },
    {
      source: { id: "fox-news", name: "Fox News" },
      author: "Joseph Wulfsohn",
      title:
        "Bill Maher warns charging Trump over hush money probe would be a 'colossal mistake': 'Rocket fuel' for 2024",
      description:
        "HBO star Bill Maher argued that bringing criminal charges against former President Donald Trump over the hush money paid to Stormy Daniels will bolster his 2024 presidential campaign.",
      url: "https://www.foxnews.com/media/bill-maher-warns-charging-trump-over-hush-money-probe-colossal-mistake-rocket-fuel-2024",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2022/06/MaherTrump.jpg",
      publishedAt: "2023-03-25T03:08:42Z",
      content:
        '"Real Time" host Bill Maher kicked off his panel discussion Friday night by arguing against bringing criminal charges against former President Donald Trump, specifically for the alleged crimes from t… [+2859 chars]',
    },
    {
      source: { id: "newsweek", name: "Newsweek" },
      author: "Aila Slisco",
      title:
        "Trump Alleges Plot Against Him to 'Take Down the Leading Candidate'",
      description:
        'Following a report of an impending criminal indictment in New York, Trump said that prosecutors were "trying to take down the leading candidate" for 2024.',
      url: "https://www.newsweek.com/trump-alleges-plot-against-him-take-down-leading-candidate-1786806",
      urlToImage:
        "https://d.newsweek.com/en/full/2206963/donald-trump-indictment-plot-theory-2024-election.jpg",
      publishedAt: "2023-03-10T05:39:13Z",
      content:
        'Former President Donald Trump is lashing out and claiming to be the victim of a "weaponized justice system" following a report that he may soon be facing a criminal indictment in New York.\r\nThe New Y… [+3534 chars]',
    },
    {
      source: { id: "nfl-news", name: "NFL News" },
      author: null,
      title:
        "Chiefs LB Willie Gay Jr. arrested for misdemeanor criminal damage",
      description:
        "Kansas City Chiefs linebacker Willie Gay Jr. was arrested Wednesday night in Overland Park, Kansas, for misdemeanor criminal damage, according to the Johnson County Sheriff's Office.",
      url: "https://www.nfl.com/news/chiefs-lb-willie-gay-jr-arrested-for-misdemeanor-criminal-damage",
      urlToImage:
        "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/pquzq0utmp5beunmlrj0",
      publishedAt: "2022-01-20T20:22:44.409523Z",
      content:
        "Kansas City Chiefs linebacker Willie Gay Jr. was arrested Wednesday night in Overland Park, Kansas, for misdemeanor criminal damage, according to the Johnson County Sheriff's Office.\r\nGay, 23, was ar… [+1101 chars]",
    },
  ];


  



  render() {
    return (
        <div className="container my-5">
      
      <h1 className="my-4 mx-4">Morning News - Top Headlines</h1>
      {/*  */}

     <div className = "row md-4 my-3">
{        this.state.articles.map((element)=>console.log(element)) }
        <div className="col-md-4">
            <NewsItem title="mytitle" description="mydes" ImgUrl="https://www.irishtimes.com/resizer/EFFf3G3MEX2A1gWd3xt4DFKX468=/1200x630/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/WPRJHBNYRJG2CZMQDIHENBPQ5Q.jpg"/>
        </div>
  </div>

      
        {/* <div className="col-md-4">
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
    
    
            </div> */}
            
            
    )
  }
}

export default News

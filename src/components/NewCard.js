
import React, { Component } from 'react'
import NewsItem from './NewsItem';

export class NewCard extends Component {
    //   static propTypes = {}


// results = [
//         {
//             "source": {
//                 "id": "news24",
//                 "name": "News24"
//             },
//             "author": "Compiled by Craig Taylor",
//             "title": "Jansen's stellar rise sees Proteas all-rounder win top ICC award",
//             "description": "After a stellar 12-month period that's seen him become a regular for the Proteas in Test cricket, all-rounder Marco Jansen was named the ICC Men's Emerging Cricketer of the Year on Wednesday.",
//             "url": "https://www.news24.com/sport/cricket/proteas/jansens-stellar-rise-sees-proteas-all-rounder-win-top-icc-award-this.props.pageSize230125",
//             "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/7128/c9df4e33eae645e1b37f9aa9e0605f46.jpg",
//             "publishedAt": "this.props.pageSize23-01-25T17:09:36+00:00",
//             "content": "After a stellar 12-month period that's seen him become a regular for the Proteas in Test cricket, all-rounder Marco Jansen was named the ICC Men's Emerging Cricketer of the Year on Wednesday. \r\nREAD … [+2650 chars]"
//         }, {
//                     "source": {
//                         "id": "bbc-sport",
//                         "name": "BBC Sport"
//                     },
//                     "author": null,
//                     "title": "England U19s Women v West Indies U19s Women - Cricket - BBC Sport",
//                     "description": "Find out the in depth batting and bowling figures for England U19s Women v West Indies U19s Women in the Women's Under-19 Tthis.props.pageSize World Cup on BBC Sport.",
//                     "url": "http://www.bbc.co.uk/sport/cricket/scorecard/ECKO56089",
//                     "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png",
//                     "publishedAt": "this.props.pageSize23-01-25T15:22:this.props.pageSize.5906164Z",
//                     "content": "<table><tr><th>Batter</th><th>How Out</th><th>Bowler</th><th>Runs</th><th>Balls</th><th>4s</th><th>6s</th><th>Mins</th><th>SR</th></tr>\r\n<tr><th>Total</th><th>(this.props.pageSize.0 overs)</th><th>179-for4wickets</th… [+4774 chars]"
//                 },
//                 {
//                     "source": {
//                         "id": "news-com-au",
//                         "name": "News.com.au"
//                     },
//                     "author": "Holly Hales",
//                     "title": "Iconic brand’s big call on Clarke",
//                     "description": "<p>An iconic Australian company has distanced itself from cricketer Michael Clarke in the wake of his video scandal.</p>",
//                     "url": "https://www.news.com.au/sport/cricket/rm-williams-says-it-has-no-plans-to-work-with-michael-clarke-again-after-video-scandal/news-story/190546ed93972658f1c3afa37dd4832e",
//                     "urlToImage": "https://content.api.news/v3/images/bin/97ce9af079ea6cd1963a2d0e50dca384",
//                     "publishedAt": "this.props.pageSize23-01-25T03:34:00Z",
//                     "content": "An iconic Australian company has distanced itself from cricketer Michael Clarke in the wake of his video scandal.\r\nFootwear and clothing brand R.M. Williams confirmed it has “no plans” to work with C… [+2152 chars]"
//                 }
//     ]
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=Business&apiKey=aff037a5cc9c4235a67463a2c2b617e3&page=1&&pageSize=10`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({ articles: parseData.articles,loading:false })
    }

render() {
   
    return (
        <div className='row'>
        {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url} >
                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} Url={element.url} imageUrl={element.urlToImage}  author={element.author} date={element.publishedAt} source={element.source.name}/>

            </div>
        })}
    </div>

    )
}
}

export default NewCard
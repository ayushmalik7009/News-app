
import React, { Component } from 'react'


export class NewsItem extends Component {


    render() {
        let { id, title, description, imageUrl, Url,author,date,source } = this.props;
        return (
            <div className="card">
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{source}</h5>
                    <p className="card-text">{title}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{description}</li>
                    <li className="list-group-item">By {author? author: "unkonwn"} on {new Date(date).toGMTString()}</li>
             
                </ul>
                <div className="card-body">
                    <a href={Url} className="btn btn-sm btn-primary">link....</a>
                
                </div>
            </div>
        )
    }
}

export default NewsItem
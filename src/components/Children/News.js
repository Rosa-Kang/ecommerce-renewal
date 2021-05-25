import React, {Component} from 'react'

export default class News extends Component {

  render()
    {return (
       <div className="news__one">
        <img className="news__one--image" src={this.props.thumb} alt="story" />
        <div className="news__one--text">
          <h2 className="news__one--text--title">{this.props.title}</h2>
          <h3 className="news__one--text--meta">
            {this.props.meta} <span>By {this.props.author}</span>
          </h3>
          <p className="news__one--text--excerpt">{this.props.summary}</p>
          <p className="news__one--text--arrow">Read more →</p>
        </div>
      </div>
    )}
}


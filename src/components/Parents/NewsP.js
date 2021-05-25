import data from '../../assets/model/newsList';
import React, { Component } from "react";
import News from '../Children/News';


export default class NewsP extends Component {
 state = {
    newsLists: []
  };

  componentDidMount() {
    const newLists = data.map(list => {
      return {
        id: list.id,
        title: list.title,
        thumb: list.thumb,
        meta: list.meta,
        summary: list.summary,
        author: list.author,
        description: list.description
      };
    });

    this.setState({
      newsLists: newLists
    });
  }

  render() {
    return (
      <>
        <div className="newsNav">
          <h1 className="newsNav--title">News</h1>
          <ul className="newsNav--list">
            <li>
              <a href="all-article">All</a>
            </li>
            <li>
              <a href="process">Our Process</a>
            </li>
            <li>
              <a href="sustaining">Sustainability</a>
            </li>
            <li>
              <a href="travel">Travel</a>
            </li>
          </ul>
        </div>
        <div className="news">
          {this.state.newsLists.map(newsList => (
            <News
              id={newsList.id}
              title={newsList.title}
              meta={newsList.meta}
              thumb={newsList.thumb}
              author={newsList.author}
              description={newsList.description}
              summary={newsList.summary}
            />
          ))}
        </div>
      </>
    );
  }
}
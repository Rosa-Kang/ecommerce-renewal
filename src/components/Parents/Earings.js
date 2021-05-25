import React, { Component } from "react";
import Earing from "../Children/Earing";
import data from "../../assets/model/commonList";

export default class Earings extends Component {
  state = {
    commonLists: []
  };

  componentDidMount() {
    console.log(data);
    const newCommonLists = data.filter(list => {
      return list.category === "earing";
    });
    const sortedLists = newCommonLists.sort(
      (a, b) => parseFloat(b.promo) - parseFloat(a.promo)
    );
    const filteredLists = sortedLists.slice(0, 3);
    this.setState({
      commonLists: filteredLists
    });
  }

  render() {
    return (
      <div className="common-box">
        {this.state.commonLists.map(commonList => (
          <Earing
            id={commonList.id}
            category={commonList.category}
            title={commonList.title}
            price={commonList.price}
            thumb={commonList.thumb}
            thumb2={commonList.thumb2}
            model={commonList.model}
            description={commonList.description}
            sizing={commonList.sizing}
            materials={commonList.materials}
            environment={commonList.environment}
          />
        ))}
      </div>
    );
  }
}

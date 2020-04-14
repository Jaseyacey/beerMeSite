import React from "react";

export default class FetchRandomBeer extends React.Component {
  state = {
    loading: true,
    person: null
  };

  async componentDidMount() {
    const url = "GET https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries?by_state=NY&by_name=cooper&by_tag=patio&by_type=micro";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ beer: data.results[0], loading: false });
  }

  render() {
    if (this.state.loading) {
        
      return <div>fermenting on the home page</div>;
    }

    if (!this.state.beer) {
      return <div>didn't get a beer</div>;
    }

    return (
      <div>
        <div>{this.state.beer.name.title}</div>
        <div>{this.state.beer.name.first}</div>
        <div>{this.state.beer.name.last}</div>
        <img src={this.state.beer.picture.large} alt=""/>
      </div>
    );
  }
}
import React from 'react';

export default class beerapi extends React.Component {
    state = {
        loading: true,
        beer: null,
    };

    componentDidMount() {
        const url = "https://api.untappd.com/v4/method_name?client_id=CLIENTID&client_secret=CLIENTSECRET";
        const response =  fetch(url);
        const data =  response.json();
        this.setState({beer: results[0]})
        console.log(data.results[0]);
    }

    render() {
        return(
            <div >
                {this.state.loading ? <div>loading...</div> : <div>beer..</div>}
            </div>
        )
    }
}
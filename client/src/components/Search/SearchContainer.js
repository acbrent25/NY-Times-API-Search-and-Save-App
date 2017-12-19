import React, { Component } from 'react';
import API from "../../utils/API";
import Search from './Search';

class SearchContainer extends Component {
    state = {
        result: {},
        search: ""
    }

    searchArticles = (query) => {
        API.search(query)
          .then(res => this.setState({ result: res.data }))
          .catch(err => console.log(err));
      };

      handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
      };
      
      handleFormSubmit = event => {
        event.preventDefault();
        this.searchArticles("&q=" + this.state.query + "&begin_date=" + this.state.startDate + "&end_date=" + this.state.endDate);
      };


    render() {
        return (
            <div>
            <Search
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </div>
        );
    }
}

export default SearchContainer;
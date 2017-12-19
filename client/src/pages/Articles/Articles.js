import React, { Component } from 'react';
import API from '../../utils/API';
import Card from '../../components/Card/Card';
import { ArticleList, ArticleListItem } from "../../components/ArticleList";
import SearchContainer from '../../components/Search/SearchContainer';
import './Article.css';


class Articles extends Component {
    // Setting our component's initial state
    state = {
        articles: [],
        title: "",
        date: "",
        url: "",
    }

    // When the component mounts, load all articles and save them to this.state.articles
    componentDidMount() {
        this.loadArticles();
    }

    // Loads all articles  and sets them to this.state.articles
    loadArticles = () => {
        API.getArticles()
        .then(res =>
            this.setState({ articles: res.data, title: "", date: "", url: "" })
        )
        .catch(err => console.log(err));
    };

    handleFormSubmit = event => {
        event.preventDefault();
    }


    render() {
        return (
            <div>
                {/* Search Section */}
                <SearchContainer/>
                
                {/* Results Section */}
                <Card title="Results">
                    
                </Card>

                {/* Saved Article Section */}
                <Card title="Saved Articles">
                {this.state.articles.length ? (
                    <ArticleList>
                        {this.state.articles.map(article => {
                        return (
                            <ArticleListItem key={article._id}>Date: <strong>{article.date}: </strong>
                            <a href={article.url} target="_blank">
                                <strong>
                                {article.title}
                                </strong>
                            </a>
                            {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
                            </ArticleListItem>
                        );
                        })}
                    </ArticleList>
            ) : (
              <h3>No Results to Display</h3>
            )}
                </Card>


            </div>// Outer div 
        );
    }
}

export default Articles;


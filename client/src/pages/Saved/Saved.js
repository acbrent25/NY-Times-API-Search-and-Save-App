import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from '../../components/Grid';
import {List, ListItem} from '../../components/List';
import Jumbotron from '../../components/Jumbotron';
import API from '../../utils/API';

class Saved extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getSavedArticles()
      .then(res => {
        console.log(res.data);
        this.setState({
          articles: res.data
        })
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  render() {
    return (
        <Row id="saved">
          <Col size="col-md-8 col-sm-12 m-auto">
            {this.state.articles.length ? (
              <List>
                {this.state.articles.map(article => (
                  <ListItem key={article._id}>
                  <Row>
                    <Col size="col-md-8 col-xs-12">
                    <a href={article.url} target="_blank">
                      <strong>{article.title}</strong>
                    </a>
                    <br />
                    <span>Published on {article.date}</span>
                    </Col>
                    <Col size="col-md-4 col-xs-12">
                    <button
                      className="btn btn-danger"
                      style={{ float: 'right' }}
                      onClick={() => this.deleteArticle(article._id)}
                    >
                      Delete Article
                    </button>
                    </Col>
                  </Row>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Saved Articles to Display</h3>
            )}
          </Col>
        </Row>
    );
  }
}

export default Saved;

import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import API from '../../utils/API';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from '../../components/Grid';
import { List, ListItem } from '../../components/List';
import { Input, TextArea, FormBtn } from '../../components/Form';
import './Main.css'


class Main extends Component {
  state = {
    articles: [],
    queryTerm: '',
  };

  getArticles = () => {
    let query = `${this.state.queryTerm}`;
    if (this.state.startDate) {
      query = `${query}&begin_date=${this.state.startDate}0101`;
    }
    if (this.state.endDate) {
      query = `${query}&end_date=${this.state.endDate}1231`;
    }

    API.nytSearch(query)
      .then(res => {
        console.log(res);
        this.setState({
          articles: res.data.response.docs,
          queryTerm: '',
          startDate: '',
          endDate: ''
        });
      })
      .catch(err => console.log(err));
  };


  saveArticle = articleInfo => {
    API.saveArticle(articleInfo)
      .then(res => {
        console.log('hey it saved');
      })
      .catch(err => {
        console.log(err);
      })
  }


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.queryTerm) {
      this.getArticles();
    }
  };

  render() {
    return (
      <div>
        <Row>
          <Col size="col-md-12">
            <Jumbotron id="main-tron">
              <div className="overlay">
              <h1 className="text-center">Search for a topic</h1>
              <Row>
                <Container>
                  <Col size="col-md-12" id="search">
                    <form>
                      <Row>
                        <Col size="col-md-4">
                          <Input
                            value={this.state.queryTerm}
                            onChange={this.handleInputChange}
                            name="queryTerm"
                            placeholder="Topic (required)"
                          />
                        </Col>

                        <Col size="col-md-3">
                          <Input
                            value={this.state.startDate}
                            onChange={this.handleInputChange}
                            name="startDate"
                            placeholder="Start Year: (2016)"
                          />
                        </Col>


                        <Col size="col-md-3">
                          <Input
                            value={this.state.endDate}
                            onChange={this.handleInputChange}
                            name="endDate"
                            placeholder="End Year: (2017)"
                          />

                        </Col>

                        <Col size="col-md-2">
                          <FormBtn disabled={!this.state.queryTerm} onClick={this.handleFormSubmit}>
                            Submit Search
                          </FormBtn>
                        </Col>
                      </Row>
                    </form>
                  </Col>
                </Container>
              </Row>
              </div>
            </Jumbotron>
          </Col>
        </Row>

        <Container>
          <Row>
            <Col size="col-md-12">
              <Jumbotron id="results-tron">
                <h1>Article Results</h1>
              </Jumbotron>
              {this.state.articles.length ? (
                <List>
                  {this.state.articles.map(article => (
                    <ListItem key={article._id}>
                      <a href={article.web_url} target="_blank">
                        <strong>{article.headline.main}</strong>
                      </a>
                      <br />
                      <span>Published on {article.pub_date}</span>
                      <button className="btn btn-primary" style={{ float: "right" }} onClick={() => this.saveArticle({
                        title: article.headline.main,
                        url: article.web_url,
                        date: article.pub_date
                      })}> Save Article </button>
                    </ListItem>
                  ))}
                </List>
              ) : (
                  <h3>No Results to Display</h3>
                )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Main;

import React, { Component } from 'react';
import API from '../../utils/API';
import Card from '../../components/Card/Card';
import './Article.css';


class Articles extends Component {
    render() {
        return (
            <div>
                <Card title="search">
                    <form>
                        <div className="form-group">
                            <label for="topic">Topic</label>
                            <input type="text" className="form-control" name="topic" id="topic"/>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label for="topic">Start Year</label>
                                    <input type="number" className="form-control" name="start-year" id="start-year"/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label for="topic">End Year</label>
                                    <input type="number" className="form-control" name="end-year" id="end-year"/>
                                </div>
                            </div>
                        </div>
                    </form>
                </Card>
            </div>
        );
    }
}

export default Articles;


import React, { Component } from 'react';
import Card from '../Card/Card'; 

const Search = props =>
    
    <Card title="search">
        <form>
            <div className="form-group">
                <label htmlFor="topic">Topic</label>
                <input onChange={props.handleInputChange} value={props.query} type="text" className="form-control" name="query" id="topic"/>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="topic">Start Year</label>
                        <input onChange={props.handleInputChange} value={props.startYear} type="number" className="form-control" name="startYear" id="start-year"/>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="topic">End Year</label>
                        <input onChange={props.handleInputChange} value={props.endYear} type="number" className="form-control" name="endYear" id="end-year"/>
                    </div>
                </div>
                <button onClick={props.handleFormSubmit} className="btn btn-primary m-auto">
                    Search
                </button>
            </div> 
        </form>
    </Card>;
    

export default Search;
import React, { Component } from 'react';

const Card = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col md-8">
                    <div className="card">
                        <div class="card-header">
                            {props.title}
                        </div>
                        <div class="card-body">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default Card;
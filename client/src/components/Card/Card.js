import React from 'react';

const Card = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col md-8">
                    <div className="card">
                        <div className="card-header">
                            {props.title}
                        </div>
                        <div className="card-body">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default Card;
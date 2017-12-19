import React from 'react';


export const ArticleList = ({children}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <ul className="list-group">
                        {children}
                    </ul>
                </div>
            </div>
        </div>
       
    );
};


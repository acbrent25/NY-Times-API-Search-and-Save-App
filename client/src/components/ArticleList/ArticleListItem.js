import React from 'react';

export const ArticleListItem = (props) => {
    return (
        <li className="list-group-item">
            {props.children}
        </li>
    );
};


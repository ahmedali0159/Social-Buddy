import React from 'react';

const Comment = (props) => {
    const {name, email} = props.comment;
    return (
        <div>
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
    );
};

export default Comment;
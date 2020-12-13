import React from 'react';

const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a className="avatar">
        <img alt="avatar" src={props.image} />
      </a>
      <div className="content">
        <a className="author">{props.author}</a>
        <div className="metadata">
          <span className="date">{props.timestamp}</span>
        </div>
        <div className="text">
          {props.comment}
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
import React from 'react';

const Comment = props => {
  const comment = props.comment;

  return (
    <div className="card" data-testid="comment">
      <div className="card-block">
        <p className="card-text">{comment.body}</p>
      </div>
      <div className="card-footer">
        <span className="comment-author">
          <img
            alt={comment.author.username}
            data-testid="comment-author-img"
            className="comment-author-img"
            src={comment.author.image}
          />
        </span>
        &nbsp;
        <span className="comment-author">
          {comment.author.username}
        </span>
        <span className="date-posted">
          {new Date(comment.createdAt).toDateString()}
        </span>
      </div>
    </div>
  );
};

export default Comment;

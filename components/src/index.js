import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from './comment-detail.component';
import ApprovalCard from './approval-card.component';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div class="card">
          <CommentDetail
            image="http://dummy-images.com/people/dummy-100x100-CharlesBaudelaire.jpg"
            author="Chetan"
            timestamp="May 30, 2020 10:00"
            comment="Awsome!"
          />
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          image="http://dummy-images.com/people/dummy-100x100-RobertDeNiro.jpg"
          author="Sam"
          timestamp="June 23, 2020 22:00"
          comment="Beautiful!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          image="http://dummy-images.com/people/dummy-100x100-ShandiLee.jpg"
          author="jane"
          timestamp="May 30, 2020 17:00"
          comment="Amazing work!"
        />
      </ApprovalCard>
    </div>
  );
}

ReactDom.render(<App />, document.querySelector('#root'));
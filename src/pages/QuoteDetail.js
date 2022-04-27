import React from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
  const params = useParams();
  const { quoteId } = params;

  return (
    <>
      <h1>QuoteDetail</h1>
      <div>{quoteId}</div>

      {/* <Route path={`/quotes/:id/comments`} exact> */}
      <Route path={`/quotes/${quoteId}/comments`} exact>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;

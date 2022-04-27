import React from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const QUOTES = [
  { id: "q1", author: "othmane", text: "react is good" },
  { id: "q2", author: "ouaklim", text: "react is great" },
];

const QuoteDetail = () => {
  const params = useParams();
  const { quoteId } = params;

  //* Get the quote matched with the params's id :
  const quote = QUOTES.find((quote) => quote.id === quoteId);

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      {/* <Route path={`/quotes/:id/comments`} exact> */}
      <Route path={`/quotes/${quoteId}/comments`} exact>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;

import React from "react";
import { Link } from "react-router-dom";
import { Route, useParams, Redirect } from "react-router-dom";
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

  if (!quote) {
    return;
    // return <Redirect to="/*" />;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />

      <Route path={`/quotes/${quoteId}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${quoteId}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>

      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route>
      {/* <Route path={`/quotes/:id/comments`} exact> */}
    </>
  );
};

export default QuoteDetail;

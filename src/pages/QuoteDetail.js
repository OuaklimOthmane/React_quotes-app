import React from "react";
import {
  Route,
  useParams,
  useRouteMatch,
  Link,
  Redirect,
} from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const QUOTES = [
  { id: "q1", author: "othmane", text: "react is good" },
  { id: "q2", author: "ouaklim", text: "react is great" },
];

const QuoteDetail = () => {
  const match = useRouteMatch();
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

      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>

      {/* <Route path={`/quotes/:id/comments`} exact> */}
      {/* <Route path={`/quotes/${quoteId}/comments`}> */}
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;

//! useRouteMatch() :
//? The "useRouteMatch" hook attempts to match the current URL in the same way that a <Route> would. It's mostly useful for getting access to the match data without actually rendering a <Route>

//! match.url Vs match.path :
//?  "match.url" is MORE SPECIFIC than "match.path".
//? "match.path" - (string) The path pattern used to match. Useful for building nested "<Route>s" ------>  path: '/quotes/:quotesId'

//? "match.url" - (string) The matched portion of the URL. Useful for building nested "<Link>s" ------>  URL: '/quotes/q2'

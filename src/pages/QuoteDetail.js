import React, { useEffect } from "react";
import { Route, useParams, useRouteMatch, Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();
  const { quoteId } = params;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p className="centered">No quote found !!</p>;
  }

  return (
    <>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />

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

import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  //! Extract the query params :
  const queryParams = new URLSearchParams(location.search); // "location.search" returns a string containing all the query parameters.
  // "URLSearchParams" API so that you can extract the query params and their values

  //! Define the query value :
  const isSortingAscending = queryParams.get("sort") === "asc";

  //! Sorting the quotes :
  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  //! Define a query :
  const changeSortingHandler = () => {
    // history.push("/quotes?sort=" + (isSortingAscending ? "desc" : "asc"));
    history.push({
      pathname: `${location.pathname}`,
      search: `?sort=${isSortingAscending ? "desc" : "asc"}`,
    });
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? "descending" : "ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;

//! useLocation() hook:
//? The "useLocation" hook is a function that returns the location object that contains information about the current URL. this is like a state that always returns your current URL. Whenever the URL changes, a new location object will be returned.
//? Location object properties:
// "hash" : the anchor part (#)
// "pathname" : the path name
// "search" : the query string part
// "state"
// "key"

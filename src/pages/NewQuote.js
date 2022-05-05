import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const NewQuote = (props) => {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === "completed") {
      //* Redirct to the quotes page :
      history.push("/quotes");
    }
  }, [status, history]);

  const AddQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={AddQuoteHandler} />
  );
};

export default NewQuote;

//! useHistory :
//? The "useHistory" hook gives you access to the history instance that you may use to navigate.
//? "push(path, [state])": Pushes a new entry onto the history stack. Useful to redirect users to page.
//? "replace(path, [state])": Replaces the current entry on the history stack.

//* In this case we progammed the navigation cause we need to use a button instead of using a <Link/> component, because we have to submit the form and also redircting to the quotes page, that's why we programmed the navigation imperatively.

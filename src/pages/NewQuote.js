import React from "react";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = (props) => {
  const AddQuoteHandler = (quoteData) => {
    console.log(quoteData);
  };

  return <QuoteForm onAddQuote={AddQuoteHandler} />;
};

export default NewQuote;

import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const QUOTES = [
  { id: "q1", author: "othmane", text: "react is good" },
  { id: "q2", author: "ouaklim", text: "react is great" },
];

const AllQuotes = () => {
  return <QuoteList quotes={QUOTES} />;
};

export default AllQuotes;

import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

//* Regular imports :
// import NewQuote from "./pages/NewQuote";
// import QuoteDetail from "./pages/QuoteDetail";
// import NotFound from "./pages/NotFound";
// import AllQuotes from "./pages/AllQuotes";

//* Lazy-loading design pattern :
const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const AllQuotes = React.lazy(() => import("./pages/AllQuotes"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>

          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>

          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>

          <Route path="/new-quote">
            <NewQuote />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;

//? This <Route path="*" /> handles nonexistent routes in a special way. The asterisk at the path prop causes the route to be called when a nonexistent path is hit.

//! Why is Lazy Loading (& Suspense) Important
//? Firstly, bundling involves aligning our code components in progression and putting them in one javascript chunk that it passes to the browser; but as our application grows, we notice that bundle gets very cumbersome in size. This can quickly make using your application very hard and especially slow. With Code splitting, the bundle can be split to smaller chunks where the most important chunk can be loaded first and then every other secondary one lazily loaded.

//? Lazy loading is a design pattern and a technique to achieve faster application initialization on the web, especially for huge applications. It does this by allowing the developer break down an application into chunks (modules) per route and loads only the module(s) required for the route being visited. Its key principle being: Load only what you need when you need it.

//! React.lazy() :
//? "React.lazy()" makes it easy to create components that are loaded using dynamic import() but rendered like regular components. This automatically causes the bundle containing the component to load when the component is rendered.
//? React.lazy(()=> import("path of the component being lazily loaded"))

//! <Suspense/> :
//? Suspense is a component required by the lazy function basically used to wrap lazy components. Multiple lazy components can be wrapped with the suspense component. It takes a fallback property that accepts the react elements you want to render as the lazy component is being loaded.

//? "React.Suspense" is a component for wrapping lazy components. You can wrap multiple lazy components at different hierarchy levels with a single Suspense component.

//? The "Suspense" component takes a fallback prop that accepts the React elements you want rendered as placeholder content while all the lazy components get loaded.
//? "fallback" is a prop which holds some JSX code (ex: spinner component or some text) that is shown before the lazy component was loaded.

//! Syntax of the lazy-loading pattern :
// React.lazy(()=> import("path of the component being lazily loaded"))

// <Suspense fallback={<div>Loading ...</div>}>
//   <LazyComponent />
// </Suspense>

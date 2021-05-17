import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "todomvc-app-css/index.css";

import Footer from "../components/Footer";
import TodoList from "../containers/TodoList";

export default function App() {
  // eslint-disable-next-line
  // @ts-ignore
  const currentCommitId = window._env_.GIT_COMMIT_SHA;
  // eslint-disable-next-line
  console.log("Current Version: ", currentCommitId);
  return (
    <HashRouter>
      <React.Fragment>
        <div className="todoapp">
          <Route path="/:filter?" component={TodoList} />
        </div>
        <Footer />
      </React.Fragment>
    </HashRouter>
  );
}

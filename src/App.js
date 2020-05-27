import React from "react";
import Layout from "./hoc/Layout/Layout";
import Quiz from "./containers/Quiz/Quiz";
import { Switch, Route } from "react-router-dom";
import Auth from "./containers/Auth/Auth";
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import QuizList from "./containers/QuizList/QuizList";

function App() {
  return (
    <Layout>
      <Switch>
        <Route to="/auth" component={Auth} />
        <Route to="/quiz-creator" component={QuizCreator} />
        <Route to="/quiz/:id" component={Quiz} />
        <Route to="/" component={QuizList} />
      </Switch>
    </Layout>
  );
}

export default App;

// "homepage": "https://priyanka7976.github.io/NewsApp3",
// "predeploy": "npm run build",
// "deploy": "gh-pages -d build",
import "./App.css";

import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import News from "./Component/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  // p = "Priyanka";

  const [progress, setProgress] = useState(0);

  return (
    <div>
      {/* this is a news app made by {p} */}
      <Router>
        <Navbar />
        <LoadingBar color="#f11946" progress={progress} />

        <Switch>
          <Route exact path="/" key="general">
            <News
              setProgress={setProgress}
              country="us"
              pageSize={12}
              category="general"
            />
          </Route>
          <Route exact path="/business" key="business">
            <News
              setProgress={setProgress}
              country="us"
              pageSize={12}
              category="business"
            />
          </Route>
          <Route exact path="/entertainment" key="entertainment">
            <News
              setProgress={setProgress}
              country="us"
              pageSize={12}
              category="entertainment"
            />
          </Route>
          <Route exact path="/health">
            <News
              setProgress={setProgress}
              country="us"
              pageSize={12}
              category="health"
              key="health"
            />
          </Route>
          <Route exact path="/science">
            <News
              setProgress={setProgress}
              country="us"
              pageSize={12}
              category="science"
              key="science"
            />
          </Route>
          <Route exact path="/sports">
            <News
              setProgress={setProgress}
              country="us"
              pageSize={12}
              category="sports"
              key="sports"
            />
          </Route>
          <Route exact path="/technology">
            <News
              setProgress={setProgress}
              country="us"
              pageSize={12}
              category="technology"
              key="technology"
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

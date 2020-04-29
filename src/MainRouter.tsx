import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProjectsListScreen from 'projects/ProjectsListScreen'
import ProjectMenuScreen from 'projects/ProjectMenuScreen'

export default function MainRouter() {
  return (
    <Router>
      <div>
        
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <ProjectsListScreen></ProjectsListScreen>
          </Route>
          <Route path="/project_menu">
            <ProjectMenuScreen></ProjectMenuScreen>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
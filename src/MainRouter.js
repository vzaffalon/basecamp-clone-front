import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProjectsListScreen from 'projects/ProjectsListScreen'
import ProjectMenuScreen from 'projects/ProjectMenuScreen'
import MessageBoardListScreen from "projects/message_board/MessageBoardListScreen";

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
          <Route path="/message_board">
            <MessageBoardListScreen></MessageBoardListScreen>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
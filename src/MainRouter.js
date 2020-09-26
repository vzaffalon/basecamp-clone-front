import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProjectsListScreen from 'projects/ProjectsListScreen'
import NewProjectScreen from 'projects/NewProjectScreen'
import ProjectMenuScreen from 'projects/ProjectMenuScreen'
import MessageBoardListScreen from "projects/message_board/MessageBoardListScreen";
import NewMessageBoardScreen from "projects/message_board/NewMessageBoardScreen";
import TodoListScreen from 'projects/todos/TodoListScreen.js';

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
          <Route path="/new_project">
            <NewProjectScreen></NewProjectScreen>
          </Route>
          <Route path="/message_boards">
            <MessageBoardListScreen></MessageBoardListScreen>
          </Route>
          <Route path="/new_message_board">
            <NewMessageBoardScreen></NewMessageBoardScreen>
          </Route>
          <Route path="/todo_lists">
            <TodoListScreen></TodoListScreen>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
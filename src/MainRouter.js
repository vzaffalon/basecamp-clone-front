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
import CalendarScreen from 'projects/calendar/CalendarScreen.js';
import ShowMessageBoardScreen from "projects/message_board/ShowMessageBoardScreen";
import EditMessageBoardScreen from "projects/message_board/EditMessageBoardScreen";

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
          <Route path="/show_message_board">
            <ShowMessageBoardScreen></ShowMessageBoardScreen>
          </Route>
          <Route path="/edit_message_board">
            <EditMessageBoardScreen></EditMessageBoardScreen>
          </Route>
          <Route path="/todo_lists">
            <TodoListScreen></TodoListScreen>
          </Route>
          <Route path="/calendar">
            <CalendarScreen></CalendarScreen>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
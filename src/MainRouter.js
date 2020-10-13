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
import EditProjectScreen from "projects/EditProjectScreen";
import DocumentsListScreen from "projects/docs/DocumentsListScreen";
import LoginScreen from 'login/LoginScreen';
import RegisterScreen from 'login/RegisterScreen';

export default function MainRouter() {
  return (
    <Router>
      <div>
        
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <LoginScreen></LoginScreen>
          </Route>
          <Route exact path="/login">
            <LoginScreen></LoginScreen>
          </Route>
          <Route exact path="/register">
            <RegisterScreen></RegisterScreen>
          </Route>
          <Route exact path="/projects">
            <ProjectsListScreen></ProjectsListScreen>
          </Route>
          <Route path="/projects/:id/project_menu">
            <ProjectMenuScreen></ProjectMenuScreen>
          </Route>
          <Route path="/projects/:id/edit_project">
            <EditProjectScreen></EditProjectScreen>
          </Route>
          <Route path="/new_project">
            <NewProjectScreen></NewProjectScreen>
          </Route>
          <Route path="/projects/:id/message_boards">
            <MessageBoardListScreen></MessageBoardListScreen>
          </Route>
          <Route path="/projects/:id/new_message_board">
            <NewMessageBoardScreen></NewMessageBoardScreen>
          </Route>
          <Route path="/message_boards/:id/show_message_board">
            <ShowMessageBoardScreen></ShowMessageBoardScreen>
          </Route>
          <Route path="/message_boards/:id/edit_message_board">
            <EditMessageBoardScreen></EditMessageBoardScreen>
          </Route>
          <Route path="/projects/:id/todo_lists">
            <TodoListScreen></TodoListScreen>
          </Route>
          <Route path="/projects/:id/documents">
            <DocumentsListScreen></DocumentsListScreen>
          </Route>
          <Route path="/projects/:id/calendar">
            <CalendarScreen></CalendarScreen>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
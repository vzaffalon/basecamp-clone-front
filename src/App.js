import React from 'react';
import styled from 'styled-components';
import MainRouter from 'MainRouter';


function App() {
  return (
    <AppContainer>
      <ApplicationBackground>
        <MainRouter></MainRouter>
      </ApplicationBackground>
    </AppContainer>
  );
}

const AppContainer = styled.div`
    text-align: center;
    background-color: #F6F2EF;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: auto;
    font-family: "Graphik", "Helvetica Neue", helvetica, "Apple Color Emoji", arial, sans-serif;
`;

const ApplicationBackground = styled.div`
    flex: 1;
`
export default App;

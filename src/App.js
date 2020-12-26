import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MainRouter from 'MainRouter';
import axios from 'axios';


const setAxiosInterceptor = () => {
  let token = localStorage.getItem('token')
  if(token){
    axios.interceptors.request.use(
      async (config) => {
       config.headers.Authorization = `Bearer ${token}`;
        return config;
      },
      (error) => {
        localStorage.removeItem('token')
        return Promise.reject(error);
      }
    );
  }
}


function App() {
  const [finishedLoading, setFinishedLoading] = useState(false)

  useEffect(() => {
    setAxiosInterceptor()
    setFinishedLoading(true)
  },[])

  return (
    <div>
      {finishedLoading ? <AppContainer>
        <ApplicationBackground>
          <MainRouter></MainRouter>
        </ApplicationBackground>
      </AppContainer> : null}
    </div>
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

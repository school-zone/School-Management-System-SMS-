import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar1 from './Components/navbar1';
import HelloWorld from './Components/helloWorld';
import Content from './Components/firstPageContent';

function App() {
  return (
    <React.Fragment>

      <NavBar1 />
      <main role="main">

        {/* <!-- Main jumbotron for a primary marketing message or call to action --> */}
        <HelloWorld />

        {/* <!-- /container --> */}
        <Content />

        <footer class="container">
          <p>&copy; A@M Software Solutions 2020</p>
        </footer>
      </main>
    </React.Fragment>
  );
}

export default App;

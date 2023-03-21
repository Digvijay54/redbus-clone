// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Home from './Home';
import List from './List';
import Checkout from './Checkout';
import Register from './Register';
import Login from './Login';
import NotFound from './NotFound';

import Header from './template/Header';
import Menubar from './template/Menubar';
import Footer from './template/Footer';
import LeftSidebar from './template/LeftSidebar';
import RightSidebar from './template/RightSidebar';
import DataApp from './DataApp';
import { Button } from 'bootstrap';

function App() {
  return (

    <BrowserRouter>
        <DataApp>
          
            <Container className='container-fluid'>

              <Header/>
              <Menubar/>

              <Row>
                {/* <Col xs={3} className='bg-primary'>
                    <LeftSidebar/>
                </Col> */}

                <Col xs={12}>
                  <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/list" element={<List/>}/>
                    <Route path="/checkout" element={<Checkout/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>

                    <Route path='/' element={<Home/>}/>
                    <Route path='/*' element={<NotFound/>}/>
                  </Routes>
                </Col>

                {/* <Col xs={3} className='bg-primary'>
                  <RightSidebar/>
                </Col> */}

              </Row>

              <Footer/>

            </Container>
        </DataApp>
    </BrowserRouter>
  );
}

export default App;

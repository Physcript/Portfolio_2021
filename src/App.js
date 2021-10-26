
import { Grid,Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom'

// components
import Menu from './components/Menu'
import About from './components/About'

import 'semantic-ui-css/semantic.min.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Container>
            <Grid>
              <Grid.Column computer = { 5 } tablet = { 16 } style = {{ margin: '0', padding: '0'}} >
                <Menu />
              </Grid.Column>
              <Grid.Column computer = { 11 } tablet = { 16 } style = {{ margin: '0', padding: '0'}} >
                <Route exact path = '/' components = { About } >
                  <About />
                </Route> 
              </Grid.Column>
            </Grid>
          </Container>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

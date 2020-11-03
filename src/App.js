import LoginScreen from "./components/LoginScreen";
import { Grid, Segment } from "semantic-ui-react";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <Grid columns="equal">
          <Grid.Row>
            <Grid.Column>
              <Segment>
                <LoginScreen />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </>
  );
}

export default App;

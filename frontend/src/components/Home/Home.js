import React, { PureComponent } from "react";
import Grid from "material-ui/Grid";

import NotStarted from "../NotStarted/NotStarted";
import InProgress from "../InProgress/InProgress";
import Completed from "../Completed/Completed";

class Home extends PureComponent {
  render() {
    return (
      <Grid container spacing={24}>
        <Grid item md={4} lg={4}>
          <NotStarted />
        </Grid>
        <Grid item md={4} lg={4}>
          <InProgress />
        </Grid>
        <Grid item md={4} lg={4}>
          <Completed />
        </Grid>
      </Grid>
    );
  }
}

export default Home;

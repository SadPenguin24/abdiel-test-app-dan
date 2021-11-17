import React from "react";
import { useDispatch } from "react-redux";
import store from "../store";
import { logout } from "../actions/userActions";

import { Box, Container, Grid, Button } from "@mui/material";
import { Budget } from "../component/dashboard/budget";
import { LatestOrders } from "../component/dashboard/latest-orders";
import { LatestProducts } from "../component/dashboard/latest-products";
import { Sales } from "../component/dashboard/sales";
import { TasksProgress } from "../component/dashboard/tasks-progress";
import { TotalCustomers } from "../component/dashboard/total-customers";
import { TotalProfit } from "../component/dashboard/total-profit";
import { TrafficByDevice } from "../component/dashboard/traffic-by-device";
import { DashboardLayout } from "../component/dashboard-layout";
import { Typography } from "@mui/material";

function DashboardScreen(props) {
  let state = store.getState();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  let name;

  try {
    name = state.userLogin.userInfo.name;
  } catch {
    console.log("no name");
    name = state.userRegister.userInfo.name;
  }
  console.log(state);
  return (
    <div>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item>
              <Typography variant="h2">Hello {name}</Typography>
            </Grid>
            <Grid item>
              <Button variant="outlined" onClick={logoutHandler}>
                Logout
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <Budget />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <TotalCustomers />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <TasksProgress />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <TotalProfit sx={{ height: "100%" }} />
            </Grid>
            <Grid item lg={8} md={12} xl={9} xs={12}>
              <Sales />
            </Grid>
            <Grid item lg={4} md={6} xl={3} xs={12}>
              <TrafficByDevice sx={{ height: "100%" }} />
            </Grid>
            <Grid item lg={4} md={6} xl={3} xs={12}>
              <LatestProducts sx={{ height: "100%" }} />
            </Grid>
            <Grid item lg={8} md={12} xl={9} xs={12}>
              <LatestOrders />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Typography variant="overline">
        NOTE!! DATA SHOWN HERE ARE FOR TEST PURPOSES ONLY
      </Typography>
    </div>
  );
}

DashboardScreen.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default DashboardScreen;

import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import React from "react";

import CardFeed from "../CardFeed/CardFeed";
import { StyledTapPanel, StyledTabs } from "./styled"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

export default function TapPanel({restaurants}) {
  const [value, setValue] = React.useState(0);
  const typeRestaurants = Object.keys(restaurants)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <StyledTapPanel>
      <AppBar position="static" color="default">
        <StyledTabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {typeRestaurants && typeRestaurants.map((typeRestaurantName, index) => (
            <Tab label={typeRestaurantName} {...a11yProps(index)} key={index}/>
          ))}
        </StyledTabs>
      </AppBar>
      {typeRestaurants.map((typeRestaurant, index) => (
        <TabPanel value={value} index={index} key={typeRestaurant.id}>
          {restaurants && restaurants[ typeRestaurants[index] ].map(restaurant => (
            <CardFeed 
              key={restaurant.id}
              id={restaurant.id}
              description={restaurant.description}
              shipping={restaurant.shipping}
              address={restaurant.address}
              name={restaurant.name}
              logoUrl={restaurant.logoUrl}
              deliveryTime={restaurant.deliveryTime}
              category={restaurant.category}
            />
          ))}
        </TabPanel>
      ))}
    </StyledTapPanel>
  );
}

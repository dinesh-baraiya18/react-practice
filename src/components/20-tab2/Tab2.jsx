import { useEffect, useState } from "react";
import "./tab2.css";
import PropTypes from "prop-types";
import { Tabs, Tab, Typography, Box, Container } from "@mui/material";
import digitalData from "./data";
import { Fade } from "react-reveal";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`digital-tabpanel-${index}`}
      aria-labelledby={`digital-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `digital-tab-${index}`,
    "aria-controls": `digital-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [screenSize, setScreenSize] = useState(
    window.innerWidth <= 767 ? true : false
  );
  const [value, setValue] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth <= 767 ? true : false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="digital-tab-section">
      <Container>
        <Box
          className="digital-tab-inner"
          sx={{
            flexGrow: 1,
            bgcolor: "background.paper",
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <Tabs
            className="tab-links"
            orientation={screenSize ? "" : "vertical"}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile={screenSize}
            value={value}
            onChange={handleChange}
            sx={{ borderRight: 1, borderColor: "divider", maxHeight: 500 }}
          >
            {digitalData?.map(({ title, id }, i) => (
              <Tab label={title} {...a11yProps(i)} key={id} />
            ))}
          </Tabs>

          {digitalData?.map(({ discsription, id }, i) => (
            <TabPanel value={value} index={i} key={id}>
              <Fade up>{discsription}</Fade>
            </TabPanel>
          ))}
        </Box>
      </Container>
    </section>
  );
}

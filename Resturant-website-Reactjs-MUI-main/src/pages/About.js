import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 3,
          borderRadius: "10px",
          backgroundColor: "#98fb98", // Cheerful background color
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Subtle box shadow
          "& h4": {
            fontWeight: "bold",
            my: 3,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
            lineHeight: "1.6",
            color: "#333", // Darker text color for better readability
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.8rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To Pranjul's Restaurant</Typography>
        <p>
          Indulge in a sensory symphony at <b>Pranjul's Restaurant</b>, where culinary finesse meets
          unparalleled hospitality. We take immense pride in curating an exquisite dining experience
          for our discerning guests. Immerse yourself in a world of culinary delight as our chefs
          meticulously craft each dish with precision and passion.
        </p>
        <br />
        <p>
          Our commitment transcends the plate; it's a promise to deliver an unmatched dining
          experience. From the moment you step through our doors, our attentive staff ensures that
          every aspect of your visit is attended to, creating an ambiance that exudes warmth and
          sophistication.
        </p>
        <p>
          Explore a menu that artfully combines global influences, each dish a masterpiece designed to
          tantalize your taste buds and evoke a sensory journey. The artistry on your plate mirrors the
          dedication to excellence found in our establishment, where meticulous attention to detail is
          the foundation of our culinary philosophy.
        </p>
        <br />
        <p>
          At Verman's Restaurant, we believe in creating lasting memories beyond just serving meals.
          Join us for an unparalleled dining experience where every moment is infused with genuine
          hospitality and the joy of savoring exceptional cuisine. Your satisfaction is our priority,
          and we invite you to partake in the authentic expression of our passion for food and service.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
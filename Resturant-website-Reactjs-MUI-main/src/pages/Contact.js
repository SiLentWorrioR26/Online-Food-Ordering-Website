import React from "react";
import Layout from "./../components/Layout/Layout";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import FeedbackIcon from "@mui/icons-material/Feedback";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  const googleFormURL = "https://forms.gle/zAi5LMq2qpDKb1op6"; 
  const emailAddress = "pranjulpand3@gmail.com";
 // const phoneNumber = "6377408759";
  return (
    <Layout>
      {/* Contact Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          backgroundColor: "#7fffd4", // Cheerful background color
          color: "#333",
          padding: "20px",
        }}
      >
        <Typography variant="h4">Contact Our Happy Restaurant</Typography>
        <Typography variant="body1" sx={{ color: "#333", my: 2, maxWidth: "600px" }}>
          Welcome to a culinary journey full of joy and flavors! At our restaurant, we take delight in creating delicious moments for you. Each dish is prepared with love and a sprinkle of happiness.
        </Typography>
        <Typography variant="body1" sx={{ color: "#333", my: 2, maxWidth: "600px" }}>
          Have questions, feedback, or ready to make a reservation? Connect with us through the channels below. Our cheerful team is here to ensure your dining experience is filled with laughter and satisfaction.
        </Typography>

        <TableContainer component={Paper} sx={{ mt: 3 }}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                <a href="mailto:pranjulpand3@gmail.com" style={{ textDecoration: "none", color: "inherit" }}>
                    <MailIcon sx={{ color: "#FF5810", mr: 1 }} />
                    <strong>{emailAddress}</strong>
                  </a>
                </TableCell>

              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "#4CAF50", mr: 1 }} />
                  <strong>6377408759</strong>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Feedback Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          m: 3,
          "@media (max-width:600px)": {
            width: "300px",
          },
          backgroundColor: "#00ced1", // Cheerful background color
          color: "#fff",
          padding: "50px",
        }}
      >
        <Typography variant="h4">Give Us Your Feedback</Typography>
        <a href="" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#fff", display: "flex", flexDirection: "column", alignItems: "center", mt: 3 }}>
          <FeedbackIcon sx={{ color: "#fgf", fontSize: "90px" }} />
          <Typography variant="body1">Let us know how we're doing!</Typography>
        </a>
      </Box>
    </Layout>
  );
};

export default Contact;
import React from 'react';
import { Box, Grid, Typography, IconButton, Paper, Link as MuiLink } from '@mui/material';
import {
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaMobileAlt,
  FaCodeBranch,
  FaCloud,
  FaStar,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from 'react-icons/fa';

function Footer() {
  return (
    <Box bgcolor="white" pt={5} pb={4} px={{ xs: 3, sm: 5, md: 10 }}>
      <Grid container spacing={4} justifyContent="space-between">
        {/* Company Info */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" fontWeight="bold" gutterBottom textAlign="left">
            ZENMERAKI
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            paragraph
            sx={{ maxWidth: 260, lineHeight: 1.6, textAlign: 'left' }}
          >
            We specialize in transforming ideas into impactful solutions. From cutting-edge applications to intuitive designs, our work reflects a commitment to excellence and innovation in all we deliver.
          </Typography>
          <Box display="flex" gap={2} mt={2}>
            <IconButton component="a" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={20} />
            </IconButton>
            <IconButton component="a" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn size={20} />
            </IconButton>
            <IconButton component="a" href="mailto:someone@example.com">
              <FaEnvelope size={20} />
            </IconButton>
          </Box>
        </Grid>

        {/* Services */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" fontWeight="bold" gutterBottom textAlign="left">
            Services
          </Typography>
          <Box width={40} height={3} bgcolor="success.main" mb={2}></Box>
          <Box className="footer-clickable footer-service" display="flex" alignItems="center" mb={1}>
            <FaMobileAlt style={{ marginRight: 8 }} />Mobile Development
          </Box>
          <Box className="footer-clickable footer-service" display="flex" alignItems="center" mb={1}>
            <FaCodeBranch style={{ marginRight: 8 }} />Web Development
          </Box>
          <Box className="footer-clickable footer-service" display="flex" alignItems="center" mb={1}>
            <FaCloud style={{ marginRight: 8 }} />Cloud Solutions
          </Box>
          <Box className="footer-clickable footer-service" display="flex" alignItems="center">
            <FaStar style={{ marginRight: 8 }} />AI/ML Integration
          </Box>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" fontWeight="bold" gutterBottom textAlign="left">
            Quick Links
          </Typography>
          <Box width={40} height={3} bgcolor="success.main" mb={2}></Box>
          <MuiLink
            href="#about"
            underline="none"
            color="text.primary"
            className="footer-clickable footer-link"
            display="block"
            mb={1}
            textAlign="left"
          >
            About Us
          </MuiLink>
          <MuiLink
            href="#services"
            underline="none"
            color="text.primary"
            className="footer-clickable footer-link"
            display="block"
            mb={1}
            textAlign="left"
          >
            Services
          </MuiLink>
          <MuiLink
            href="#careers"
            underline="none"
            color="text.primary"
            className="footer-clickable footer-link"
            display="block"
            mb={1}
            textAlign="left"
          >
            Careers
          </MuiLink>
          <MuiLink
            href="#contact"
            underline="none"
            color="text.primary"
            className="footer-clickable footer-link"
            display="block"
            textAlign="left"
          >
            Contact
          </MuiLink>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" fontWeight="bold" gutterBottom textAlign="left">
            Contact
          </Typography>
          <Box width={40} height={3} bgcolor="success.main" mb={2}></Box>

          <Paper elevation={1} className="footer-clickable" sx={{ p: 2, mb: 2 }}>
            <Box display="flex" alignItems="center" mb={0}>
              <FaMapMarkerAlt style={{ marginRight: 6, color: '#2e7d32' }} />
              <Typography variant="body2" fontWeight="bold">Location</Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ pl: 3 }}>
              Thrissur, Kerala
            </Typography>
          </Paper>

          <Paper elevation={1} className="footer-clickable" sx={{ p: 2, mb: 2 }}>
            <Box display="flex" alignItems="center" mb={0}>
              <FaEnvelope style={{ marginRight: 6, color: '#2e7d32' }} />
              <Typography variant="body2" fontWeight="bold">Email</Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ pl: 3 }}>
              official@zenmeraki.com
            </Typography>
          </Paper>

          <Paper elevation={1} className="footer-clickable" sx={{ p: 2 }}>
            <Box display="flex" alignItems="center" mb={0}>
              <FaPhoneAlt style={{ marginRight: 6, color: '#2e7d32' }} />
              <Typography variant="body2" fontWeight="bold">Phone</Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ pl: 3 }}>
              +91 6282346108
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;

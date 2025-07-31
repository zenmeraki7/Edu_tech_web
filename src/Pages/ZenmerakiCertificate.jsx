import React from 'react';
import { Box, Button, Grid, Typography, TextField, Paper } from '@mui/material';
import ksumLogo from "../assets/ksumLogo.png";
import startupIndiaLogo from "../assets/startupIndiaLogo.png";
import softImg from "../assets/softwareImg.png";
import NavbarComponent from '../Components/NavbarComponents';

function ZenmerkiPage() {
    return (
        <>

            {/* nav section */}
            <NavbarComponent />
            {/* Hero Section */}
            <Box
                component="section"
                sx={{
                    background: 'linear-gradient(135deg, #f97316, #f59e0b)',
                    color: 'white',
                    textAlign: 'center',
                    py: { xs: 6, md: 8 },
                    px: 2,
                    mt: '40px',
                }}
            >
                <Typography variant="h2" sx={{ fontSize: { xs: '2.4rem', md: '3rem' }, fontWeight: 700 }}>
                    Zenmerki
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', mt: 1 }}>
                    Recognized by Kerala & India Startup Missions
                </Typography>
                <Button
                    variant="outlined"
                    sx={{
                        mt: 3,
                        px: 3,
                        py: 1.2,
                        border: '2px solid white',
                        borderRadius: '25px',
                        color: 'white',
                        background: 'transparent',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        '&:hover': {
                            background: 'rgba(255,255,255,0.08)',
                            border: '2px solid white',
                        },
                    }}
                >
                    Explore Our Journey
                </Button>
            </Box>

            {/* Recognitions Section */}
            <Box
                component="section"
                id="credentials"
                sx={{
                    py: { xs: 8, md: 10 },
                    px: 2,
                    background: 'linear-gradient(135deg, #0f766e, #134e4a)',
                    color: 'white',
                }}
            >
                <Box textAlign="center" mb={6}>
                    <Typography variant="h3" sx={{ fontSize: { xs: '2.2rem', md: '3rem' }, fontWeight: 700 }}>
                        Recognitions & Credentials
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '1.2rem', mt: 1 }}>
                        Government certified startup acknowledged for innovation & excellence
                    </Typography>
                </Box>

                <Grid
                    container
                    justifyContent="center"
                    spacing={4}
                    sx={{
                        maxWidth: 1200,
                        mx: 'auto',
                        px: 1,
                    }}
                >
                    {/* KSUM Card */}
                    <Grid item xs={12} sm={6} md={5} lg={4} display="flex" justifyContent="center">
                        <Paper
                            elevation={4}
                            sx={{
                                backgroundColor: '#ffffff',
                                borderRadius: '12px',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                padding: '2rem',
                                width: 340,
                                textAlign: 'center',
                                transition: 'transform 0.4s ease, box-shadow 0.4s ease, background-color 0.3s ease, border-color 0.3s ease',
                                border: '2px solid transparent',
                                '&:hover': {
                                    transform: 'scale(1.06)',
                                    boxShadow: '0 12px 25px rgba(16,185,129,0.3)',
                                    borderColor: '#10b981',
                                    backgroundColor: '#f0fdf4',
                                },
                            }}
                        >
                            <Box component="img" src={ksumLogo} alt="KSUM" sx={{ width: 80, mb: 2 }} />
                            <Typography variant="h6" sx={{ fontSize: '1.5rem', fontWeight: 700, mb: 1, color: '#111827' }}>
                                Kerala Startup Mission
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#374151', mb: 2 }}>
                                Officially certified for technology innovation by the Kerala government.
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#10b981',
                                    fontWeight: 700,
                                    textTransform: 'none',
                                    '&:hover': { backgroundColor: '#059c6d' },
                                }}
                            >
                                View Certificate
                            </Button>
                        </Paper>
                    </Grid>

                    {/* Startup India Card */}
                    <Grid item xs={12} sm={6} md={5} lg={4} display="flex" justifyContent="center">
                        <Paper
                            elevation={4}
                            sx={{
                                backgroundColor: '#ffffff',
                                borderRadius: '12px',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                padding: '2rem',
                                width: 340,
                                textAlign: 'center',
                                transition: 'transform 0.4s ease, box-shadow 0.4s ease, background-color 0.3s ease, border-color 0.3s ease',
                                border: '2px solid transparent',
                                '&:hover': {
                                    transform: 'scale(1.06)',
                                    boxShadow: '0 12px 25px rgba(16,185,129,0.3)',
                                    borderColor: '#10b981',
                                    backgroundColor: '#f0fdf4',
                                },
                            }}
                        >
                            <Box component="img" src={startupIndiaLogo} alt="Startup India" sx={{ width: 80, mb: 2 }} />
                            <Typography variant="h6" sx={{ fontSize: '1.5rem', fontWeight: 700, mb: 1, color: '#111827' }}>
                                Startup India Recognition
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#374151', mb: 2 }}>
                                Proud recipient of Startup India recognition under national innovation program.
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#2563eb',
                                    fontWeight: 700,
                                    textTransform: 'none',
                                    '&:hover': { backgroundColor: '#1e4fc7' },
                                }}
                            >
                                View Certificate
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>

            {/* About Section */}
            <Box
                component="section"
                id="about"
                sx={{
                    background: '#f9fafb',
                    py: { xs: 8, md: 10 },
                    px: 2,
                }}
            >
                <Box
                    sx={{
                        maxWidth: 1200,
                        mx: 'auto',
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        gap: 6,
                        justifyContent: 'space-between',
                    }}
                >
                    <Box sx={{ flex: '1 1 500px', p: 2, minWidth: 280 }}>
                        <Typography variant="h4" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 700, color: '#111827' }}>
                            About Zenmerki
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: '1.2rem',
                                lineHeight: 2,
                                color: '#374151',
                                mt: 2,
                            }}
                        >
                            Zenmerki is a certified startup recognized by both the Kerala Startup Mission and Startup India.
                            As a growing software company, we deliver innovative solutions backed by credibility and government support.
                            Our mission is to empower businesses with smart, scalable, and user-friendly technologies that drive real results.
                        </Typography>
                    </Box>

                    <Box sx={{ flex: '1 1 500px', minWidth: 280 }}>
                        <Box
                            component="img"
                            src={softImg}
                            alt="Zenmerki Software Team"
                            sx={{
                                width: '100%',
                                maxHeight: 400,
                                objectFit: 'cover',
                                borderRadius: '20px',
                                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.2)',
                            }}
                        />
                    </Box>
                </Box>
            </Box>

            {/* Contact Section */}
            <Box
                component="section"
                id="contact"
                sx={{
                    py: { xs: 6, md: 8 },
                    px: 2,
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, #f97316, #f59e0b)',
                    color: 'white',
                }}
            >
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                    Contact Us
                </Typography>
                <Box
                    component="form"
                    sx={{
                        maxWidth: 500,
                        mx: 'auto',
                        mt: 2,
                        display: 'grid',
                        gap: 2,
                        backgroundColor: 'white',
                        p: 3,
                        borderRadius: 2,
                        boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                    }}
                >
                    <TextField placeholder="Name" variant="outlined" fullWidth InputProps={{ sx: { borderRadius: '8px' } }} />
                    <TextField placeholder="Email" variant="outlined" type="email" fullWidth InputProps={{ sx: { borderRadius: '8px' } }} />
                    <TextField placeholder="Message" variant="outlined" fullWidth multiline minRows={4} InputProps={{ sx: { borderRadius: '8px' } }} />
                </Box>
            </Box>
        </>
    );
}

export default ZenmerkiPage;

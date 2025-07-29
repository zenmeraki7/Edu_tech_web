import React from 'react';
import { Box, Button, Card, Container, Grid, Typography } from '@mui/material';
import { FaBook, FaSpinner, FaArrowRight } from 'react-icons/fa';
import NavbarComponent from '../Components/NavbarComponents';
import '../App.css';

function Home() {
    return (
        <Box sx={{ backgroundColor: '#ecfdf5' }}>
            {/* Navbar */}
            <NavbarComponent />

            {/* Card Section */}
            <Container sx={{ mt: 5 }}>
                <Card sx={{ p: 4, borderRadius: '16px', backgroundColor: '#ffffff', boxShadow: 3 }}>
                    {/* Edu Tech Icon Button */}
                    <Box display="flex" alignItems="center" mb={3}>
                        <Button
                            size="small"
                            sx={{
                                width: '40px',
                                height: '40px',
                                backgroundColor: '#198754',
                                color: '#fff',
                                minWidth: 0,
                                mr: 2,
                                '&:hover': { backgroundColor: '#157347' },
                            }}
                        >
                            <FaBook className="rotate-icon" />
                        </Button>
                        <Typography variant="h6" fontWeight="bold" color="text.primary">
                            Edu Tech
                        </Typography>
                    </Box>

                    <Box borderBottom={1} borderColor="divider" mb={3} />

                    {/* Sections List */}
                    <Box
                        display="flex"
                        flexWrap="wrap"
                        justifyContent="center"
                        gap={4}
                        py={2}
                        color="text.secondary"
                    >
                        <Typography>HERO</Typography>
                        <Typography>FEATURES</Typography>
                        <Typography>HOW IT WORKS</Typography>
                        <Typography>FAQ</Typography>
                    </Box>

                    <Typography
                        variant="h3"
                        fontWeight="bold"
                        mt={4}
                        textAlign={{ xs: 'center', md: 'left' }}
                        color="text.primary"
                    >
                        With EduTech, Studying Just Got Smarter
                    </Typography>

                    <Typography mt={3} color="text.secondary" variant="h6">
                        Empower your academic journey with EduTech, the AI platform that adapts to you.
                        Learn, revise, and succeed—faster than ever before. Education meets intelligence,
                        only at EduTech.
                    </Typography>

                    <Button
                        variant="contained"
                        startIcon={<FaSpinner className="rotate-icon" />}
                        sx={{
                            mt: 3,
                            backgroundColor: '#198754',
                            fontWeight: 600,
                            textTransform: 'none',
                            py: 1.5,
                            px: 3,
                            borderRadius: 2,
                            display: 'inline-flex',
                            whiteSpace: 'nowrap',
                            minWidth: '160px',
                            '&:hover': { backgroundColor: '#157347' },
                        }}
                    >
                        GET THE APP
                    </Button>


                    {/* Highlight Section */}
                    <Box
                        mt={5}
                        p={4}
                        borderRadius={4}
                        sx={{ backgroundColor: '#198754', color: 'white' }}
                    >
                        <Typography variant="h4" mb={2}>
                            Why Learn the Hard Way? Switch to EduTech Today!
                        </Typography>
                        <Typography variant="h6">
                            Get instant doubt-solving, personalized support, and a smarter path to academic
                            success—all in one platform.
                        </Typography>
                        <Button
                            variant="outlined"
                            sx={{
                                mt: 3,
                                borderColor: 'white',
                                color: 'white',
                                px: 4,
                                py: 1,
                                borderRadius: 5,
                                fontWeight: 600,
                                '&:hover': {
                                    backgroundColor: 'white',
                                    color: '#198754',
                                    borderColor: 'white',
                                },
                            }}
                        >
                            WATCH DEMO
                        </Button>
                    </Box>
                </Card>
            </Container>

            {/* Gradient Section */}
            <Box
                sx={{
                    width: '100%',
                    mt: 5,
                    backgroundColor: '#198754',
                    py: { xs: 5, md: 8 },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        maxWidth: '1200px',
                        px: 3,
                        py: 4,
                        background: 'linear-gradient(to right, #198754, #4ade80)',
                        borderRadius: 2,
                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                        color: 'white',
                    }}
                >
                    <Typography textAlign="center" mb={4} variant="subtitle1">
                        PARTNER WITH EXPERTS
                    </Typography>

                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h4">
                                Ready to Learn Smarter with EduTech?
                            </Typography>
                            <Typography mt={3} variant="h6">
                                Let AI simplify your studies with personalized guidance, adaptive learning,
                                and real-time support built for student success.
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={6}
                            display="flex"
                            justifyContent="center"
                            alignItems="flex-start"
                        >
                            <Button
                                variant="contained"
                                sx={{
                                    mt: { xs: 2, md: 4 },
                                    backgroundColor: '#fff',
                                    color: '#198754',
                                    fontWeight: 600,
                                    borderRadius: 10,
                                    px: 4,
                                    py: 1.5,
                                    boxShadow: 3,
                                    textTransform: 'none',
                                    '&:hover': {
                                        backgroundColor: '#f1f1f1',
                                    },
                                }}
                            >
                                Get Started Today <FaArrowRight style={{ marginLeft: '8px' }} />
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
}

export default Home;

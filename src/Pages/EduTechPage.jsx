import React from 'react';
import NavbarComponents from '../Components/NavbarComponents';
import eduimg from '../assets/eduimg.png';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import {
    Box,
    Typography,
    Container,
    Grid,
    Paper,
    Button,
} from '@mui/material';

function EduTechPage() {
    return (
        <Box>
            {/* Navbar */}
            <NavbarComponents />

            {/* Header */}
            <Box
                className="bg-light"
                sx={{ mt: 5, py: 5, textAlign: 'center' }}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Box>
                    <Typography variant="h2" className="fw-bold" color="success.main">
                        EduSync Chat Console
                    </Typography>
                    <Typography variant="h6" color="text.secondary" mt={3}>
                        Connect students in real-time with smart communication tools.
                    </Typography>
                </Box>
            </Box>

            {/* Image */}
            <Box display="flex" justifyContent="center" mt={5}>
                <Paper elevation={3} sx={{ p: 4, borderRadius: 4, width: '75%', maxWidth: 1000 }}>
                    <img
                        src={eduimg}
                        alt="Conversify Chat"
                        style={{ width: '100%', borderRadius: '12px' }}
                    />
                </Paper>
            </Box>

            {/* How it works */}
            <Container sx={{ my: 5 }}>
                <Typography variant="h4" textAlign="center" fontWeight="bold" color="success.main" mb={5}>
                    How It Works
                </Typography>

                <Paper elevation={2} className="hover-step" sx={{ p: 3, mb: 4, borderRadius: 3 }}>
                    <Box display="flex" alignItems="start" gap={3}>
                        <Box
                            sx={{
                                width: 40,
                                height: 40,
                                backgroundColor: '#0d6efd',
                                color: 'white',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '50%',
                                flexShrink: 0,
                            }}
                        >
                            <FaCheck size={18} />
                        </Box>
                        <Box>
                            <Typography variant="h6" fontWeight={600}>
                                1. Simple Student Access
                            </Typography>
                            <Typography>
                                Students can sign up or log in quickly using email, phone, or third-party platforms — no hassle, just learning.
                            </Typography>
                        </Box>
                    </Box>
                </Paper>

                <Paper elevation={2} className="hover-step" sx={{ p: 3, mb: 4, borderRadius: 3 }}>
                    <Box display="flex" alignItems="start" gap={3}>
                        <Box
                            sx={{
                                width: 40,
                                height: 40,
                                backgroundColor: '#198754',
                                color: 'white',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '50%',
                                flexShrink: 0,
                            }}
                        >
                            <FaCheck size={18} />
                        </Box>
                        <Box>
                            <Typography variant="h6" fontWeight={600}>
                                2. Personalized Learning Dashboard
                            </Typography>
                            <Typography>
                                Each student gets a custom dashboard with easy access to lessons, notes, chat rooms, and assignments — all in one place.
                            </Typography>
                        </Box>
                    </Box>
                </Paper>

                <Paper elevation={2} className="hover-step" sx={{ p: 3, mb: 4, borderRadius: 3 }}>
                    <Box display="flex" alignItems="start" gap={3}>
                        <Box
                            sx={{
                                width: 40,
                                height: 40,
                                backgroundColor: '#fd7e14',
                                color: 'white',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '50%',
                                flexShrink: 0,
                            }}
                        >
                            <FaCheck size={18} />
                        </Box>
                        <Box>
                            <Typography variant="h6" fontWeight={600}>
                                3. Real-Time Collaboration
                            </Typography>
                            <Typography>
                                Connect instantly with classmates, share ideas, join group discussions, and get updates through smart chat features.
                            </Typography>
                        </Box>
                    </Box>
                </Paper>

                <Paper elevation={2} className="hover-step" sx={{ p: 3, mb: 4, borderRadius: 3 }}>
                    <Box display="flex" alignItems="start" gap={3}>
                        <Box
                            sx={{
                                width: 40,
                                height: 40,
                                backgroundColor: '#dc3545',
                                color: 'white',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '50%',
                                flexShrink: 0,
                            }}
                        >
                            <FaCheck size={18} />
                        </Box>
                        <Box>
                            <Typography variant="h6" fontWeight={600}>
                                4. Instant Progress Tracking
                            </Typography>
                            <Typography>
                                Stay on top of your goals with real-time activity stats, reminders, and alerts — helping you learn, grow, and succeed.
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </Container>

            {/* Tutorial */}
            <Box
                height={500}
                sx={{ backgroundColor: '#EFF9F9', mt: 4 }}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <iframe
                    width="800"
                    height="350"
                    src="https://www.youtube.com/embed/014uZYpNdMY?si=f9g__CkxH8KlqBO8"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </Box>

            {/* CTA Section */}
            <Box
                sx={{ backgroundColor: '#198754', mt: 5, py: 5 }}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Container
                    sx={{
                        background: 'linear-gradient(to right, #198754, #4ade80)',
                        borderRadius: '12px',
                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                        color: 'white',
                        py: 4,
                        px: 3,
                    }}
                >
                    <Typography variant="h6" textAlign="center" mb={4}>
                        PARTNER WITH EXPERTS
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h4">
                                Ready to Boost Your Skills with Smart Learning?
                            </Typography>
                            <Typography mt={3} fontSize={18}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, odio pariatur cupiditate sunt dolore deleniti a totam aliquid amet quibusdam minus ipsum iste tempore inventore sit voluptate temporibus voluptatum iusto?
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="start">
                            <Button
                                variant="contained"
                                sx={{
                                    mt: 3,
                                    backgroundColor: 'white',
                                    color: '#198754',
                                    fontWeight: '600',
                                    px: 4,
                                    py: 1.5,
                                    borderRadius: '999px',
                                    boxShadow: 3,
                                    textTransform: 'none'
                                }}
                            >
                                Get Started Today <FaArrowRight style={{ marginLeft: '8px' }} />
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}

export default EduTechPage;

import React, { useState, useEffect } from "react";
import { Box, Typography, Chip, Card, CardContent, Avatar } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FlagIcon from "@mui/icons-material/Flag";
import NavbarComponent from "../Components/NavbarComponents";


function Typewriter({ text, speed = 100 }) {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let currentIndex = 0;
        let timeoutId;

        const typeNextChar = () => {
            if (currentIndex <= text.length) {
                setDisplayedText(text.slice(0, currentIndex));
                currentIndex++;
                timeoutId = setTimeout(typeNextChar, speed);
            }
        };

        setDisplayedText("");
        typeNextChar();

        return () => clearTimeout(timeoutId);
    }, [text, speed]);

    return <>{displayedText}</>;
}

export default function TrustedCertifiedSection() {
    const cards = [
        {
            icon: <EmojiEventsIcon sx={{ color: "#F59E0B" }} />,
            avatarBg: "#FFF4E5",
            title: "Kerala Startup Mission",
            chipLabel: "Certified Startup",
            chipBg: "#E9F8EC",
            chipColor: "#2E7D32",
            description:
                "Officially recognized and supported by the Government of Kerala's premier startup ecosystem, Kerala Startup Mission (KSUM). " +
                "As a certified startup, we gain access to exclusive government-backed resources, mentorship programs, innovation grants, and " +
                "networking opportunities that accelerate our growth. This recognition reflects our commitment to innovation, quality, and " +
                "delivering impactful solutions aligned with Kerala’s vision for a thriving entrepreneurial community.",
            bg: "linear-gradient(135deg, #ffffff 0%, #f0f8ff 100%)",
        },
        {
            icon: <FlagIcon sx={{ color: "#F97316" }} />,
            avatarBg: "#FFF7ED",
            title: "Startup India",
            chipLabel: "DPIIT Recognized",
            chipBg: "#FFF7ED",
            chipColor: "#EA580C",
            description:
                "Officially recognized by the Department for Promotion of Industry and Internal Trade (DPIIT), Government of India, under the Startup India initiative. " +
                "This recognition validates our innovation-driven approach, opens access to exclusive government benefits, tax exemptions, and funding opportunities, " +
                "and strengthens our credibility in the startup ecosystem. It reflects our commitment to building impactful solutions that contribute to India’s growth and global competitiveness.",
            bg: "linear-gradient(135deg, #ffffff 0%, #fff5f0 100%)",
        },
    ];

    return (
        <Box sx={{ position: "relative", overflow: "hidden" }}>
            {/* Nav section */}
            <NavbarComponent />

            <Box sx={{ mt: 8 }} />

            <Box
                sx={{
                    position: "absolute",
                    top: "-50px",
                    left: "-50px",
                    width: "200px",
                    height: "200px",
                    background:
                        "radial-gradient(circle at center, rgba(0, 102, 255, 0.05) 0%, transparent 70%)",
                    borderRadius: "50%",
                }}
            />
            <Box
                sx={{
                    position: "absolute",
                    bottom: "-60px",
                    right: "-60px",
                    width: "250px",
                    height: "250px",
                    background:
                        "radial-gradient(circle at center, rgba(0, 200, 83, 0.05) 0%, transparent 70%)",
                    borderRadius: "50%",
                }}
            />

            {/* Full-width Banner */}
            <Box
                sx={{
                    background: "#14532d", // Dark Green
                    py: 6,
                    px: 3,
                    color: "white",
                    textAlign: "center",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                <Avatar
                    sx={{
                        bgcolor: "#22c55e",
                        width: 70,
                        height: 70,
                        mx: "auto",
                        mb: 3,
                        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                        fontSize: "1.5rem",
                    }}
                >
                    ✅
                </Avatar>

                <Typography
                    variant="h3"
                    fontWeight="900"
                    sx={{
                        fontFamily: "'Georgia', serif",
                        px: 3,
                        py: 1,
                        borderRadius: 1,
                        display: "inline-block",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        fontStyle: "italic",
                        minHeight: "3.5rem",  // keep vertical space
                        userSelect: "none",
                    }}
                >
                    <Typewriter text="TRUSTED & CERTIFIED" speed={140} />
                </Typography>


                <Typography
                    variant="h6"
                    maxWidth="700px"
                    mx="auto"
                    mt={3}
                    sx={{
                        fontFamily: "monospace",
                        backgroundColor: "rgba(255,255,255,0.08)",
                        px: 3,
                        py: 1.5,
                        borderRadius: 1,
                        lineHeight: 1.6,
                    }}
                >
                    Our startup is officially recognized and certified by leading government
                    initiatives, ensuring reliability and trustworthiness in everything we do.
                </Typography>

                {/* Tags */}
                <Box
                    display="flex"
                    justifyContent="center"
                    gap={2}
                    mt={4}
                    flexWrap="wrap"
                >
                    {[
                        { label: "Government Verified", bg: "#E9F8EC", color: "#2E7D32" },
                        { label: "Officially Recognized", bg: "#E8F0FF", color: "#1E40AF" },
                        { label: "Startup Ecosystem", bg: "#F3E8FF", color: "#6B21A8" },
                    ].map((tag, i) => (
                        <Chip
                            key={i}
                            icon={
                                <span
                                    style={{
                                        display: "inline-block",
                                        width: 10,
                                        height: 10,
                                        backgroundColor: tag.color,
                                        borderRadius: "50%",
                                    }}
                                />
                            }
                            label={tag.label}
                            sx={{
                                bgcolor: tag.bg,
                                color: tag.color,
                                pl: 1,
                                fontWeight: 600,
                                fontSize: "0.95rem",
                                boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                                "&:hover": {
                                    transform: "translateY(-3px)",
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                                },
                            }}
                        />
                    ))}
                </Box>
            </Box>

            {/* Cards Section with flex */}
            <Box
                sx={{
                    py: 8,
                    px: 4,
                    background: "linear-gradient(135deg, #f9fbff, #eef3ff)",
                    position: "relative",
                    zIndex: 1,

                    display: "flex",
                    justifyContent: "center",
                    gap: 4,
                    flexWrap: "nowrap",
                    flexDirection: { xs: "column", md: "row" },
                }}
            >
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        sx={{
                            borderRadius: 3,
                            background: "linear-gradient(135deg, #e6f4ea 0%, #c8e6c9 100%)",
                            border: "2px solid rgba(34, 197, 94, 0.4)",
                            backdropFilter: "blur(8px)",
                            boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
                            height: "350px",
                            maxWidth: "500px",
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                transform: "translateY(-8px)",
                                boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
                                borderColor: "rgba(34, 197, 94, 0.6)",
                            },
                        }}
                    >
                        <CardContent sx={{ textAlign: "center" }}>
                            <Avatar sx={{ bgcolor: card.avatarBg, mb: 2, mx: "auto" }}>
                                {card.icon}
                            </Avatar>
                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                gutterBottom
                                sx={{
                                    fontFamily: "'Courier New', Courier, monospace",
                                    fontStyle: "italic",
                                    letterSpacing: 1,
                                    fontSize: "30px",
                                }}
                            >
                                {card.title}
                            </Typography>

                            <Chip
                                label={card.chipLabel}
                                size="small"
                                sx={{
                                    bgcolor: card.chipBg,
                                    color: card.chipColor,
                                    mt: 1,
                                    mb: 2,
                                    fontWeight: 500,
                                }}
                            />
                            <Typography variant="body2" color="text.secondary" sx={{ fontStyle: "italic" }}>
                                {card.description}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
}

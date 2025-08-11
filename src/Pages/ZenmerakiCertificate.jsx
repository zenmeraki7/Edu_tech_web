import React, { useState, useEffect } from "react";
import {
    Box,
    Typography,
    Chip,
    Card,
    CardContent,
    Avatar,
    TextField,
    Button,
} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FlagIcon from "@mui/icons-material/Flag";
import NavbarComponent from "../Components/NavbarComponents";
import { motion } from "framer-motion";

// Reusable Animation Variants
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
};

const contactFadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};
const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const MotionBox = motion(Box);
const MotionCard = motion(Card);

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


function WaveText({ text }) {
    return (
        <Typography
            variant="h5"
            sx={{
                color: "#fff",
                fontWeight: "bold",
                textTransform: "uppercase",
                fontStyle: "italic",
                mb: 3,
                display: "flex",
                justifyContent: "center",
                gap: 0.5,
                userSelect: "none",
            }}
        >
            {text.split("").map((char, index) => (
                <span
                    key={index}
                    style={{
                        display: "inline-block",
                        animation: "wave 1.2s ease-in-out 2",
                        animationDelay: `${index * 0.1}s`,
                        animationFillMode: "forwards",
                    }}
                >
                    {char === " " ? "\u00A0" : char}
                </span>
            ))}

            <style>
                {`
          @keyframes wave {
            0%, 60%, 100% {
              transform: translateY(0);
            }
            30% {
              transform: translateY(-10px);
            }
          }
        `}
            </style>
        </Typography>
    );
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
        <Box sx={{ position: "relative", overflowX: "hidden" }}>
            {/* Navbar */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <NavbarComponent />
            </motion.div>

            <Box sx={{ mt: 8 }} />

            {/* Decorative Circles */}
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

            {/* Banner Section */}
            <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <Box
                    sx={{
                        background: "linear-gradient(135deg, #0e3b39, #16726d)",
                        py: 6,
                        px: 3,
                        color: "white",
                        textAlign: "center",
                        position: "relative",
                        zIndex: 1,
                    }}
                >
                    {/* Avatar */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.1 }}
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
                    </motion.div>

                    {/* Heading */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.2 }}
                    >
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
                                minHeight: "3.5rem",
                                userSelect: "none",
                                fontSize: {
                                    xs: "1.4rem",
                                    sm: "1.8rem",
                                    md: "2.4rem",
                                    lg: "3rem",
                                },
                            }}
                        >
                            <Typewriter text="TRUSTED & CERTIFIED" speed={140} />
                        </Typography>
                    </motion.div>

                    {/* Paragraph */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.4 }}
                    >
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
                    </motion.div>

                    {/* Tags  Animation */}
                    <Box display="flex" justifyContent="center" gap={2} mt={4} flexWrap="wrap">
                        {[
                            { label: "Government Verified", bg: "#E9F8EC", color: "#2E7D32" },
                            { label: "Officially Recognized", bg: "#E8F0FF", color: "#1E40AF" },
                            { label: "Startup Ecosystem", bg: "#F3E8FF", color: "#6B21A8" },
                        ].map((tag, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.8 + i * 0.5,
                                    ease: "easeOut",
                                }}
                            >
                                <Chip
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
                            </motion.div>
                        ))}
                    </Box>
                </Box>
            </motion.div>

            {/* Cards Section */}
            <Box
                sx={{
                    py: 8,
                    px: 4,
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
                    <motion.div
                        key={index}
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <Card
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
                    </motion.div>
                ))}
            </Box>

            {/* Contact Form Section  */}
            <MotionBox
                sx={{
                    backgroundColor: "rgba(20, 50, 50, 0.9)", 
                    display: "flex",
                    flexDirection: "column", 
                    justifyContent: "center",
                    alignItems: "center",
                    p: { xs: 2, sm: 3 },
                    maxWidth: 820,
                    width: "90%", 
                    height: { xs: "auto", sm: 600 },
                    margin: "auto",
                    borderRadius: 3,
                    mt: 5,
                    mb: 5,
                    boxSizing: "border-box",
                    overflowX: "hidden",
                    position: "relative",
                    zIndex: 1,
                }}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <WaveText text="Contact us" />

                <MotionCard
                    sx={{
                        p: { xs: 3, sm: 4 },
                        maxWidth: 500,
                        width: "100%",
                        backgroundColor: "rgba(20, 50, 50, 0.9)",
                        borderRadius: 3,
                        boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
                        boxSizing: "border-box",
                    }}
                    variants={contactFadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {["Full Name", "E-mail", "Phone"].map((placeholder, idx) => (
                        <TextField
                            key={idx}
                            fullWidth
                            placeholder={placeholder}
                            variant="outlined"
                            sx={{
                                mb: 2,
                                fontSize: { xs: "0.85rem", sm: "1rem" },
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "8px",
                                    background: "rgba(255,255,255,0.05)",
                                    color: "#fff",
                                    "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
                                    "&:hover fieldset": { borderColor: "#4CAF50" },
                                    "&.Mui-focused fieldset": { borderColor: "#4CAF50" },
                                },
                                input: { color: "#fff" },
                            }}
                        />
                    ))}

                    <TextField
                        fullWidth
                        placeholder="Your Message"
                        variant="outlined"
                        multiline
                        rows={4}
                        sx={{
                            mb: 3,
                            fontSize: { xs: "0.85rem", sm: "1rem" },
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "8px",
                                background: "rgba(255,255,255,0.05)",
                                color: "#fff",
                                "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
                                "&:hover fieldset": { borderColor: "#4CAF50" },
                                "&.Mui-focused fieldset": { borderColor: "#4CAF50" },
                            },
                            textarea: { color: "#fff" },
                        }}
                    />

                    <Button
                        fullWidth
                        variant="contained"
                        sx={{
                            background: "#043D3D",
                            color: "#fff",
                            fontWeight: "bold",
                            py: 1.5,
                            fontStyle: "italic",
                            borderRadius: "8px",
                            fontSize: { xs: "0.85rem", sm: "1rem" },
                            "&:hover": {
                                background: "#065E5E",
                            },
                        }}
                    >
                        Submit
                    </Button>
                </MotionCard>
            </MotionBox>
        </Box>
    );
}

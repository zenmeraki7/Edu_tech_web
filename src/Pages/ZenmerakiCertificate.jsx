import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import zenlogo from "../assets/zenlogo.png";
import ksumLogo from "../assets/ksumLogo.png";
import startupIndiaLogo from "../assets/startupIndiaLogo.png";
import softImg from "../assets/softwareImg.png";

function ZenmerkiPage() {
    return (
        <>
            {/* Navbar Section */}
            <Navbar expand="lg" style={{ backgroundColor: '#EFF9F9' }} className="px-4">
                <Navbar.Brand href="#home" className="ms-3 d-flex align-items-center">
                    <img src={zenlogo} width="30" height="30" className="d-inline-block align-top" alt="logo" />
                    <strong className="ms-2">ZEN MERAKI</strong>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto align-items-center text-center">
                        <Nav.Link href="#home" className="fw-bold fs-5 text-dark">Home</Nav.Link>
                        <NavDropdown title={<span className="fw-bold fs-5">Expertise</span>} id="expertise-dropdown">
                            <NavDropdown.Item href="#design" className="border-top border-bottom border-dark">Shopify App Development</NavDropdown.Item>
                            <NavDropdown.Item href="#development">Custom Shopify App Development</NavDropdown.Item>
                            <NavDropdown.Item href="#custom">Custom App Development</NavDropdown.Item>
                            <NavDropdown.Item href="#website">Website Development</NavDropdown.Item>
                            <NavDropdown.Item href="#digital">Digital Marketing</NavDropdown.Item>
                            <NavDropdown.Item href="#ecom">E-Commerce Account Management</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#about" className="fw-bold fs-5 text-dark">About Us</Nav.Link>
                        <Nav.Link href="#apps" className="fw-bold fs-5 text-dark">Apps</Nav.Link>
                        <Nav.Link href="#projects" className="fw-bold fs-5 text-dark">Projects</Nav.Link>
                        <Nav.Link href="#careers" className="fw-bold fs-5 text-dark">Careers</Nav.Link>
                    </Nav>
                    <div className="d-flex">
                        <Button
                            href="#contact"
                            variant="success"
                            className="d-none d-md-flex ms-2 fw-bold px-4"
                            style={{ boxShadow: 'none', background: 'linear-gradient(135deg, #f97316, #f59e0b)' }}
                        >
                            CONTACT US
                        </Button>
                    </div>
                </Navbar.Collapse>
            </Navbar>

            {/* Hero Section */}
            <section
                style={{
                    background: 'linear-gradient(135deg, #f97316, #f59e0b)',
                    color: 'white',
                    textAlign: 'center',
                    padding: '4rem 1rem',
                    marginTop: "40px"
                }}
            >
                <h1 style={{ fontSize: '3rem', fontWeight: '700' }}>Zenmerki</h1>
                <p style={{ fontSize: '1.1rem', marginTop: '0.5rem' }}>
                    Recognized by Kerala & India Startup Missions
                </p>
                <button
                    style={{
                        marginTop: '1.5rem',
                        padding: '0.8rem 1.5rem',
                        border: '2px solid white',
                        background: 'transparent',
                        color: 'white',
                        borderRadius: '25px',
                        cursor: 'pointer',
                    }}
                >
                    Explore Our Journey
                </button>
            </section>

            {/* Recognitions Section */}
            <section
                id="credentials"
                style={{
                    padding: '5rem 1rem',
                    background: 'linear-gradient(135deg, #0f766e, #134e4a)',
                    color: 'white',
                }}
            >
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: '700' }}>Recognitions & Credentials</h2>
                    <p style={{ fontSize: '1.2rem', marginTop: '0.5rem' }}>
                        Government certified startup acknowledged for innovation & excellence
                    </p>
                </div>

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        gap: '3rem',
                        maxWidth: '1200px',
                        margin: '0 auto',
                    }}
                >
                    {/* KSUM */}
                    <div
                        style={{
                            backgroundColor: 'white',
                            color: '#111827',
                            padding: '2.5rem',
                            borderRadius: '16px',
                            width: '340px',
                            textAlign: 'center',
                            boxShadow: '0 8px 25px rgba(16, 185, 129, 0.3)',
                            transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                        }}
                        className="hover-scale"
                    >
                        <img src={ksumLogo} alt="KSUM" style={{ width: '80px', marginBottom: '1.5rem' }} />
                        <h3 style={{ fontSize: '1.5rem' }}>Kerala Startup Mission</h3>
                        <p style={{ color: '#374151' }}>
                            Officially certified for technology innovation by the Kerala government.
                        </p>
                        <Button variant="success" className="mt-3 fw-bold">
                            View Certificate
                        </Button>
                    </div>

                    {/* Startup India */}
                    <div
                        style={{
                            backgroundColor: 'white',
                            color: '#111827',
                            padding: '2.5rem',
                            borderRadius: '16px',
                            width: '340px',
                            textAlign: 'center',
                            boxShadow: '0 8px 25px rgba(59, 130, 246, 0.3)',
                            transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                        }}
                        className="hover-scale"
                    >
                        <img src={startupIndiaLogo} alt="Startup India" style={{ width: '80px', marginBottom: '1.5rem' }} />
                        <h3 style={{ fontSize: '1.5rem' }}>Startup India Recognition</h3>
                        <p style={{ color: '#374151' }}>
                            Proud recipient of Startup India recognition under national innovation program.
                        </p>
                        <Button variant="primary" className="mt-3 fw-bold">
                            View Certificate
                        </Button>
                    </div>
                </div>

                <style>
                    {`
                        .hover-scale:hover {
                            transform: scale(1.05);
                            box-shadow: 0 16px 40px rgba(255, 255, 255, 0.15);
                        }
                    `}
                </style>
            </section>

            {/* Enlarged About Section */}
            <section
                id="about"
                style={{
                    background: '#f9fafb',
                    padding: '6rem 2rem',
                }}
            >
                <div
                    style={{
                        maxWidth: '1200px',
                        margin: '0 auto',
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        gap: '4rem',
                        justifyContent: 'space-between',
                    }}
                >
                    {/* About Content */}
                    <div
                        style={{
                            flex: '1 1 500px',
                            padding: '2rem',
                        }}
                    >
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#111827' }}>About Zenmerki</h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: '2', color: '#374151', marginTop: '1.5rem' }}>
                            Zenmerki is a certified startup recognized by both the Kerala Startup Mission and Startup India.
                            As a growing software company, we deliver innovative solutions backed by credibility and government support.
                            Our mission is to empower businesses with smart, scalable, and user-friendly technologies that drive real results.
                        </p>
                    </div>

                    {/* About Image */}
                    <div
                        style={{
                            flex: '1 1 500px',
                        }}
                    >
                        <img
                            src={softImg}
                            alt="Zenmerki Software Team"
                            style={{
                                width: '100%',
                                maxHeight: '400px',
                                objectFit: 'cover',
                                borderRadius: '20px',
                                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.2)',
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section
                id="contact"
                style={{
                    padding: '3rem 1rem',
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, #f97316, #f59e0b)',
                    color: 'white',
                }}
            >
                <h2>Contact Us</h2>
                <form
                    style={{
                        maxWidth: '500px',
                        margin: '2rem auto 0',
                        display: 'grid',
                        gap: '1rem',
                        backgroundColor: 'white',
                        padding: '2rem',
                        borderRadius: '12px',
                        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
                    }}
                >
                    <input
                        type="text"
                        placeholder="Name"
                        style={{
                            padding: '1rem',
                            border: '1px solid #d1d5db',
                            borderRadius: '8px',
                            width: '100%',
                        }}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        style={{
                            padding: '1rem',
                            border: '1px solid #d1d5db',
                            borderRadius: '8px',
                            width: '100%',
                        }}
                    />
                    <textarea
                        placeholder="Message"
                        style={{
                            padding: '1rem',
                            border: '1px solid #d1d5db',
                            borderRadius: '8px',
                            width: '100%',
                            minHeight: '120px',
                        }}
                    ></textarea>
                </form>
            </section>
        </>
    );
}

export default ZenmerkiPage;

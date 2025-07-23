import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBook, FaSpinner, FaArrowRight } from 'react-icons/fa';
import '../App.css';
import NavbarComponent from '../Components/NavbarComponents';

function Home() {
    return (
        <div style={{ backgroundColor: '#ecfdf5' }}>
            {/* Navbar */}
            <NavbarComponent />
            {/* Card Section */}
            <Container className="mt-5">
                <Card className="p-4 shadow" style={{ backgroundColor: '#ffffff', borderRadius: '16px' }}>
                    {/* Edu Tech Icon Button */}
                    <div className="d-flex align-items-center mb-3">
                        <Button
                            variant="light"
                            size="sm"
                            className="d-flex justify-content-center align-items-center me-2"
                            style={{
                                width: '40px',
                                height: '40px',
                                backgroundColor: '#198754',
                                color: '#fff'
                            }}

                        >
                            <FaBook className="rotate-icon" />
                        </Button>
                        <span className="fw-bold fs-5 text-dark">Edu Tech</span>
                    </div>
                    <hr />

                    <div className="d-flex flex-wrap justify-content-center gap-4 py-2 text-secondary">
                        <span>HERO</span>
                        <span>FEATURES</span>
                        <span>HOW IT WORKS</span>
                        <span>FAQ</span>
                    </div>

                    <h1 className="fw-bold mt-4 display-5 text-center text-md-start text-dark">
                        With EduTech, Studying Just Got Smarter
                    </h1>
                    <p className="mt-3 text-secondary fs-5">
                        Empower your academic journey with EduTech, the AI platform that adapts to you.
                        Learn, revise, and succeed—faster than ever before. Education meets intelligence, only at EduTech.
                    </p>
                    <button
                        className="btn btn-success d-flex align-items-center gap-2 fw-semibold px-3 py-2 rounded-3 text-nowrap"
                        style={{ width: '160px' }}
                    >
                        <FaSpinner className="rotate-icon" /> GET THE APP
                    </button>


                    {/* Highlight Section */}
                    <div
                        className="mt-5 p-4 rounded-4 text-white"
                        style={{ backgroundColor: '#198754' }}
                    >
                        <h2 className="mb-2 fs-2">Why Learn the Hard Way? Switch to EduTech Today!</h2>
                        <p className="fs-5">
                            Get instant doubt-solving, personalized support, and a smarter path to academic success—all in one platform.
                        </p>
                        <button className="btn btn-outline-light mt-3 fw-semibold px-4 py-2 rounded-pill">
                            WATCH DEMO
                        </button>
                    </div>

                </Card>
            </Container>

            {/* Gradient Section */}
            <div
                className="w-100 d-flex align-items-center justify-content-center mt-5"
                style={{
                    backgroundColor: '#198754',
                    minHeight: '500px',
                    padding: '50px 0',
                }}
            >
                <div
                    className="container py-4 px-3 text-white"
                    style={{
                        background: 'linear-gradient(to right, #198754, #4ade80)',
                        borderRadius: '12px',
                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <h6 className="text-center mb-4">PARTNER WITH EXPERTS</h6>
                    <div className="row g-4">
                        <div className="col-12 col-md-6">
                            <h3 className="fs-2">Ready to Learn Smarter with EduTech?</h3>
                            <p className="mt-3 fs-5">
                                Let AI simplify your studies with personalized guidance, adaptive learning, and
                                real-time support built for student success.
                            </p>
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-start">
                            <button
                                className="btn btn-light text-success fw-semibold px-4 py-3 rounded-pill shadow"
                                style={{ marginTop: '30px' }}
                            >
                                Get Started Today <FaArrowRight className="ms-2" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;

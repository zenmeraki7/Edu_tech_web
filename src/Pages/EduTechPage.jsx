import React from 'react'
import NavbarComponents from '../Components/NavbarComponents'
import eduimg from '../assets/eduimg.png'
import { FaCheck } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

function EduTechPage() {
    return (
        <div>

            {/* navbar */}
            <NavbarComponents />


            <div className="d-flex justify-content-center align-items-center text-center  bg-light mt-5">
                <div>
                    <h1 className="fw-bold display-4 text-success">EduSync Chat Console</h1>
                    <p className="fs-5 text-muted mt-3">
                        Connect students in real-time with smart communication tools.
                    </p>
                </div>
            </div>

            {/* Centered Image  */}
            <div className="d-flex justify-content-center mt-5">
                <div
                    className="shadow p-4 bg-white rounded-4"
                    style={{ width: '75%', maxWidth: '1000px' }}
                >
                    <img
                        src={eduimg}
                        alt="Conversify Chat"
                        className="img-fluid rounded-3"
                        style={{ width: '100%' }}
                    />
                </div>
            </div>



            {/* how to work */}
            <div className="container my-5">
                <h2 className="text-center fw-bold text-success mb-5">How It Works</h2>

                {/* Step 1 */}
                <div className="card mb-4 p-3 shadow-step hover-step">
                    <div className="d-flex align-items-start gap-3">
                        <div
                            className="rounded-circle d-flex align-items-center justify-content-center"
                            style={{
                                width: '40px',
                                height: '40px',
                                backgroundColor: '#0d6efd',
                                color: 'white',
                                flexShrink: 0,
                            }}
                        >
                            <FaCheck size={18} />
                        </div>
                        <div>
                            <h5 className="fw-semibold">1. Simple Student Access</h5>
                            <p className="mb-0">Students can sign up or log in quickly using email, phone, or third-party platforms — no hassle, just learning.</p>
                        </div>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="card mb-4 p-3 shadow-step hover-step">
                    <div className="d-flex align-items-start gap-3">
                        <div
                            className="rounded-circle d-flex align-items-center justify-content-center"
                            style={{
                                width: '40px',
                                height: '40px',
                                backgroundColor: '#198754',
                                color: 'white',
                                flexShrink: 0,
                            }}
                        >
                            <FaCheck size={18} />
                        </div>
                        <div>
                            <h5 className="fw-semibold">2. Personalized Learning Dashboard</h5>
                            <p className="mb-0">Each student gets a custom dashboard with easy access to lessons, notes, chat rooms, and assignments — all in one place.</p>
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="card mb-4 p-3 shadow-step hover-step">
                    <div className="d-flex align-items-start gap-3">
                        <div
                            className="rounded-circle d-flex align-items-center justify-content-center"
                            style={{
                                width: '40px',
                                height: '40px',
                                backgroundColor: '#fd7e14',
                                color: 'white',
                                flexShrink: 0,
                            }}
                        >
                            <FaCheck size={18} />
                        </div>
                        <div>
                            <h5 className="fw-semibold">3. Real-Time Collaboration</h5>
                            <p className="mb-0">Connect instantly with classmates, share ideas, join group discussions, and get updates through smart chat features.</p>
                        </div>
                    </div>
                </div>

                {/* Step 4 */}
                <div className="card mb-4 p-3 shadow-step hover-step">
                    <div className="d-flex align-items-start gap-3">
                        <div
                            className="rounded-circle d-flex align-items-center justify-content-center"
                            style={{
                                width: '40px',
                                height: '40px',
                                backgroundColor: '#dc3545',
                                color: 'white',
                                flexShrink: 0,
                            }}
                        >
                            <FaCheck size={18} />
                        </div>
                        <div>
                            <h5 className="fw-semibold">4.  Instant Progress Tracking</h5>
                            <p className="mb-0">Stay on top of your goals with real-time activity stats, reminders, and alerts — helping you learn, grow, and succeed.</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* Tutorial */}

            <div
                style={{
                    height: '500px',
                    backgroundColor: '#EFF9F9',
                    marginTop: "30px"
                }}
                className="d-flex justify-content-center align-items-center"
            >
                <iframe width="800" height="350" src="https://www.youtube.com/embed/014uZYpNdMY?si=f9g__CkxH8KlqBO8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>


            {/* next Section */}
            <div className="w-100 d-flex align-items-center justify-content-center mt-5" style={{ backgroundColor: '#198754', minHeight: '500px' }}>
                <div className="container py-4 px-3 text-white" style={{ background: 'linear-gradient(to right, #198754, #4ade80)', borderRadius: '12px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }}>
                    <h6 className="text-center mb-4">PARTNER WITH EXPERTS</h6>
                    <div className="row g-4">
                        <div className="col-12 col-md-6">
                            <h3 className="fs-2">Ready to Boost Your Skills with Smart Learning?</h3>
                            <p className="mt-3 fs-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, odio pariatur cupiditate sunt dolore deleniti a totam aliquid amet quibusdam minus ipsum iste tempore inventore sit voluptate temporibus voluptatum iusto?
                            </p>
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-start">
                            <button className="btn btn-light text-success fw-semibold px-4 py-3 rounded-pill shadow" style={{ marginTop: '30px' }}>
                                Get Started Today <FaArrowRight className="ms-2" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default EduTechPage
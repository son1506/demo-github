import React, { } from "react";

function Home() {
    return (
        <>
            <div>
                <div>
                    <nav className="navbar navbar-expand-md bg-body text-lowercase" style={{ marginBottom: '-55px', paddingBottom: 0, marginTop: '-52px' }}>
                        <div className="container-fluid"><button className="navbar-toggler" data-bs-toggle="collapse"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
                            <div className="container pb-5 pt-5">
                                <div className="col-md-9 col-xl-8 ml-auto mr-auto">
                                    <form>
                                        <div className="align-items-center form-row" style={{ marginRight: '-44px', paddingLeft: 0, paddingRight: 110 }}>
                                            <div className="col-sm form-group mb-3" style={{ paddingRight: 0, marginRight: '-346px', marginLeft: 410 }}>
                                                <div><img width={88} height={58} src="assets/img/DALL·E%202024-05-23%2017.21.35%20-%20A%20smaller,%20rectangular%20logo%20with%20the%20letters%20%27GD%27%20beside%20the%20text%20%27SPORT%20WORLD%27%20and%20the%20subtitle%20%27HEART%20OF%20THE%20GAME%27.%20The%20design%20should%20maintain%20a%20cle.webp" style={{ paddingBottom: 0, borderTopLeftRadius: 37, borderTopRightRadius: 37, borderBottomRightRadius: 27, borderBottomLeftRadius: 27, background: 'url("https://cdn.bootstrapstudio.io/placeholders/1400x800.png"), linear-gradient(black, white, rgb(140,140,140) 45%)', marginRight: 96, width: 88, height: 58, paddingTop: 0, paddingRight: 0, paddingLeft: 0, marginLeft: '-310px' }} /><span style={{ fontFamily: '"Alfa Slab One", serif', marginBottom: 4, paddingBottom: 0, fontStyle: 'italic', paddingLeft: 0, paddingRight: 0, marginRight: 24, marginLeft: '-90px' }}><span style={{ color: 'rgb(13, 13, 13)', backgroundColor: 'rgb(214, 216, 211)' }}>SPORT GAMES</span></span></div><input className="form-control form-control ps-4 pe-4 rounded-pill" type="text" name="search" placeholder="Search..." style={{ marginBottom: 1, paddingRight: 0, marginRight: 3, paddingLeft: 0, marginLeft: '-81px' }} /><button className="btn btn-primary" type="button" style={{ marginRight: '-83px', marginBottom: 2 }}>Search</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <nav className="navbar navbar-expand-md sticky-top navbar-shrink py-3 navbar-light" id="mainNav" style={{ background: 'var(--bs-light-border-subtle)', paddingBottom: 27, marginBottom: '-3px', paddingRight: 0, paddingLeft: 0, marginLeft: '-2px', marginRight: '-35px', borderTopLeftRadius: 0, borderTopRightRadius: 0, borderBottomRightRadius: 0, borderBottomLeftRadius: 0, paddingTop: 9, marginTop: '-1px', height: '44.5938px' }}>
                        <div className="container"><a className="navbar-brand d-flex align-items-center" href="/">
                            <div>
                                <div />
                            </div>
                        </a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
                            <div className="collapse navbar-collapse" id="navcol-1" style={{ paddingLeft: 92, marginLeft: '-65px' }}>
                                <ul className="navbar-nav mx-auto">
                                    <li className="nav-item"><a className="nav-link" href="index.html" style={{ marginRight: 50 }}>Home</a></li>
                                    <li className="nav-item"><a className="nav-link" href="Court.html" style={{ marginRight: 50 }}>Court</a></li>
                                    <li className="nav-item"><a className="nav-link" href="projects.html" style={{ marginRight: 50 }}>Projects</a></li>
                                    <li className="nav-item"><a className="nav-link" href="pricing.html" style={{ marginRight: 50 }}>Pricing</a></li>
                                    <li className="nav-item"><a className="nav-link" href="contacts.html">Contacts</a></li>
                                    <li className="nav-item" />
                                    <li className="nav-item" />
                                </ul><a className="btn btn-primary shadow" role="button" href="signup.html" style={{ marginRight: 72 }}>Sign up</a>
                            </div>
                        </div>
                    </nav>
                    <section className="py-5">
                        <div className="container py-5">
                            <div className="row mb-4 mb-lg-5">
                                <div className="col-md-8 col-xl-6 text-center mx-auto">
                                    <p className="fw-bold text-success mb-2">Sign up</p>
                                    <h2 className="fw-bold">Welcome</h2>
                                </div>
                            </div>
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-6 col-xl-4">
                                    <div className="card">
                                        <div className="card-body text-center d-flex flex-column align-items-center">
                                            <div className="bs-icon-xl bs-icon-circle bs-icon-primary shadow bs-icon my-4"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-person">
                                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z" />
                                            </svg></div>
                                            <form method="post" data-bs-theme="light">
                                                <div className="mb-3"><input className="form-control" type="email" name="email" placeholder="Email" /></div>
                                                <div className="mb-3"><input className="form-control" type="password" name="password" placeholder="Password" /></div>
                                                <div className="mb-3"><button className="btn btn-primary shadow d-block w-100" type="submit">Sign up</button></div>
                                            </form>
                                            <p className="text-muted">Already have an account?&nbsp;<a href="login.html">Log in</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <footer className="bg-primary-gradient">
                        <div className="container py-4 py-lg-5">
                            <div className="row justify-content-center">
                                <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column">
                                    <h3 className="fs-6 fw-bold">Services</h3>
                                    <ul className="list-unstyled">
                                        <li><a href="#">Web design</a></li>
                                        <li><a href="#">Development</a></li>
                                        <li><a href="#">Hosting</a></li>
                                    </ul>
                                </div>
                                <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column">
                                    <h3 className="fs-6 fw-bold">About</h3>
                                    <ul className="list-unstyled">
                                        <li><a href="#">Company</a></li>
                                        <li><a href="#">Team</a></li>
                                        <li><a href="#">Legacy</a></li>
                                    </ul>
                                </div>
                                <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column">
                                    <h3 className="fs-6 fw-bold">Careers</h3>
                                    <ul className="list-unstyled">
                                        <li><a href="#">Job openings</a></li>
                                        <li><a href="#">Employee success</a></li>
                                        <li><a href="#">Benefits</a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 text-center text-lg-start d-flex flex-column align-items-center order-first align-items-lg-start order-lg-last">
                                    <div className="fw-bold d-flex align-items-center mb-2"><span className="bs-icon-sm bs-icon-circle bs-icon-primary d-flex justify-content-center align-items-center bs-icon me-2"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-bezier">
                                        <path fillRule="evenodd" d="M0 10.5A1.5 1.5 0 0 1 1.5 9h1A1.5 1.5 0 0 1 4 10.5v1A1.5 1.5 0 0 1 2.5 13h-1A1.5 1.5 0 0 1 0 11.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm10.5.5A1.5 1.5 0 0 1 13.5 9h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM6 4.5A1.5 1.5 0 0 1 7.5 3h1A1.5 1.5 0 0 1 10 4.5v1A1.5 1.5 0 0 1 8.5 7h-1A1.5 1.5 0 0 1 6 5.5zM7.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" />
                                        <path d="M6 4.5H1.866a1 1 0 1 0 0 1h2.668A6.517 6.517 0 0 0 1.814 9H2.5c.123 0 .244.015.358.043a5.517 5.517 0 0 1 3.185-3.185A1.503 1.503 0 0 1 6 5.5zm3.957 1.358A1.5 1.5 0 0 0 10 5.5v-1h4.134a1 1 0 1 1 0 1h-2.668a6.517 6.517 0 0 1 2.72 3.5H13.5c-.123 0-.243.015-.358.043a5.517 5.517 0 0 0-3.185-3.185z" />
                                    </svg></span><span>Brand</span></div>
                                    <p className="text-muted">Sem eleifend donec molestie, integer quisque orci aliquam.</p>
                                </div>
                            </div>
                            <hr />
                            <div className="text-muted d-flex justify-content-between align-items-center pt-3">
                                <p className="mb-0">Copyright © 2024 Brand</p>
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-facebook">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                    </svg></li>
                                    <li className="list-inline-item"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-twitter">
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15" />
                                    </svg></li>
                                    <li className="list-inline-item"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-instagram">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                    </svg></li>
                                </ul>
                            </div>
                        </div>
                    </footer>
                </div>

            </div>

        </>
    );
}

export default Home;
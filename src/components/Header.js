import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // Import Link and NavLink

function Header() {
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-md bg-body text-lowercase" style={{ marginBottom: '-55px', paddingBottom: 0, marginTop: '-52px' }}>
                    <div className="container-fluid">
                        <div className="container pb-5 pt-5">
                            <div className="col-md-9 col-xl-8 ml-auto mr-auto">
                                <form>
                                    <div className="align-items-center form-row" style={{ marginRight: '-44px', paddingLeft: 0, paddingRight: 110 }}>
                                        <div className="col-sm form-group mb-3" style={{ paddingRight: 0, marginRight: '-346px', marginLeft: 410 }}>
                                            <div>
                                                <img
                                                    width={88}
                                                    height={58}
                                                    src="assets/img/logo1.png"
                                                    style={{
                                                        paddingBottom: 0,
                                                        borderRadius: '37px 37px 27px 27px',
                                                        background: 'url("https://cdn.bootstrapstudio.io/placeholders/1400x800.png"), linear-gradient(black, white, #8c8c8c 45%)',
                                                        marginRight: 96,
                                                        width: 88,
                                                        height: 58,
                                                        paddingTop: 0,
                                                        paddingRight: 0,
                                                        paddingLeft: 0,
                                                        marginLeft: '-310px'
                                                    }}
                                                />
                                                <span
                                                    style={{
                                                        fontFamily: '"Alfa Slab One", serif',
                                                        marginBottom: 4,
                                                        paddingBottom: 0,
                                                        fontStyle: 'italic',
                                                        paddingLeft: 0,
                                                        paddingRight: 0,
                                                        marginRight: 24,
                                                        marginLeft: '-90px'
                                                    }}
                                                >
                                                    <span style={{ color: '#0d0d0d', backgroundColor: '#d6d8d3' }}>SPORT GAMES</span>
                                                </span>
                                            </div>
                                            <input
                                                className="form-control form-control ps-4 pe-4 rounded-pill"
                                                type="text"
                                                name="search"
                                                placeholder="Search..."
                                                style={{
                                                    marginBottom: 1,
                                                    paddingRight: 0,
                                                    marginRight: 3,
                                                    paddingLeft: 0,
                                                    marginLeft: '-81px'
                                                }}
                                            />
                                            <button className="btn btn-primary" type="button" style={{ marginRight: '-83px', marginBottom: 2 }}>Search</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </nav>
                <nav className="navbar navbar-expand-md sticky-top navbar-shrink py-3 navbar-light" id="mainNav" style={{ background: 'var(--bs-light-border-subtle)', paddingBottom: 27, marginBottom: '-3px', paddingRight: 0, paddingLeft: 0, marginLeft: '-2px', marginRight: '-35px', borderRadius: 0, paddingTop: 9, marginTop: '-1px', height: '44.5938px' }}>
                    <div className="container">
                        <NavLink className="navbar-brand d-flex align-items-center" to="/" />
                        <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1">
                            <span className="visually-hidden">Toggle navigation</span>
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navcol-1" style={{ paddingLeft: 92, marginLeft: '-65px' }}>
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" to="/" style={{ marginRight: 50 }}>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/court" style={{ marginRight: 50 }}>Court</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/projects" style={{ marginRight: 50 }}>Projects</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/pricing" style={{ marginRight: 50 }}>Pricing</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contacts">Contacts</NavLink>
                                </li>
                            </ul>
                            <Link className="btn btn-primary shadow" role="button" to="/signup" style={{ marginRight: 72 }}>Sign up</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Header;

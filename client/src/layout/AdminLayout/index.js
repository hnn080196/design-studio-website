import React from "react";

const PrivateLayout = () => {
  return (
    <div>
      <div>
        <nav
          id="sidenav-1"
          data-mdb-close-on-esc="false"
          className="sidenav"
          data-mdb-hidden="false"
          data-mdb-position="absolute"
          data-mdb-focus-trap="false"
        >
          <ul className="sidenav-menu">
            <li className="sidenav-item">
              <a className="sidenav-link">
                {" "}
                <i className="far fa-smile fa-fw me-3" />
                <span>Link 1</span>
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-grin fa-fw me-3" />
                <span>Category 1</span>
              </a>
              <ul className="sidenav-collapse show">
                <li className="sidenav-item">
                  <a className="sidenav-link">Link 2</a>
                </li>
                <li className="sidenav-item">
                  <a className="sidenav-link">Link 3</a>
                </li>
              </ul>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-grin-wink fa-fw me-3" />
                <span>Category 2</span>
              </a>
              <ul className="sidenav-collapse">
                <li className="sidenav-item">
                  <a className="sidenav-link">Link 4</a>
                </li>
                <li className="sidenav-item">
                  <a className="sidenav-link">Link 5</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div style={{ padding: 20 }} className="text-center">
          <button
            data-mdb-toggle="sidenav"
            data-mdb-target="#sidenav-1"
            className="btn btn-primary"
            aria-controls="#sidenav-1"
            aria-haspopup="true"
          >
            <i className="fas fa-bars" />
          </button>
          <div className="d-flex justify-content-center my-5" />
        </div>
      </div>
    </div>
  );
};

export default PrivateLayout;

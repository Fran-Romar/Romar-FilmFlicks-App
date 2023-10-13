import React from "react";

export default function NavbarApp({ collap }) {
  return (
    <>
      <nav
        className={
          window.innerWidth <= 1000 ? (collap ? "none" : "show") : "show"
        }
      >
        <ul>
          <li>
            <a href="/">
              <i className="fa fa-home"></i> HOME
            </a>
          </li>
          <li>
            <i className="fa fa-star"></i> TREND
          </li>
          <li>
            <i className="fa fa-filter"></i> GENRE
          </li>
        </ul>
      </nav>
    </>
  );
}

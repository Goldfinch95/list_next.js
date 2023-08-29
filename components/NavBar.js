import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link href="/" className="navbar-brand">
        Product
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/ShowList" className="nav-link">
              Listas
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/SaveList" className="nav-link">
              Cargar
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/EditList" className="nav-link">
              Editar
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
import React from "react";
import { Link } from "react-router-dom";
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa";

function Home() {
  const isLoggedIn = localStorage.getItem("user");
  if (isLoggedIn !== null) {
    return (
      <>
        <section className="heading">
          <h1>What do you need help with?</h1>
          <p>Please choose from an option below</p>
        </section>
        <Link to="/new-ticket" className="btn btn-reverse btn-block">
          <FaQuestionCircle />
          Create New Ticket
        </Link>

        <Link to="/tickets" className="btn btn-block">
          <FaTicketAlt />
          View My Tickets
        </Link>
      </>
    );
  } else {
    return (
      <div class="video-container">
        <video src="https://taka-portfolio.s3.us-west-1.amazonaws.com/ticket_system_cover.mp4" autoPlay playsInline muted loop />
        <div class="video-text d-flex align-items-center justify-content-center">
          <h1 class="text-center text-white text-large">
            Support Ticket System
          </h1>
        </div>
      </div>
    );
  }
}

export default Home;

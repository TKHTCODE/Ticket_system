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
    return <h1>Welcome to Support ticket sytem</h1>;
  }
}

export default Home;

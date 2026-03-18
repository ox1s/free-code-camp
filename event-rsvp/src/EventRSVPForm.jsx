import { useState, useEffect, useActionState } from "react";

export default function EventRSVPForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [attendees, setAttendees] = useState("");
  const [dietary, setDietary] = useState("");
  const [guests, setGuests] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="form-container">
      <h1>Event RSVP Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>
            Name:
            <input
              type="text"
              required="true"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            Email:
            <input
              type="email"
              required="true"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            Number of Attendees:
            <input
              type="number"
              min="1"
              required="true"
              placeholder="Number of Attendees"
              value={attendees}
              onChange={(e) => setAttendees(e.target.value)}
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            Dietary Preferences:
            <input
              type="text"
              placeholder="Dietary Preferences (Optional)"
              value={dietary}
              onChange={(e) => setDietary(e.target.value)}
            />
          </label>
        </div>
        <div className="checkbox-group">
          <label>
            Bringing additional guests
            <input
              type="checkbox"
              value={guests}
              onChange={(e) => setGuests(e.target.checked)}
            />
          </label>
        </div>
        <button type="submit">Submit RSVP</button>
      </form>
      <div className="rsvp-submitted" style={{ display: "none" }}>
        <h2>RSVP Submitted!</h2>
        <p>
          <b>Name:{name}</b>
        </p>
        <p>
          <b>Email:{email}</b>
        </p>
        <p>
          <b>Number of Attendees:{attendees}</b>
        </p>
        <p>
          <b>Dietary Preferences:{dietary ? dietary : "None"}</b>
        </p>
        <p>
          <b>Bringing Others:{guests ? "Yes" : "No"}</b>
        </p>
      </div>
    </div>
  );
}

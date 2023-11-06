import React, { useState } from "react";

const getTimeString = () => {
  // const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  // return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  return `${hours}:${minutes}:${seconds}`;
};

export const AppointmentForm = ({
  appointments,
  contacts,
  onAddAppointment,
}) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTime(getTimeString());
    onAddAppointment({ name, contact, date, time });
    // Reset form fields
    setName("");
    setContact("");
    setDate("");
    setTime("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="appointment-name">Name:</label>
        <input
          id="appointment-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="appointment-contact">Contact:</label>
        <input
          id="appointment-contact"
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="appointment-date">Date:</label>
        <input
          id="appointment-date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Appointment</button>
    </form>
  );
};

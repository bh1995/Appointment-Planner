import React from "react";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <>
    <form onSubmit={handleSubmit}>
    {/* Input elements for the appointment data go here */}
    <input type="text" name="title" required />
    <input type="datetime-local" name="dateTime" required />
    <button type="submit">Add Appointment</button>
  </form>
    </>
  );
};

import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, onAddContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
    };
    // set state 
    setName(formData.name);
    setPhone(formData.phone);
    setEmail(formData.email);

    // Check for duplicate names in the contacts
    const duplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    setIsDuplicate(duplicate);
    
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    console.log(contacts);
    if (!isDuplicate) {
      onAddContact(name, phone, email);
      // Optionally reset the form fields
      setName("");
      setPhone("");
      setEmail("");
    } else {
      alert(`A contact with the name ${name} already exists.`);
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList
          contacts={contacts}
        />
      </section>
    </div>
  );
};

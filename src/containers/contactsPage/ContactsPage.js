import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, onAddContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);

  // Check for duplicate names in the contacts
  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    const duplicate = contacts.some(contact => contact.name.toLowerCase() === newName.toLowerCase());
    setIsDuplicate(duplicate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!isDuplicate) {
      onAddContact(name, phone, email);
      // Optionally reset the form fields
      setName('');
      setPhone('');
      setEmail('');
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
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};

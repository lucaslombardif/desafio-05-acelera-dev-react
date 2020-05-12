import React, { useState, useEffect } from 'react';

import Filters from "./components/Filters";
import Topbar from "./components/Topbar"
import Contacts from "./components/Contacts";
import Contatc from './components/Contact';

import './App.scss';

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    function loadContacts() {
      fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
        .then(response => response.json())
        .then(data => setContacts(data));
    }
    loadContacts();
  }, []);

  return (
    <>
      <Topbar />
      <Filters />
      <Contacts>
        {contacts.map(contact => (
          <Contatc key={contact.id} contact={contact} />
        ))}
      </Contacts>
    </>
  );
}

export default App;

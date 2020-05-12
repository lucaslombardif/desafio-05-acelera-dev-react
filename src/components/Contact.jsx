import React from 'react';
import dayjs from "dayjs";

export default function Contact({ contact }) {
  return (
    <article key={contact.id} className="contact">
      <span className="contact__avatar">
        <img src={contact.avatar} alt={contact.name} />
      </span>
      <span className="contact__data">{contact.name}</span>
      <span className="contact__data">{contact.phone}</span>
      <span className="contact__data">{contact.country}</span>
      <span className="contact__data">
        {dayjs(contact.admissionDate).format('DD/MM/YYYY')}
      </span>
      <span className="contact__data">{contact.company}</span>
      <span className="contact__data">{contact.department}</span>
    </article>
  );
}


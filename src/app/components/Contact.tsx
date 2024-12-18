import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact-section">
      <div className="contact-header">
        <h1>Contactează-ne</h1>
      </div>

      <div className="contact-content">
        <p>
          <strong>Adresa:</strong> Strada Exemplelor nr. 25,{" "}
          <strong>Cod Poștal:</strong> 123456
        </p>
        <p>
          <strong>Email:</strong> secretariat@mysite.com
        </p>
        <p>
          <strong>Telefon Mobil:</strong> 07XXXXXXX
        </p>
        <p>
          <strong>Director:</strong> Ion Popescu
        </p>
      </div>
    </section>
  );
};

export default Contact;

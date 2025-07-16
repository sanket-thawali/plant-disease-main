import { useState } from "react";

const AboutUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("mongodb+srv://abhishinde:mdb_atlas_pdi_pdi_user1@plant-disease-identific.kclmhni.mongodb.net/plant-diseases?retryWrites=true&w=majorityt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Your message has been sent!");
        setFormData({ name: "", email: "", mobile: "" });
      } else {
        setMessage("Error sending message.");
      }
    } catch (error) {
      setMessage("Failed to connect to server.");
    }
  };

return (
<div className="container" style={{ backgroundImage: "url('../images/background.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>


    <div className="about-container">
      <h2>About Us</h2>
      <p>Welcome to ई-कृषी TECH, a project dedicated to helping individuals identify and manage plant diseases through advanced leaf detection technology. Our mission is to provide accurate information and support to ensure healthy plants and sustainable agricultural practices.</p>
      <p>We leverage cutting-edge technology to analyze plant health and offer solutions for disease management, empowering farmers and gardeners alike.</p>
      <p>If you have any questions or need assistance, please feel free to reach out to us through the contact form below.</p>

      <p>We offer a range of services including expert consultations, educational resources, and a community forum for sharing experiences and advice.</p>


      <h3>Get in Touch</h3>
      <br></br>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Your Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
    </div>
  );
};

export default AboutUs;

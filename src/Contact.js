import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {

  const {isAuthenticated, user} = useAuth0();

  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({
                theme,
              }) => theme.colors.white};
              border: 1px solid
                ${({ theme }) =>
                  theme.colors.btn};
              color: ${({ theme }) =>
                theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2>Contact Page</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119037.51159297545!2d81.25567310902922!3d21.195247875871598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293cccec49ed45%3A0x2b3ff3bd73c91877!2sBhilai%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1721472138827!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{border:0}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
        <form action="https://formspree.io/f/xeqdgwnq" method="POST" className="contact-inputs">
          <input type="text" placeholder="Name" value={isAuthenticated?user.name:""} name="username" autoComplete="off" required />
          <input type="email" value={isAuthenticated?user.email:""} placeholder="Email" name="email" autoComplete="off" required />
          <textarea placeholder="Message" name="messsages" required></textarea>
          <input type="submit" value="Submit" />
        </form> 
        </div>            
      </div>
    </Wrapper>
  );
};

export default Contact;

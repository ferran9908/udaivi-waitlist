import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  userFirstname: string;
}

export const NotionWaitlistEmail = ({ userFirstname }: EmailProps) => (
  <Html>
    <Head />
    <Preview>
      {userFirstname}, Your Spot on the ZekeCal Waitlist is Booked! 🗓️💬
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={paragraph}>Hey {userFirstname},</Text>
        <Text style={paragraph}>
          Thanks for signing up for ZekeCal - A calendar you can chat with. I'm Ferran, the lead dev at <a href="https://zeke.so">Zeke</a>  {" "}
          and also the creator of this project. 
        </Text>
        <Text style={paragraph}>
          ZekeCal is a calendar that you can actually{" "}
          talk to. No more boring date entries - get ready to chat your
          way to an organized life! I'm working around the clock to
          get it ready for you.
        </Text>
        <Text style={paragraph}>
          I'm so excited, I can barely wait to show you what we've been{" "}
          cooking! 🍳 In the meantime, you can watch a quick demo of the MVP here: <a href='https://youtu.be/C5k3jRC7JjM'>https://youtu.be/C5k3jRC7JjM</a>
        </Text>
        <Text style={paragraph}>
          I'll ping you with updates and let you know as soon as ZekeCal is
          ready to make an appearance on your devices.
        </Text>
        <Text style={paragraph}>
          Got questions or just want to sync up? Simply reply to this email (or schedule a call with me <a href="https://cal.com/ferran">here</a>.)
        </Text>
        <Text style={paragraph}>
          Stay tuned,
          <br />
          Ferran
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          You're on this list because you signed up for ZekeCal.
          If you believe this is a mistake, feel free to ignore this email.
        </Text>
      </Container>
    </Body>
  </Html>
);

NotionWaitlistEmail.PreviewProps = {
  userFirstname: "Tyler",
} as EmailProps;

export default NotionWaitlistEmail;

// Basic styles for readability, avoiding "fancy" styling
const main = {
  backgroundColor: "#ffffff",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  padding: "20px 0",
  color: "#333333",
};

const container = {
  margin: "0 auto",
  padding: "20px",
  maxWidth: "580px",
  backgroundColor: "#f9f9f9",
  borderRadius: "8px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "1.5",
  marginBottom: "16px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#888888",
  fontSize: "12px",
  lineHeight: "1.5",
};

const bold = {
  fontWeight: 500
}

import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
} from "@react-email/components";
import zod from "zod";

export const schemaNewMessageProps = zod.object({
  name: zod.string().default("Jconnor"),
  email: zod.string().email().default("jconnor@sky.net"),
  subject: zod.string().default("New message received"),
  message: zod.string().default("I'll be back"),
});

type NewMessageEmailProps = zod.infer<typeof schemaNewMessageProps>;

export const NewMessageEmail = (props: NewMessageEmailProps) => {
  const { name, email, subject, message } = schemaNewMessageProps.parse(props);

  return (
    <Html>
      <Head />
      <Preview>New message from contact page</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>
            New message received from
            <Link
              href={"mailto:" + email}
              target="_blank"
              style={{
                ...link,
                display: "block",
                marginBottom: "16px",
              }}
            >
              {name} ({email})
            </Link>
          </Heading>
          <Heading style={h2}>Subject: {subject}</Heading>
          <Text style={{ ...text, marginBottom: "14px" }}></Text>
          <p style={paragraph}>{message}</p>
        </Container>
      </Body>
    </Html>
  );
};

export default NewMessageEmail;

const main = {
  backgroundColor: "#ffffff",
};

const container = {
  paddingLeft: "12px",
  paddingRight: "12px",
  margin: "0 auto",
};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
};

const h2 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "20px",
  fontWeight: "bold",
  margin: "35px 0",
  padding: "0",
};

const link = {
  color: "#2754C5",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  textDecoration: "underline",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};

const paragraph = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "16px 0",
};

// const code = {
//   display: "inline-block",
//   padding: "16px 4.5%",
//   width: "90.5%",
//   backgroundColor: "#f4f4f4",
//   borderRadius: "5px",
//   border: "1px solid #eee",
//   color: "#333",
// };

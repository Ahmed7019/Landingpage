import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
} from "@react-email/components";

export default function EmailTemplate({ name, email, phone, description }) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>رسالة جديدة من نموذج الاتصال</Heading>
          <Section style={section}>
            <Text style={text}>
              <strong>الاسم:</strong> {name}
            </Text>
            <Text style={text}>
              <strong>البريد الإلكتروني:</strong> {email}
            </Text>
            <Text style={text}>
              <strong>رقم الهاتف:</strong> {phone}
            </Text>
            <Hr style={hr} />
            <Text style={text}>
              <strong>الرسالة:</strong>
            </Text>
            <Text style={text}>{description}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const section = {
  padding: "0 48px",
};

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
  textAlign: "center",
};

const text = {
  color: "#333",
  fontSize: "16px",
  margin: "24px 0",
  lineHeight: "24px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

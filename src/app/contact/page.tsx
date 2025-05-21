import { Metadata } from 'next';
import ContactClientPage from "./ContactClientPage"; // Import the client component

export const metadata: Metadata = {
  title: "Contact Us | Projects Cost Engineering (PCE) - Get in Touch",
  description: "Contact Projects Cost Engineering (PCE) for inquiries about our quantity surveying, cost engineering, and project management services. We are based in Sri Lanka and serve clients in Oman.",
  keywords: "Contact PCE, PCE Sri Lanka, PCE Oman, Quantity Surveying Inquiry, Cost Engineering Quote, Project Management Consultation, Construction Services Contact",
};

// This is now a Server Component
function ContactPage() {
  return <ContactClientPage />;
}

export default ContactPage;

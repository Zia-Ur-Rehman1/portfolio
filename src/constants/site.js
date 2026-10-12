export const RESUME_VERSION = process.env.NEXT_PUBLIC_RESUME_VERSION || 'latest';
export const RESUME_PDF_URL = `files/Zia_Rehman_Full_Stack_Developer.pdf?v=${RESUME_VERSION}`;
export const CALENDLY_URL = 'https://calendly.com/zia-rehman-web/30min';

// Pakistan Software Export Board freelancer registration (Ministry of IT & Telecom)
export const PSEB_CREDENTIAL = {
  label: 'PSEB Registered Freelancer',
  issuer: 'Pakistan Software Export Board, Govt. of Pakistan',
  registrationNo: 'FL21/PSEB/2026/34370',
  validTill: 'Sep 2027',
  // CNIC redacted from this copy; the original stays offline
  certificateUrl: 'files/PSEB_Freelancer_Certificate.pdf',
  verifyUrl: 'https://portal.techdestination.com/verify-certificate/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZWdpc3RyYXRpb25ObyI6IkZMMjEvUFNFQi8yMDI2LzM0MzcwIiwidHlwZSI6ImZyZWVsYW5jZXIiLCJpYXQiOjE3OTEyODQ3MDAsImV4cCI6MTc5OTA2MDcwMH0.LL809hMah9YyZbFIfWRkfUy7OI3vNCiAwpSTpa1HfW8',
};

import emailjs from '@emailjs/browser'

// Initialize EmailJS with your public key
// You need to sign up at https://www.emailjs.com/ and get your public key
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY_HERE'
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID_HERE'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID_HERE'

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY)

export const sendQuoteEmail = async (formData) => {
  try {
    // Prepare the email template variables
    const templateParams = {
      to_email: 'your-email@example.com', // Your email address
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      project_type: formData.projectType,
      budget: formData.budget,
      timeline: formData.timeline,
      message: formData.message,
      // Additional formatted message
      quote_request: `
New Quote Request Received!

Client Details:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone || 'Not provided'}

Project Information:
- Project Type: ${formData.projectType}
- Budget: ${formData.budget}
- Timeline: ${formData.timeline}

Message:
${formData.message}

---
This is an automated message from WebSprint website.
      `
    }

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    )

    return {
      success: true,
      message: 'Quote request sent successfully! We will contact you soon.',
      response
    }
  } catch (error) {
    console.error('Email sending failed:', error)
    return {
      success: false,
      message: 'Failed to send quote request. Please try again or contact us directly.',
      error
    }
  }
}

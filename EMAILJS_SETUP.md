# EmailJS Setup Guide for WebSprint Quote Form

This guide will help you set up email functionality for the "Get a Quote" form using EmailJS.

## Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Click "Sign Up" and create a free account
3. Verify your email

## Step 2: Set Up Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add Service**
3. Choose your email provider:
   - **Gmail** (recommended for beginners)
   - **Outlook**
   - **Yahoo**
   - Or use **EmailJS SMTP**

### For Gmail:
1. Select "Gmail"
2. Click "Connect Account"
3. Sign in with your Gmail account
4. Allow EmailJS to access your account
5. Copy the **Service ID** (looks like: `service_xxxxx`)

## Step 3: Create Email Template

1. Go to **Email Templates** in EmailJS dashboard
2. Click **Create New Template**
3. Use this template:

```
Subject: New Quote Request from {{from_name}}

Hello,

You have received a new quote request from your WebSprint website!

CLIENT DETAILS:
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}

PROJECT INFORMATION:
- Project Type: {{project_type}}
- Budget: {{budget}}
- Timeline: {{timeline}}

MESSAGE:
{{message}}

---
This is an automated message from your WebSprint website.
```

4. Copy the **Template ID** (looks like: `template_xxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** → **API Keys**
2. Copy your **Public Key** (looks like: `xxxxxxxxxxxxx`)

## Step 5: Update Configuration

Open `src/services/emailService.js` and replace:

```javascript
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY_HERE'
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID_HERE'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID_HERE'
```

With your actual values from EmailJS.

Also update the recipient email:
```javascript
to_email: 'your-email@example.com', // Replace with your email
```

## Step 6: Install EmailJS Package

Run this command in your project:
```bash
npm install @emailjs/browser
```

## Step 7: Test the Form

1. Start your development server: `npm run dev`
2. Click "Get a Quote" button
3. Fill in the form
4. Click "Get My Quote"
5. Check your email for the quote request

## Troubleshooting

### Email not received?
- Check spam/junk folder
- Verify Service ID and Template ID are correct
- Check that your email service is connected in EmailJS

### "Failed to send" error?
- Verify Public Key is correct
- Check browser console for detailed error message
- Make sure EmailJS service is active

### Rate limiting?
- EmailJS free plan has limits
- Upgrade to paid plan if needed

## Security Notes

- The Public Key is safe to expose in frontend code
- Never expose your Private Key
- Consider adding rate limiting on your backend later
- Add CAPTCHA for production use

## Next Steps (Optional)

For production, consider:
1. Adding a backend API endpoint to send emails securely
2. Adding CAPTCHA to prevent spam
3. Storing submissions in a database
4. Adding email confirmation to users
5. Setting up automated responses

## Support

- EmailJS Documentation: https://www.emailjs.com/docs/
- Contact: support@emailjs.com

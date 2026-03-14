# Contact Form Setup Guide

## The Issue

The contact form needs an email service to work. Currently, it uses **Resend** to send emails.

## Option 1: Setup Resend (Recommended - Free Tier Available)

### Steps:

1. **Sign up for Resend**
   - Go to https://resend.com
   - Create a free account (100 emails/day free)

2. **Get your API Key**
   - After signing in, go to https://resend.com/api-keys
   - Click "Create API Key"
   - Copy the API key

3. **Add API Key to your project**
   - Open `.env.local` file in your project root
   - Replace `your_resend_api_key_here` with your actual API key:
   ```
   RESEND_API_KEY=re_your_actual_key_here
   ```

4. **Verify your domain (Optional but recommended)**
   - For production, you should verify your domain in Resend
   - For testing, you can use the default `onboarding@resend.dev` sender

5. **Restart your dev server**
   - Stop the current server (Ctrl+C in terminal)
   - Run `npm run dev` again
   - The contact form should now work!

## Option 2: Use a Different Email Service

If you prefer not to use Resend, you can modify the API route to use:
- **SendGrid**
- **Mailgun**
- **Nodemailer with Gmail**
- **EmailJS** (client-side only)

Let me know which service you prefer, and I can help you set it up!

## Option 3: Disable Contact Form Temporarily

If you want to disable the contact form for now:
1. You can remove the contact section from the homepage
2. Or replace it with just your email address and social links

## Testing the Contact Form

Once you've added the API key:
1. Go to http://localhost:3000
2. Scroll to the contact section
3. Fill out the form
4. Click "Send Message"
5. You should receive an email at: jpjangid710@gmail.com

## Current Configuration

- **Your email** (where messages will be sent): jpjangid710@gmail.com
- **Sender email**: onboarding@resend.dev (Resend's test email)
- **API Route**: `/api/send`

## Need Help?

Let me know if you:
- Want to use a different email service
- Need help setting up Resend
- Want to temporarily disable the form
- Have any other questions!

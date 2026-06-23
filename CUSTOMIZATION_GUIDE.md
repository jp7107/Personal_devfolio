# Portfolio Customization Guide

## ✅ Already Updated

The following information has been updated with your details:

- **Name**: Jyotiprakash
- **Title**: Aspiring SDE/Full Stack Developer
- **Email**: jpjangid710@gmail.com
- **Phone**: 8005682108
- **Location**: Jaipur, Rajasthan
- **GitHub**: jp7107
- **LinkedIn**: https://www.linkedin.com/in/jyotiprakash-jangid-a72418331/

## 📝 What You Need to Update Next

### 1. Profile Picture
Replace the profile image at:
- `public/assets/me.jpg` with your own photo

### 2. Projects
Edit `src/data/projects.tsx` to add your own projects. Currently showing the previous owner's projects.

Each project should include:
- Project name
- Description
- Technologies used
- Live URL (if available)
- GitHub repo (if available)
- Screenshots (add them to `public/assets/projects-screenshots/`)

### 3. Work Experience
Edit `src/data/constants.ts` - Look for the `EXPERIENCE` array (currently empty with example commented out).

Add your work experience in this format:
```typescript
{
  id: 1,
  startDate: "Jan 2024",
  endDate: "Present",
  title: "Your Job Title",
  company: "Company Name",
  description: [
    "Your achievements and responsibilities",
  ],
  skills: [SkillNames.REACT, SkillNames.NODEJS], // Add relevant skills
}
```

### 4. Skills
Edit `src/data/constants.ts` - The `SKILLS` object contains all available skills.
You can modify the descriptions to match your style or add new skills if needed.

### 5. Social Media Links
Edit `src/data/config.ts` to add your social media links:
- Twitter/X (currently empty)
- Instagram (currently empty)
- Facebook (currently empty)

### 6. Resume Link
Edit `src/components/sections/hero.tsx` - Update the resume link (currently points to a Google Drive link).

### 7. Domain/Site URL
Edit `src/data/config.ts` - Update the `site` field with your actual domain once deployed.

### 8. OG Image (Social Media Preview)
Replace `public/assets/seo/og-image.png` with your own preview image for social media sharing.

### 9. Favicon
Replace `src/app/favicon.ico` with your own favicon.

### 10. GitHub Stars Button
Edit `src/data/config.ts`:
- Update `githubRepo` to your actual repository name

## 🎨 Optional Customizations

### Theme Colors
Edit `tailwind.config.ts` to customize colors.

### Animations
Modify animation settings in:
- `src/components/animated-background-config.ts`
- Individual component files

### Remove/Hide Sections
You can hide sections by commenting them out in `src/app/page.tsx`

## 🚀 Testing Your Changes

After making changes, check:
1. Homepage - Your name and title should appear correctly
2. Contact section - Your email should be displayed
3. Footer - Your name in copyright
4. Social media links work correctly
5. All sections display properly

## 📧 Need Help?

If you need help with any customization, feel free to ask!

# Deployment Guide: Deploy to Vercel in 3 Clicks 🚀

This project is a Next.js (App Router) web application created for **Akzeinep** by **Ali**. It is fully prepared and optimized for immediate production deployment on Vercel.

---

## Prerequisites
- A [GitHub](https://github.com/) account
- A [Vercel](https://vercel.com/) account (sign in with your GitHub account)
- [Git](https://git-scm.com/) installed locally

---

## Step 1: Initialize Git and Push to GitHub

Run the following commands in your project root terminal:

```bash
# 1. Initialize git repository
git init

# 2. Stage all files
git add .

# 3. Commit changes
git commit -m "feat: complete How To Not Lose Your Girlfriend site for Akzeinep"

# 4. Create main branch and link to your GitHub repository
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPOSITORY_NAME>.git

# 5. Push to GitHub
git push -u origin main
```

*(Replace `<YOUR_GITHUB_USERNAME>` and `<YOUR_REPOSITORY_NAME>` with your actual repository details)*

---

## Step 2: Deploy to Vercel in 3 Clicks

1. **Click 1:** Go to [vercel.com/new](https://vercel.com/new) and click **"Import"** next to your `Howtonotlostyourgirlfriend` (or repository name) repository under your GitHub account.
2. **Click 2:** Leave the Framework Preset as **Next.js** (Vercel automatically detects all build commands and output settings).
3. **Click 3:** Click **"Deploy"**.

Vercel will build and deploy your site in less than a minute, providing you with a live production URL (e.g., `https://howtonotloseyourgirlfriend.vercel.app`) with automatic SSL.

---

## Verification & Build Details
- **Build Command**: `npm run build`
- **Output**: Next.js App Router static/prerendered output
- **Linting**: Fully clean (`npm run lint` passes with 0 errors)
- **TypeScript**: Strict type compliance without any `any` types
- **Image Optimization**: `images.unsplash.com` is configured in `remotePatterns` for optimized image delivery.

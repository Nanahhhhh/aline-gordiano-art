# Owner Guide — Aline Gordiano Art Website

This guide explains how to manage the content of your website without needing technical knowledge.

---

## 📁 Where Is My Artwork Data?

All artwork information lives in one file:

```
src/data/artworks.ts
```

Open this file in any text editor or code editor to make changes.

---

## 🖼️ How to Add a New Artwork

1. **Add the image** to the `/public/artworks/` folder.  
   Name it clearly, e.g. `my-new-painting.jpg`.

2. **Open** `src/data/artworks.ts`.

3. **Copy** one of the existing artwork entries and **paste** it at the end of the array (before the closing `]`).

4. **Fill in** all the fields:

```ts
{
  slug: 'my-new-painting',           // URL-friendly name (no spaces, lowercase)
  title: 'My New Painting',
  year: 2025,
  medium: 'Acrylic on canvas',
  dimensions: '60 × 80 cm',
  price: '£1,200',                   // Remove this line if you prefer not to show a price
  status: 'available',               // 'available' | 'sold' | 'on request'
  tags: ['abstract', 'landscape'],
  image: '/artworks/my-new-painting.jpg',
  alt: 'Description of the painting for accessibility',
  featured: true,                    // Set to true to show on the Home page
  description: 'Write a description here...',
},
```

---

## 💰 How to Change a Price

1. Open `src/data/artworks.ts`.
2. Find the artwork by its `title` or `slug`.
3. Update the `price` field:
```ts
price: '£1,500',
```
4. Save the file and redeploy.

---

## ✅ How to Mark an Artwork as Sold

1. Open `src/data/artworks.ts`.
2. Find the artwork.
3. Change `status` to `'sold'`:
```ts
status: 'sold',
```
4. Save and redeploy.

---

## 📸 How to Upload New Images

1. Place the image file (JPG or PNG, ideally under 2MB) in:
   ```
   /public/artworks/
   ```
2. Reference it in `artworks.ts` as:
   ```ts
   image: '/artworks/your-filename.jpg',
   ```

> **Tip:** Use tools like [Squoosh](https://squoosh.app) to compress images before uploading.

---

## 📱 How to Update Your Instagram Link

1. Open `E/components/Footer.tsx`.
2. Find:
   ```tsx
   href="https://instagram.com/alinegordianoart"
   ```
3. Replace `alinegordianoart` with your new username.
4. Also update it in `src/app/contact/page.tsx` and `src/app/page.tsx`.

---

## 📧 How to Change the Email Address

Search for `alinegordianoart@gmail.com` across the project and replace with your new email.  
Files to update:

- `src/app/contact/page.tsx`
- `src/app/legal/privacy/page.tsx`
- `src/app/legal/terms/page.tsx`

---

## 🚀 How to Redeploy After Changes

If deployed on Vercel, simply push your changes to GitHub and Vercel will automatically redeploy:

```bash
git add .
git commit -m "Update artwork data"
git push
```

---

## 🆘 Need Help?

Contact your developer or raise an issue in your project repository.

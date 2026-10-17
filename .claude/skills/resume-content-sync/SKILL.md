---
name: resume-content-sync
description: Step-by-step process for syncing a new CV/resume into this portfolio's content (work experience, skills, bio, downloadable PDF). Use whenever Keith provides an updated CV.
license: MIT
---

# Resume → Portfolio Content Sync

This portfolio's content is driven by a small set of files. When given a new CV/resume (PDF, text, or otherwise), sync it into the site in this order:

## 1. Extract the key facts from the CV
- Current title/specialization (profile summary line).
- Full work history: company, role/title, dates, 2–4 standout achievements per role (prefer quantified impact: %, scale, team size, tech used).
- Top skills, grouped roughly into "frontend/general" vs "backend/cloud/infra" (matches the two-column layout in the UI).
- Contact links (email, GitHub, LinkedIn) if changed.

## 2. Update `data/index.ts`
- **`workExperience`**: one object per real role, most recent first (or matching whatever order reads best on the page — current cards render in array order). Each entry:
  ```ts
  {
    id: <n>,
    title: "<Role Title> - <Company>",
    desc: "<1-2 sentence, achievement-focused summary>",
    className: "md:col-span-2",
    thumbnail: "/<existing-or-new-image>",
  }
  ```
  Reuse existing images in `public/` (e.g. `exp1.jpg`, `intern1.jpg`, `intern2.jpg`, `exp2.svg`) unless new ones are provided — thumbnails are decorative, not literal company logos, in the current design.
- **`leftList` / `rightList`**: 5–8 items each, representing current strongest skills (not an exhaustive CV dump — the full skill list belongs on the CV/resume itself, not this compact bento card).
- **`gridItems`**: update the bio-blurb entries (currently ids `1`, `4`, `5`) so the "About" section's tone/title matches the CV's current profile summary and specialization.
- **`socialMedia`**: verify/update GitHub, LinkedIn, and CV download path (`href: "/Keith_Ng_CV.pdf"`) if it changed.

## 3. Update `components/Hero.tsx`
Rewrite the intro paragraph as a short (2–3 sentence) elevator pitch consistent with the CV's profile summary — this is the very first thing visitors read, keep it tight.

## 4. Replace `public/Keith_Ng_CV.pdf`
Copy the actual new CV file to this exact path so the "download CV" link (wired via `socialMedia`) serves the real, current document. Keep the filename identical unless intentionally changing the link in `data/index.ts` too.

## 5. Validate
```bash
npm run build   # confirm no type errors
npm run dev      # visually confirm no text overflow/truncation (line-clamp classes are used on some cards)
```
Double-check company/role/date accuracy against the source CV — don't paraphrase numbers or invent achievements not present in the source document.

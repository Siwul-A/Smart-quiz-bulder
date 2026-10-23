# ☁️ AZ-900 Quiz Coach (Unofficial)

A lightweight quiz app (plain HTML, CSS and JavaScript) that helps learners prepare for the **Microsoft Azure Fundamentals (AZ-900)** exam by explaining *why* each answer is right or wrong.

Built for the **#1MillionDevs Vibe Coding Hackathon: AZ-900 Exam Prep Edition**
Challenge: **Practice & Assessment: Smart Quiz Builder**

> ⚠️ **Unofficial.** This project is not affiliated with or endorsed by Microsoft. It contains no real exam questions and no Microsoft logos. All questions are original and based on the public AZ-900 skills outline on Microsoft Learn.

## 🎯 The problem

Many learners practise with questions but never understand *why* an answer is right or wrong, so the same mistakes repeat on exam day.

## 💡 The solution

AZ-900 Quiz Coach gives **instant feedback and a clear explanation after every question**, organised by AZ-900 skill area, and automatically brings back the questions you got wrong.

## ✨ Features

- **37 original questions** weighted like the official skills outline:
  | Skill area | Official weight | Questions |
  |---|---|---|
  | Describe cloud concepts | 25–30% | 10 (27%) |
  | Describe Azure architecture and services | 35–40% | 14 (38%) |
  | Describe Azure management and governance | 30–35% | 13 (35%) |
- **Exam-style question formats:** single choice, multiple choice ("choose two"), and Yes/No statement sets
- **Instant feedback:** correct answers go green, wrong picks go red, with an explanation for every question
- **Study modes:** full practice, quick 15-question round, practice by topic, and **Retry missed questions**
- **Progress tracking:** accuracy per skill area (saved in the browser with `localStorage`) and your last attempts
- **Results screen:** score, per-topic bars, the topic to focus on next, and a full question review
- Randomised question and answer order, light/dark theme, mobile friendly
- No backend, no build step, no dependencies, and no data leaves your device

## 🚀 Run it

Open `index.html` in any modern browser (keep `style.css` and `script.js` in the same folder). That's it.

### Host it free on GitHub Pages

1. Push `index.html`, `style.css`, `script.js` and `README.md` to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then **Save**.
4. After a minute your app is live at `https://<your-username>.github.io/<repo-name>/`.

## 🧱 Project structure

```
.
├── index.html   # Page structure (HTML)
├── style.css    # Styling, light/dark theme (CSS)
├── script.js    # Question bank + quiz logic (JavaScript)
└── README.md
```

## ➕ Adding or editing questions

Questions live in the `Q` array inside `script.js`. Each question looks like this:

```js
{id:"ar99", d:"arch", skill:"Topic name", type:"single",   // single | multi | yesno
 q:"Question text?",
 opts:["A","B","C","D"], ans:1,                             // multi: ans:[0,2]
 exp:"Why the answer is right and why the others are wrong."}
```

For `yesno` questions use `stmts:[{t:"Statement",a:true}, ...]` instead of `opts` and `ans`.
Domains: `cc` (cloud concepts), `arch` (architecture & services), `mgmt` (management & governance).

## 🤖 How AI was used

- **Claude.ai** helped design the app, write original exam-style questions and explanations, and check the structure against the public AZ-900 skills outline.
- Prompts asked for: original questions only, one clear explanation per question covering why wrong options fail, and weighting that matches the official domain percentages.
- All question content should be reviewed against [Microsoft Learn](https://learn.microsoft.com/credentials/certifications/exams/az-900/) before relying on it for the real exam.

## 🗺️ Roadmap

- Larger question bank and sub-topic filters
- Spaced-repetition scheduling for missed questions
- Amharic and other local-language explanations
- Timed exam simulation mode
- Support for other fundamentals exams (AI-900, SC-900, DP-900)

## 📚 Source of truth

Skills outline: [Study guide for Exam AZ-900](https://learn.microsoft.com/credentials/certifications/resources/study-guides/az-900) on Microsoft Learn.

## 📄 License

MIT. Free to use, adapt and share.
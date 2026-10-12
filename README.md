# Hope Foundation: NGO and Social Welfare Website

A responsive one-page website for a fictional NGO, built to promote social welfare work, show its activities, encourage donations, and collect visitor feedback.

Made by **Vasu Garg** (KIET) as a college MSE project.

## Problem Statement

Develop a fully functional, responsive, and user-friendly website that promotes social welfare initiatives, showcases NGO activities, and encourages donations and volunteering, using HTML, CSS, and basic JavaScript.

## Features

- **Fixed navbar** with links that scroll smoothly to each section, plus a highlighted Donate link
- **Hero section** with a tagline and a Donate Now button
- **Story section** explaining what the NGO does (learning, donations, inspiration, healthcare)
- **Charity event section** with selectable donation amounts (₹500, ₹1000, ₹2000, ₹5000)
- **Featured causes** shown as three cards (Education, Food, Health)
- **Impact stats** (funds raised, volunteers, people helped, meals served)
- **Feedback form** with validation, which shows the user's response back to them after submitting
- **Responsive layout** that works on mobile, tablet, and desktop

## Technologies Used

| Technology | Used for |
|---|---|
| HTML5 | Page structure with semantic tags (`header`, `nav`, `section`, `article`, `footer`) |
| CSS3 | Styling, Flexbox and Grid layouts, CSS variables, media queries |
| JavaScript (basic) | Feedback form validation and showing the submitted response |

## How the Feedback Form Works

JavaScript is used **only** in the feedback form (`script.js`):

1. When the form is submitted, `preventDefault()` stops the page from reloading.
2. The code checks that every field is filled in.
3. A regular expression checks that the email address looks valid.
4. If something is wrong, an error message is shown.
5. If everything is valid, the form is hidden and a card appears showing the name, email, rating, and feedback the user entered.
6. A "Submit another response" button brings the form back.

## Responsive Design

- Mobile-first CSS, with breakpoints at `768px` (tablet) and `1024px` (desktop)
- CSS Grid for the cards and stats, Flexbox for the navbar and partner row
- Images scale with `max-width: 100%` and `object-fit: cover`

## Project Structure

```
ngo-website/
├── index.html      (page structure)
├── style.css       (all styling)
├── script.js       (feedback form logic)
├── README.md
└── images/
    ├── hero.jpg
    ├── event.jpg
    ├── cause1.jpg
    ├── cause2.jpg
    ├── cause3.jpg
    └── stats-bg.jpg
```

## How to Run

1. Download or clone this repository.
2. Open `index.html` in any web browser.

No installation or internet connection is needed, except for the Google Fonts (Poppins), which fall back to Arial if offline.

## Live Demo

Add your link here after hosting, for example on GitHub Pages:
`https://your-username.github.io/your-repo-name/`

## Notes

- The photos in `images/` are placeholders. To use your own, save your photos with the same file names.
- The Donate Now button opens an email to a sample address, since the site has no backend to process payments.
- The NGO name, numbers, and partner names are fictional.

## Author

**Vasu Garg**, KIET

# Power of Markets (POM) — Production WordPress Theme Architecture

This package contains the complete production WordPress theme source code for **POWER OF MARKETS (POM)**, founded by **Abhishek Upadhyay**.

---

## 1. WordPress Installation Instructions

1. **Upload Theme Files**:
   Copy the `wordpress-theme/` directory into your WordPress themes folder:
   ```bash
   wp-content/themes/power-of-markets/
   ```

2. **Activate the Theme**:
   - Log into WordPress Admin (`/wp-admin`)
   - Navigate to **Appearance -> Themes**
   - Click **Activate** on **Power of Markets Theme**

3. **Recommended WordPress Plugins**:
   - **Advanced Custom Fields PRO (ACF)**: For syllabus repeaters, price fields, instructor credentials, and downloadable spreadsheets.
   - **Custom Post Type UI (CPT UI)**: (Optional, as core CPTs are already declared in `functions.php`).
   - **WP Mail SMTP**: To deliver contact inquiries and webinar confirmations reliably.

---

## 2. Graphy LMS Integration Architecture

Power of Markets leverages **Graphy** (`https://powerofmarket.graphy.com/`) as its LMS backbone.

### Single Sign-On (SSO) & Webhook Sync:
1. In your **Graphy Admin -> Integrations -> Webhooks**:
   - Point the webhook URL to: `https://your-domain.com/wp-json/pom/v1/graphy-webhook`
   - Trigger events: `course.enrolled`, `user.registered`, `course.completed`
2. When a student purchases on Graphy or the WordPress front-end, student metadata is automatically synced to the WordPress `wp_usermeta` table.
3. The student can seamlessly stream videos in the **Student Dashboard** via Graphy embedded players or direct authenticated SSO tokens.

---

## 3. Custom Post Types & Content Models

- `pom_course`: Courses with fields for category, level, instructor, duration, lessons count, syllabus modules, price in INR, and verified Graphy checkout URL.
- `pom_webinar`: Live interactive sessions with fields for date, time IST, seats remaining, and calendar `.ics` generation.
- `pom_career`: Job openings with department, location, experience requirements, and direct application workflow.

---

## 4. Page-by-Page QA Checklist (All 16 Audited Pages)

| Page | URL Path / State | Status | Verified Features |
|---|---|---|---|
| **1. Homepage** | `/` (`home`) | Verified | Cinematic 2-column hero, interactive Option Greeks terminal, 4 categories, Why POM, Featured courses, Founder spotlight, 4-stage learning journey, Upcoming webinars, Video player, FAQs, Navy CTA |
| **2. About Us** | `/about` | Verified | Mission, 360° Vision, Pedagogical pillars, SEBI compliance principles |
| **3. Courses** | `/courses` | Verified | Search bar, Category filters, Level filters, Sort controls, Course cards, Graphy portal links |
| **4. Course Detail** | `/course-detail` | Verified | Option Greeks Masterclass deep dive, expandable syllabus modules, prerequisites, price sidebar |
| **5. Blog Hub** | `/blog` | Verified | Featured article, topic filters, reading time, newsletter subscription |
| **6. Blog Detail** | `/blog-detail` | Verified | Executive takeaways box, formula deconstructions, share buttons, related articles |
| **7. Careers** | `/careers` | Verified | Culture values, open positions, interactive application modal with CV upload simulation |
| **8. Founder's Profile**| `/founder` | Verified | Abhishek Upadhyay credentials, 10+ yrs research, philosophy quote, media perspectives |
| **9. Our Team** | `/team` | Verified | Leadership and quantitative research faculty, specializations, experience years |
| **10. Webinars** | `/webinars` | Verified | Upcoming / Past tabs, live masterclasses, interactive seat reservation with `.ics` calendar generator |
| **11. Memberships** | `/membership` | Verified | Starter, POM Pro Trader, Institutional Circle tiers, feature comparison matrix |
| **12. Contact Us** | `/contact` | Verified | Registered Noida office address, email, phone, anti-spam math verification |
| **13. Auth** | `/auth` | Verified | Split-screen login, register, forgot password, authentic session state |
| **14. Student Dashboard**| `/dashboard` | Verified | Active course player, progress bar, lesson playlist, spreadsheets download, certificate generator |
| **15. Cart & Checkout** | `/checkout` | Verified | Cart items, coupon POM10 discount, 18% GST calculation, simulated payment & instant invoice |
| **16. Legal Policies** | `/legal` | Verified | Privacy Policy, Terms of Use, Refund Policy, SEBI Risk Warning |

---

## 5. Brand Design System Summary
- **Deep Navy**: `#071F49` (Primary institutional canvas & headers)
- **Royal Blue**: `#0767DF` (Primary brand accent & action points)
- **Cyan**: `#0AA8EF` (Glows, graph lines, data highlights)
- **Ice Blue**: `#EEF6FF` (Neumorphic base surfaces)
- **Positive Green**: `#159B72` (Greeks and regulatory trust badges)
- **Heading Navy**: `#081B3A`
- **Muted Text**: `#61748D`
- **Border**: `#DCEAF8`
- **Typography**: Manrope (Headings), DM Sans (Body), JetBrains Mono (Financial numbers & code)

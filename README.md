# GBS Platform – Frontend

🎨 **gbs-platform** je frontend aplikacija za GBS (Global Business Systems) – digitalni poslovni ekosistem koji povezuje male i srednje biznise sa alatima za izradu sajtova, online prodavnice, ERP, CMS i AI podršku.

---

## 🚀 Tehnologije i alati

- [Vue 3](https://vuejs.org/) + [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vue Router](https://router.vuejs.org/)
- [axios](https://axios-http.com/) – komunikacija sa backendom
- [vue-i18n](https://vue-i18n.intlify.dev/) – internacionalizacija (sr / en)
- Stellar UI template by [Cruip](https://cruip.com/)
- Priprema za Mosaic admin dashboard

---

## 🧩 Funkcionalnosti

### 🎯 Javni deo

- Hero sekcija + prezentacija usluga
- Kontakt forma (`ContactForm.vue`)
- Višejezična podrška (🇷🇸 / 🇬🇧)
- Komponente za prijavu, registraciju i reset lozinke
- Priprema za korisničke uloge i dashboard-e

### 👥 Korisnici

- **Registracija:** Ime, Email, Lozinka, Poruka, Referrer
- **Kontakt:** Ime, Email, Poruka, Newsletter
- Backend odgovara validacijom i status porukama

---

## 🗂️ Struktura projekta

├── src/
│ ├── assets/
│ ├── components/
│ │ └── ContactForm.vue
│ ├── pages/
│ │ ├── SignUp.vue
│ │ ├── SignIn.vue
│ │ └── ResetPassword.vue
│ ├── locales/
│ │ ├── sr.json
│ │ └── en.json
│ ├── router/
│ ├── App.vue
│ └── main.js
├── public/
├── index.html
└── vite.config.js

yaml
Copy
Edit

---

## 🔧 Pokretanje lokalno

### 📦 Instalacija:

```bash
npm install
🚀 Razvoj:
bash
Copy
Edit
npm run dev
Frontend aplikacija će biti dostupna na:

arduino
Copy
Edit
http://localhost:5173
🔗 Backend API (Laravel)
Podrazumeva se da backend radi na http://localhost:8000 i rute idu ka:

POST /api/contact

POST /api/register

🌐 Internacionalizacija (i18n)
Svi tekstovi se prevode preko $t() i lokalizovani su

Fajlovi se nalaze u src/locales/sr.json i en.json

Planirana integracija sa Google Translate API za automatske prevode

🧠 Planirane nadogradnje
🎛️ Admin dashboard (Mosaic UI)

🧾 Prikaz statusa registracije

🧠 Vuex ili Pinia za globalni state

✉️ Toast/flash notifikacije

🔐 Autentifikacija + autorizacija

🌍 SEO podrška za sajt (meta tagovi, sitemap)

⚙️ CMS builder – "Jednim klikom do sajta"

🔁 Integracija sa Stripe, PayPal

📜 Licenca i pravo korišćenja
Ova aplikacija koristi legalno kupljene premium UI šablone sa sajta Cruip, uključujući:

Stellar (javni deo)

Mosaic (admin dashboard – u pripremi)

🙌 Autori i vizija
GBS je inicijativa za digitalizaciju i automatizaciju poslovanja u regionu i svetu. Platforma omogućava firmama svih veličina da pokrenu sajt, prodavnicu ili ceo ERP sistem na jednom mestu – brzo, kvalitetno i pošteno.

📢 Dokumentaciju redovno dopunjavamo. Za pitanja, podršku i razvoj – kontaktirajte nas putem forme na gbs-platform.com.


👤 Autor
Radoje Božić – Full Stack Developer
📧 admin@gbsplatform.com
GitHub: @RadojeBozic
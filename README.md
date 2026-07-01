# 💱 Currency Converter

A simple web-based Currency Converter built using **HTML, CSS, and JavaScript**. The application provides a secure login page, authenticates users using a local JSON file, and fetches live currency exchange rates from the ExchangeRate API.

---

## 📌 Features

- 🔐 User Login Authentication
- 📄 Credentials stored in `users.json`
- 🌐 Fetches live exchange rates using ExchangeRate API
- 💱 Convert between multiple world currencies
- 🔄 Swap currencies
- 🎨 Clean and responsive user interface
- ⚡ Fast and easy to use

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Fetch API
- ExchangeRate API

---

## 📂 Project Structure

```
Currency-Converter/
│
├── login.html          # Login Page
├── dashboard.html      # Currency Converter Dashboard
├── script.js           # Login Authentication
├── dashboard.js        # Currency Converter Logic
├── users.json          # User Credentials
├── README.md           # Project Documentation
```

---

## 🚀 How to Run

1. Clone the repository

```bash
git clone https://github.com/ParthDoomra/Currency-Converter.git
```

2. Open the project in **Visual Studio Code**.

3. Install the **Live Server** extension (if not already installed).

4. Right-click on `login.html`.

5. Select **Open with Live Server**.

6. Login using the credentials stored in `users.json`.

---

## 🔑 Login Credentials

Example:

```json
[
    {
        "username": "admin",
        "password": "admin123"
    }
]
```

You can edit `users.json` to add more users.

---

## 🌍 API Used

ExchangeRate API

https://www.exchangerate-api.com/

Example Endpoint:

```
https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/USD
```

---

## 📸 Screenshots

### Login Page

- User authentication using `users.json`

### Dashboard

- Live currency conversion
- Currency selection
- Swap currencies
- Real-time exchange rates

---

## 📖 How It Works

1. User enters a username and password.
2. The application fetches `users.json`.
3. Credentials are validated.
4. On successful login, the user is redirected to `dashboard.html`.
5. The dashboard fetches live exchange rates from the ExchangeRate API.
6. The user selects currencies and enters an amount.
7. The converted amount is displayed instantly.

---

## 👨‍💻 Author

**Parth Doomra**

GitHub: https://github.com/ParthDoomra

---

## 📜 License

This project is created for educational and learning purposes.

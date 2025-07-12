# 🛍️ Product Management App (React + Redux)

A fully functional **Product Management System** built with React, Redux Toolkit, React Router, and JSON Server. This app allows authenticated users to **add, edit, delete, view, search, sort, and filter products**.

---

## 🔑 Credentials to Login

> Use the following credentials:

- **Username:** `admin`  
- **Password:** `123`

---

## 🌐 Hosted Link

🔗 [Visit the Live App](https://product-management-app-exam.vercel.app/login)

---

## ✨ Features

✅ User Login (with session-based auth)  
✅ Protected Routes (only visible when logged in)  
✅ Add New Product  
✅ Edit Existing Product  
✅ Delete Product  
✅ Search Products by Title  
✅ Sort by Price (Low to High, High to Low)  
✅ Filter by Category (if categories exist)  
✅ Bootstrap Styling  
✅ Responsive & Clean UI

---

## ⚙️ Tech Stack

| Tool            | Usage                       |
|-----------------|-----------------------------|
| React           | Frontend UI                 |
| Redux Toolkit   | Global State Management     |
| React Router    | Page Navigation             |
| JSON Server     | Fake REST API               |
| Bootstrap 5     | Responsive Styling          |
| Axios           | HTTP Requests               |

---

## 🚀 Installation Steps (Local Setup)

1. **Clone the repo**

```bash
git clone https://github.com/your-username/product-management-app.git
cd product-management-app
```

2. **Install frontend dependencies**

```bash
npm install
```

3. **Start JSON Server (Backend)**

```bash
npx json-server --watch db.json --port 5000
```

4. **Run React App**

```bash
npm run dev
```

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── ProductForm.jsx
│   ├── ProductItem.jsx
│   ├── ProductList.jsx
│   └── PrivateRoute.jsx
├── features/
│   └── products/
│       ├── productSlice.js
│       └── productThunks.js
├── pages/
│   ├── Home.jsx
│   └── Login.jsx
├── redux/
│   └── store.js
├── App.jsx
└── main.jsx
```

---

## 🗂️ `db.json` Example for JSON Server

```json
{
  "users": [
    {
      "id": 1,
      "username": "admin",
      "password": "123"
    }
  ],
  "products": [
    {
      "id": 1,
      "title": "iPhone 14",
      "price": 799,
      "category": "Electronics",
      "image": "https://example.com/iphone.jpg"
    }
  ]
}
```

---

## 🔐 Auth Notes

- Uses `sessionStorage` to track login state
- `PrivateRoute.jsx` ensures unauthorized users can't access `/` or `/add`

---

## 📦 JSON Server Routes

| Method | Endpoint          | Usage                |
|--------|-------------------|----------------------|
| GET    | `/products`       | List all products    |
| POST   | `/products`       | Add new product      |
| PUT    | `/products/:id`   | Update product       |
| DELETE | `/products/:id`   | Delete product       |
| GET    | `/users`          | Login validation     |

---

## 🤝 Contribute

Feel free to fork and improve the app with additional features like:

- Persistent Login (`localStorage`)
- Pagination
- Product details modal or page
- Role-based access

---
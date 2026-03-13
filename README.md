# CodeLeap Engineering Test

Frontend application developed as part of the **CodeLeap Engineering Test**.  
The project implements a simple social feed where users can create, edit, and delete posts.

## 🚀 Deploy

https://codeleap-three.vercel.app/

## 📂 Repository

https://github.com/jonatasmirand/codeleap.git

---

# 📌 Features

- User signup (frontend only)
- Create posts
- Fetch posts from API
- Edit posts
- Delete posts
- Sort posts by most recent
- Real-time UI update after CRUD actions
- Responsive layout
- Modal confirmation for delete
- Modal form for editing posts

---

# 🛠 Technologies Used

- React
- React Hooks
- React Query
- Axios
- CSS
- Vite

---

# 📡 API

The application integrates with the CodeLeap test API:


https://dev.codeleap.co.uk/careers/


### Data structure


{
"id": number,
"username": string,
"created_datetime": datetime,
"title": string,
"content": string
}


---

# ⚙️ Installation

Clone the repository:


git clone https://github.com/jonatasmirand/codeleap.git


Navigate to the project:


cd codeleap-test


Install dependencies:


npm install


Run the development server:


npm run dev


The application will start on:


http://localhost:5173


---

# 📁 Project Structure


src
│
├── components
│
│   ├── Card
│   │   ├── Card.jsx
│   │   └── Card.css
│   │
│   ├── CreatePost
│   │   ├── CreatePost.jsx
│   │   └── CreatePost.css
│   │
│   ├── Delete
│   │   ├── Delete.jsx
│   │   └── Delete.css
│   │
│   ├── Edit
│   │   ├── Edit.jsx
│   │   └── Edit.css
│   │
│   └── Signup
│       ├── Signup.jsx
│       └── Signup.css
│
├── icons
│   ├── DeleteIcon.jsx
│   └── EditIcon.jsx
│
├── pages
│   └── Home.jsx
│
├── services
│   └── api.js
│
├── App.jsx
├── main.jsx
└── index.css


---

# 🧠 Key Concepts Demonstrated

- Component-based architecture
- State management with React Hooks
- Server state management with React Query
- REST API integration
- Conditional rendering
- Responsive design
- Modal UI patterns

---

# 📱 Responsiveness

The application adapts to:

- Desktop
- Tablet
- Mobile devices

---

# ✨ Bonus Improvements

Some additional improvements were implemented beyond the core requirements:

- Responsive layout
- Organized component structure
- Reusable SVG icon components
- Clean CSS structure

---

# 👨‍💻 Author

Developed by **Jonatas Miranda** / 2026

LinkedIn:  
https://www.linkedin.com/in/jonatasmirand/

---
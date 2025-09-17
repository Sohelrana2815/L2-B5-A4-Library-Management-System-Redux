## 📚 Aura Books: A Minimal Library Management System

**Aura Books** is a streamlined, client-side application designed to manage library book collections and track borrowings. Built with a modern tech stack including **React**, **TypeScript**, **Redux Toolkit Query**, and **Tailwind CSS** with **Shadcn UI**, it offers a clean, responsive, and intuitive user experience. This system focuses on core functionalities like book management (CRUD operations) and a simple borrowing process, all accessible without any authentication.

-----

## ✨ Features

  * **Public Access:** All sections of the application are available without the need for login or authentication.
  * **Book Management:**
      * **Book Listing:** View all books in a comprehensive table with details such as Title, Author, Genre, ISBN, Copies, and Availability.
      * **CRUD Operations:** Perform **Create**, **Read**, **Update**, and **Delete** operations on books.
      * **Availability Status:** Books are automatically marked as "Unavailable" when their copy count reaches zero.
      * **Edit Book:** An intuitive modal allows for editing existing book details, with instant UI updates upon submission.
      * **Delete Book:** Secure deletion process with a confirmation dialog.
  * **Borrowing System:**
      * **Borrow Book Modal:** Easily borrow books by specifying the desired quantity and due date.
      * **Inventory Check:** The system ensures the requested quantity does not exceed available copies.
      * **Borrow Summary:** A dedicated page displays an aggregated list of borrowed books, showing the Book Title, ISBN, and Total Quantity Borrowed.
  * **User Notifications:** **Toast notifications** provide instant feedback for successful operations and any encountered errors.
  * **Responsive Design:** A fully responsive layout ensures a seamless experience across **desktops, tablets, and mobile devices**.

-----

## 💻 Technology Stack

| Layer          | Technology                                                               |
| -------------- | ------------------------------------------------------------------------ |
| **Frontend** | React, TypeScript, Shadcn UI                                             |
| **State Mgmt.** | Redux Toolkit, Redux Toolkit Query                                       |
| **Styling** | Tailwind CSS                                                             |
| **Backend** | Node.js, Express.js (via provided API)                                   |
| **Database** | MongoDB, Mongoose (via provided API)                                     |

-----

## 🚀 Getting Started

To set up and run the Aura Books project locally:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Sohelrana2815/L2-B5-A4-Library-Management-System-Redux.git
    ```

2.  **Navigate into the project directory:**

    ```bash
    cd L2-B5-A4-Library-Management-System-Redux
    ```

3.  **Install project dependencies:**

    ```bash
    npm install
    ```

4.  **Start the development server:**

    ```bash
    npm run dev
    ```

The application will then be accessible via your web browser, typically at `http://localhost:5173` (or the port indicated in your terminal output).

-----

## 🌐 Live Demos

  * **Live Frontend Application:** [https://aura-books-b9-a4.vercel.app](https://aura-books-b9-a4.vercel.app)
  * **Live Backend API:** [https://library-management-api-flame.vercel.app](https://library-management-api-flame.vercel.app)

-----

## 🔗 Repository Links

  * **Frontend GitHub Repository:** [https://github.com/Sohelrana2815/L2-B5-A4-Library-Management-System-Redux](https://github.com/Sohelrana2815/L2-B5-A4-Library-Management-System-Redux)
<<<<<<< HEAD
  * **Backend GitHub Repository:** [https://github.com/Sohelrana2815/L2-B5-A3-LIBRARY-MANAGEMENT-API](https://github.com/Sohelrana2815/L2-B5-A3-LIBRARY-MANAGEMENT-API)
=======
  * **Backend GitHub Repository:** [https://github.com/Sohelrana2815/L2-B5-A3-LIBRARY-MANAGEMENT-API](https://github.com/Sohelrana2815/L2-B5-A3-LIBRARY-MANAGEMENT-API)
>>>>>>> 84d6cfe1574dfc9924ba3bcc14a465219391ada4

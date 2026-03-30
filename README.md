
# 🏥 MedInventory - Enterprise Medical Stock Management

An enterprise-level web application designed to manage medical inventory, user authentication, and dashboard analytics. Built with a robust **Java Spring Boot** backend, this project demonstrates scalable architecture and modern database strategies.

## 🚀 Technical Highlights & Architecture

* **Polyglot Database Strategy:** * Leverages **MySQL** using optimized **Raw SQL** queries for strict relational data integrity (User accounts, core medicine stock) to ensure ACID compliance.
  * Integrates **MongoDB** to handle flexible, unstructured data, demonstrating the ability to architect multi-database environments.
* **Security & Authentication:** Backend endpoints are secured via **Token-Based Authentication**, ensuring stateless, scalable, and secure user sessions rather than relying on outdated session cookies.
* **Decoupled Client-Server Interaction:** A lightweight, responsive frontend built with Vanilla JavaScript, HTML5, and CSS3 that communicates efficiently with the Java backend.

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
* **Backend:** Advanced Java, Spring Boot
* **Database:** MySQL (JDBC/Raw SQL), MongoDB
* **IDE & Tools:** Spring Tool Suite (STS 4), Maven, Git

## 📋 Core Features

* **Dashboard Analytics:** Real-time overview of total medicines, categorized stock, and system metrics.
* **Inventory Operations:** Full CRUD capabilities (Create, Read, Update, Delete) for managing medical records and tracking stock levels.
* **Secure Access:** Token-secured login portal to protect sensitive inventory data from unauthorized access.

## 🛣️ Future Roadmap

* **Role-Based Access Control (RBAC):** Implementing distinct permission tiers (e.g., System Admin vs. Pharmacy Staff) to restrict destructive actions like deleting stock.
* **Enhanced Client-Side Validation:** Adding robust frontend input sanitization before API payload submission to complement backend security and improve UI/UX.

## 📂 Project Structure

* `/html`: Contains the structural views (Dashboard, Login, Inventory management).
* `/css`: Custom styling for responsive, modern UI modules.
* `/js`: Functional client-side logic for form handling and DOM manipulation.

## 🔧 Installation & Setup

1. Clone the repository:
   ```bash
   git clone [https://github.com/its-shreyaDEV/Med_Inventory-.git](https://github.com/its-shreyaDEV/Med_Inventory-.git)
   
2.Open Spring Tool Suite (STS).

3.Navigate to File > Import > Existing Maven Projects.

4.Configure your application.properties with your local MySQL and MongoDB credentials.

5.Run the application as a Spring Boot App.

6.Open html/welcome.html in your browser to launch the client interface.



Developed by Shreya Dash
   

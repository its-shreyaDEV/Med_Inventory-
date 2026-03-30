# 🏥 MedInventory - Medical Stock Management System

An enterprise-level, decoupled web application designed to manage medical inventory, user authentication, and dashboard analytics. Built with a robust **Java Spring Boot** backend serving RESTful APIs to a lightweight, responsive frontend.

## 🚀 Technical Highlights & Architecture

* **RESTful API Design:** Implemented a fully decoupled architecture. The vanilla JavaScript frontend communicates asynchronously with the Java backend using the modern `Fetch API`.
* **Polyglot Database Strategy:** * Leverages **MySQL** using optimized **Raw SQL** queries for strict relational data integrity (User accounts, core medicine stock).
  * Integrates **MongoDB** to handle flexible, unstructured data, demonstrating the ability to architect multi-database environments.
* **Security & Authentication:** Backend endpoints are secured via **Token-Based Authentication**, ensuring stateless, scalable, and secure user sessions. 

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3, JavaScript (ES6+), Fetch API
* **Backend:** Advanced Java, Spring Boot
* **Database:** MySQL (JDBC/Raw SQL), MongoDB
* **IDE & Tools:** Spring Tool Suite (STS 4), Maven

## 📋 Core Features

* **Dashboard Analytics:** Real-time overview of total medicines, categorized stock, and system metrics.
* **Inventory Operations:** Full CRUD capabilities (Create, Read, Update, Delete) for managing medical records.
* **Secure Access:** Token-secured login portal to protect sensitive inventory data.

## 🛣️ Future Roadmap

* **Role-Based Access Control (RBAC):** Implementing distinct permission tiers (e.g., Admin vs. Staff).
* **Enhanced Client-Side Validation:** Adding robust frontend input sanitization before API payload submission to complement backend security.

## 🔧 Installation & Setup

1. Clone the repository:
   ```bash
   git clone [https://github.com/its-shreyaDEV/Med_Inventory-.git](https://github.com/its-shreyaDEV/Med_Inventory-.git)

   Open Spring Tool Suite (STS).

2.Navigate to File > Import > Existing Maven Projects.

3.Configure your application.properties with your MySQL and MongoDB credentials.

4.Run the application as a Spring Boot App.

5.Open html/welcome.html in your browser to launch the client interface.

Developed by Shreya Dash

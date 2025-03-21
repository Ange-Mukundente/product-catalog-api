# **Product Catalog API**  

## **📌 Project Overview**  
The **Product Catalog API** is a RESTful API built with **Node.js, Express, and MongoDB**. It enables users to **manage product categories** and **products**, including CRUD operations such as creating, updating, retrieving, and deleting records.  

---

## **📜 Features**  
✅ **Product Management:** Create, Read, Update, Delete (CRUD) operations on products  
✅ **Category Management:** Organize products into categories  
✅ **RESTful API Design:** Follows best practices for API structure  
✅ **MongoDB Integration:** Stores product and category data efficiently  
✅ **Error Handling:** Handles missing fields, invalid requests, and database errors  

---

## **🛠️ Tech Stack**  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (via Mongoose ORM)  
- **API Testing:** Thunder Client (or Postman)  
- **Development Tools:** Nodemon, dotenv  

---

## **🚀 Installation & Setup**  

### **1️⃣ Clone the Repository**  
```bash
git clone https://github.com/yourusername/product-catalog-api.git
cd product-catalog-api
```

### **2️⃣ Install Dependencies**  
```bash
npm install
```

### **3️⃣ Configure Environment Variables**  
Create a `.env` file in the root directory and add:  
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### **4️⃣ Start the Server**  
```bash
npm run dev
```
✅ Server runs on **http://localhost:5000**  

---

## **📂 Project Structure**  
```
📦 product-catalog-api
├── 📂 controllers        # Business logic for API endpoints
│   ├── categoryController.js
│   ├── productController.js
├── 📂 models             # Mongoose schemas
│   ├── Category.js
│   ├── Product.js
├── 📂 routes             # API routes
│   ├── categoryRoutes.js
│   ├── productRoutes.js
├── 📂 config             # Database connection setup
│   ├── db.js
├── 📜 .env               # Environment variables
├── 📜 package.json       # Dependencies & scripts
├── 📜 README.md          # Project documentation
├── 📜 server.js          # Main entry point
```

---

## **📡 API Endpoints**  

### **🔹 Category Endpoints**  
| Method | Endpoint                | Description                 |
|--------|-------------------------|-----------------------------|
| POST   | `/api/categories`       | Create a new category       |
| GET    | `/api/categories`       | Get all categories          |
| GET    | `/api/categories/:id`   | Get a single category       |
| PUT    | `/api/categories/:id`   | Update a category           |
| DELETE | `/api/categories/:id`   | Delete a category           |

### **🔹 Product Endpoints**  
| Method | Endpoint                | Description                 |
|--------|-------------------------|-----------------------------|
| POST   | `/api/products`         | Create a new product        |
| GET    | `/api/products`         | Get all products            |
| GET    | `/api/products/:id`     | Get a single product        |
| PUT    | `/api/products/:id`     | Update a product            |
| DELETE | `/api/products/:id`     | Delete a product            |

---

## **📊 Example API Requests**  

### **1️⃣ Create a Product (POST)**
**URL:** `http://localhost:5000/api/products`  
**Body (JSON):**  
```json
{
  "name": "Laptop",
  "price": 1200,
  "description": "A high-performance laptop",
  "category": "Electronics"
}
```
✅ Response: `201 Created`

---

## **🛠️ Challenges & Solutions**  

### **🔸 Issue: MongoDB Connection Error**
**Solution:**  
- Ensure MongoDB is installed and running  
- Verify `MONGO_URI` in `.env` file  

### **🔸 Issue: Data Not Saving in Database**
**Solution:**  
- Check if the request is sending **JSON format**  
- Add `console.log(req.body)` in controllers to debug  

---

## **📜 License**  
This project is licensed under the **MIT License**.  

---

## **📞 Contact**  
For questions or contributions, contact:  
📧 Email: your-email@example.com  
🔗 GitHub: [Your GitHub](https://github.com/yourusername)  

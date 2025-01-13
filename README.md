# my-first-server

A simple Node.js server built with Express.js to handle HTTP requests. This project demonstrates the usage of dotenv for managing environment variables like API keys, database credentials, and configuration settings securely. It's a perfect starting point for learning backend development, focusing on server setup and environment management.

---

## Installation Guide

Follow these steps to set up and run the project:

### **Step 1: Install Node.js**
1. Download Node.js from the official website: [Node.js Downloads](https://nodejs.org/).
2. Install Node.js by following the instructions for your operating system.
3. Verify the installation:
   ```bash
   node -v
   npm -v
   ```
   Ensure both Node.js and npm (Node Package Manager) are installed.

---

### **Step 2: Clone the Repository**
1. Clone the repository to your local machine:
   ```bash
   git clone git@github.com:Saurbhmoynak/my-first-server.git
   ```
2. Navigate to the project directory:
   ```bash
   cd my-first-server
   ```

---

### **Step 3: Install Dependencies**
1. Install the required packages (Express.js and dotenv):
   ```bash
   npm install express dotenv
   ```

---

### **Step 4: Set Up Environment Variables**
1. Create a `.env` file in the root directory of the project.
2. Add the following content to the `.env` file:
   ```
   PORT=3000
   ```

---

### **Step 5: Start the Server**
1. Run the server:
   ```bash
   node index.js
   ```
2. Open your browser and go to [http://localhost:3000](http://localhost:3000). You should see the message: `Hello World!`

---

## File Structure
```
my-first-server/
├── .gitignore
├── .env
├── index.js
├── package.json
├── package-lock.json
```


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
```

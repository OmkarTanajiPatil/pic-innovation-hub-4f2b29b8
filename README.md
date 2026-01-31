# Project and Innovation Club (PIC) Website

This is the official website for the Project and Innovation Club (PIC).
The project has been converted from TypeScript to **Plain JavaScript (React)**.

## Project Structure

- **src/**: Source code
  - **components/**: React components
  - **pages/**: Page components
  - **config.js**: Central configuration for club details, API links, and contact info.
- **public/**: Static assets

## Configuration

All hardcoded values (Club name, links, contact details) are managed in `src/config.js`.
You can edit this file to update the website content without changing the code logic.

## Prerequisites

- Node.js installed on your machine.

## How to Run

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start the Development Server**
   ```bash
   npm start
   ```
   (or `npm run dev`)

   The website will run at `http://localhost:8080`.

3. **Build for Production**
   ```bash
   npm run build
   ```

## Technologies

- React.js (JavaScript)
- Vite
- Tailwind CSS
- shadcn/ui components

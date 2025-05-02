# Mellow E-commerce Frontend

A beautiful, responsive e-commerce storefront built with React, TypeScript, and Tailwind CSS. This application demonstrates modern frontend practices for building an online shopping experience.
## LIVE DEMO :  [Arizon Assessment](https://arizon-assesment.onrender.com/)

## Features

- **Responsive design** that works on all devices
- **Product catalog** with search and filtering capabilities
- **Shopping cart** with persistent storage
- **Dark mode** support
- **Animations** for improved user experience

## Technologies Used

- React 18 with TypeScript
- Tailwind CSS for styling
- React Router for navigation
- Context API for state management
- FakeStore API for product data

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to http://localhost:5173

## Project Structure

- `/src/components`: UI components organized by feature
- `/src/context`: React Context providers for state management
- `/src/hooks`: Custom React hooks
- `/src/pages`: Page components that represent routes
- `/src/types`: TypeScript interfaces and types

## Features

### Home Page
- Hero section with call-to-action
- Featured products section
- Why choose us section
- Newsletter signup

### Products Page
- Product grid with cards
- Filtering by category
- Sorting by price, name, etc.
- Search functionality

### Cart
- Mini cart dropdown
- Full cart page
- Quantity adjustments
- Order summary

## Assumptions

- This is a frontend-only application that uses a mock API for data
- Authentication and payment processing would be implemented in a real application
- Additional pages like product details, checkout, etc. would be added in a real application

## Further Improvements

- Add product detail pages
- Implement user authentication
- Add checkout process
- Add product reviews
- Implement wishlist functionality
- Add animations for cart operations

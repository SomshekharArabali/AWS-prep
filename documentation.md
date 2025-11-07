# 📚 Project Documentation: AWS Cloud Practitioner Exam Prep

This document provides technical insights into the AWS Cloud Practitioner Exam Prep application, designed to answer common questions about its architecture, technologies, and development practices.

---

## ❓ General Questions

### What is the primary purpose of this application?
This application is a comprehensive preparation platform for the AWS Cloud Practitioner (CLF-C02) certification exam. It offers structured learning modules and extensive practice question sets to help users prepare and track their progress.

### What are the core features of the application?
The core features include:
*   **Structured Learning Modules**: 10 modules covering all exam domains.
*   **Extensive Question Sets**: 11 sets with over 1100 practice questions.
*   **Interactive Quizzes**: Users can select answers and receive immediate feedback (in question sets) or review results after completion (in modules).
*   **Performance Tracking**: Users can see their score, accuracy, and time taken after completing a quiz.
*   **Detailed Review**: Post-quiz, users can review each question, their selected answer, and the correct answer.
*   **Mobile Responsiveness**: The UI is designed to be accessible and functional across various device sizes.

---

## 💻 Frontend Architecture

### What frontend framework/library is used?
The application is built using **Next.js** with the **App Router**. This allows for a hybrid approach to rendering, leveraging server-side rendering (SSR) and client-side rendering (CSR) where appropriate.

### How is the UI styled?
**Tailwind CSS** is used for all styling. It's a utility-first CSS framework that enables rapid UI development and ensures a consistent design system. All components are styled directly using Tailwind classes.

### What UI component library is integrated?
**shadcn/ui** is used for pre-built, accessible, and customizable UI components. This library provides a solid foundation for common UI elements like Buttons, Cards, Progress bars, and more, which are then styled with Tailwind CSS.

### How are icons handled?
**Lucide React** is the chosen library for SVG icons, providing a wide range of clear and customizable icons used throughout the application.

### How is routing managed?
Next.js App Router handles all navigation and page routing. This includes dynamic routes for question sets and modules (e.g., `/question-sets/[id]/quiz`).

### What is the state management approach?
For local component state, React's `useState` and `useEffect` hooks are primarily used. For global state or more complex scenarios, React Context API could be introduced, but for the current scope, local state is sufficient. The `useToast` hook demonstrates a custom state management pattern for notifications.

---

## ☁️ Backend Architecture & Data Management

### Does the application have a dedicated backend server?
No, for its current functionality, the application does **not** rely on a traditional backend server. All quiz data is stored in local JSON files.

### How is quiz data currently stored and accessed?
Quiz data is stored in static **JSON files** within the `public/data/` directory (e.g., `set_1.json`, `questions.json`).
The data is fetched client-side using the browser's native `fetch` API within `useEffect` hooks in the quiz pages (`app/question-sets/[id]/quiz/page.tsx` and `app/modules/[id]/quiz/page.tsx`). This approach simplifies deployment and reduces server-side dependencies for static content.

### How would API calls for questions be handled if a backend were introduced?
If a dedicated backend were introduced, the `fetch` calls in the quiz pages would be updated to target API endpoints. For example:
*   Instead of `fetch("/data/set_${setId}.json")`, it would become `fetch("/api/questions/set/${setId}")` or `fetch("https://your-api-domain.com/questions/set/${setId}")`.
*   The backend API would be responsible for retrieving question data from a database (e.g., PostgreSQL, MongoDB, DynamoDB) and returning it in a JSON format.
*   Technologies for the backend could include Node.js (with Express or Next.js API Routes), Python (with Flask/Django), Go, or serverless functions (AWS Lambda, Azure Functions).
*   Error handling would be expanded to gracefully manage network issues, API errors, and data parsing failures.

### What is the structure of the quiz data?
Each question object typically includes:
*   `question_id`: Unique identifier for the question.
*   `question_text`: The actual question content.
*   `options`: An array of possible answer options, each with an `option_id` and `option_text`.
*   `correct_answer_id`: The ID(s) of the correct answer(s). This can be a single number for single-choice or an array of numbers for multiple-choice questions.
*   `explanation`: A detailed explanation for the correct answer (though not currently displayed in the UI, it's a good practice for exam prep apps).

---

## 🏗️ Project Structure

### Can you describe the main directories and their purpose?

*   **`app/`**: Contains the Next.js App Router pages and layouts.
    *   `app/layout.tsx`: The root layout, wrapping the entire application.
    *   `app/page.tsx`: The main landing page.
    *   `app/question-sets/` and `app/modules/`: Directories for specific routes related to question sets and learning modules, including dynamic routes (`[id]/quiz/page.tsx`).
    *   `app/globals.css`: Global CSS styles, including Tailwind CSS imports and custom base styles.
*   **`components/`**: Houses reusable React components.
    *   `components/ui/`: Contains the shadcn/ui components (e.g., `button.tsx`, `card.tsx`, `progress.tsx`). These are typically generated by shadcn/ui CLI.
    *   `components/theme-provider.tsx`: Component for theme management (though not fully implemented for dark mode in the current UI).
*   **`hooks/`**: Custom React hooks.
    *   `hooks/use-mobile.tsx`: A hook to detect if the user is on a mobile device.
    *   `hooks/use-toast.ts`: Custom hook for managing toast notifications.
*   **`lib/`**: Utility functions.
    *   `lib/utils.ts`: Contains helper functions like `cn` for combining Tailwind classes.
*   **`public/`**: Static assets.
    *   `public/img/`: Stores images like the AWS logo.
    *   `public/data/`: Stores the local JSON data for quizzes.
*   **`styles/`**: Additional global styles (though `app/globals.css` is the primary).
*   **`README.md`**: Project overview, setup instructions, and features.
*   **`CONTRIBUTING.md`**: Guidelines for contributing to the project.
*   **`documentation.md`**: This document.

---

## 🛠️ Key Technologies and Libraries

### What are the key libraries used for forms and validation?
**React Hook Form** is used for efficient form handling, and **Zod** is integrated for robust schema validation. While not explicitly used in the current quiz pages (which handle selections directly), this combination is available for future form implementations.

### How are notifications/toasts handled?
A custom **shadcn/ui toast system** is implemented using `hooks/use-toast.ts` and `components/ui/toast.tsx`/`components/ui/toaster.tsx`. The `Toaster` component is rendered in `app/layout.tsx` to ensure notifications are available globally.

### What about date pickers, carousels, or charts?
The project includes shadcn/ui components for these functionalities, which internally use:
*   **React Day Picker** for date selection (`components/ui/calendar.tsx`).
*   **Embla Carousel React** for carousels (`components/ui/carousel.tsx`).
*   **Recharts** for data visualization (`components/ui/chart.tsx`).
These are available for use if such features are added in the future.

---

## 🚀 Development Workflow

### How is code quality maintained?
The project uses **TypeScript** for type safety, which helps catch errors during development. **ESLint** is configured (though ignored during builds for simplicity in this setup) for code linting, and **Prettier** (implicitly, through common practices) for code formatting.

### What is the build process?
The project uses Next.js's built-in build process (`npm run build` or `yarn build`), which optimizes the application for production, including code splitting, minification, and image optimization.

---

## 📈 Performance Considerations

### How is performance optimized?
*   **Next.js**: Provides automatic code splitting, image optimization (`next/image`), and various rendering strategies (SSR, SSG, CSR) to deliver fast initial page loads.
*   **Image Optimization**: `next/image` is used for efficient image loading and optimization.
*   **Lazy Loading**: Components and data are loaded as needed, especially for quiz data which is fetched on the client side when a specific quiz is accessed.
*   **Tailwind CSS**: Generates minimal CSS by only including utilities that are actually used in the project.

---

## 🔮 Future Enhancements

### What are potential areas for future development?
*   **User Authentication**: Implement user login/registration to save progress and personalize the experience.
*   **Database Integration**: Migrate quiz data from local JSON files to a database (e.g., Supabase, PostgreSQL) for dynamic content updates and scalability.
*   **Admin Panel**: Create an interface for managing questions, modules, and user data.
*   **Advanced Analytics**: Provide more detailed performance metrics and insights for users.
*   **Dark Mode**: Fully implement a dark mode toggle using `next-themes`.
*   **Explanation Display**: Show detailed explanations for correct answers during quiz review.
*   **Search Functionality**: Allow users to search for specific questions or topics.
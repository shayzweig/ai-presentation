# AI Presentation App

This project is an interactive presentation about Artificial Intelligence, built with Next.js and React. The presentation includes animated slides, interactive demonstrations, and visual explanations of AI concepts.

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (version 16.0 or higher)
- npm (usually comes with Node.js)
- Git (for version control)

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd ai-presentation
```

2. Install dependencies:
```bash
npm install
```

## Project Structure

The project is organized as follows:
```
ai-presentation/
├── app/                    # Next.js app directory
├── components/             # Reusable React components
├── slides/                 # Individual slide components
│   ├── TitleSlide.tsx
│   ├── WhatIsAISlide.tsx
│   └── ...
├── public/                 # Static assets
│   ├── mnist/             # MNIST examples
│   ├── logos/             # Company logos
│   └── neural/            # Neural network diagrams
└── package.json
```

## Required Dependencies

The project uses these main dependencies:
- next: ^14.0.0
- react: ^18.2.0
- react-dom: ^18.2.0
- lucide-react: ^0.263.1
- recharts: ^2.12.0
- @/components/ui: Custom UI components library
- tailwindcss: ^3.3.0

## Running the Development Server

1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to:
```
http://localhost:3000
```

## Navigation

- Use the arrow keys (← →) to navigate between slides
- Click the navigation arrows in the top bar
- Current slide number and title are shown in the top navigation bar

## Slides Content

The presentation is divided into three main sections:

1. Introduction to AI (20 minutes)
   - What is AI and its applications
   - Historical timeline
   - How machines learn
   - Neural networks and LLMs

2. LLM Applications for Developers (10 minutes)
   - Use cases
   - API usage
   - RAG
   - LLM Agents
   - Development tools

3. AI Career Path (10 minutes)
   - Required mathematical background
   - Data handling
   - Tools and libraries
   - Practical experience

## Customization

### Adding New Slides

1. Create a new slide component in the `slides` directory
2. Import it in `PresentationApp.tsx`
3. Add it to the `slides` array with its title

Example:
```typescript
import NewSlide from '../slides/NewSlide'
// ...
const slides = [
  // ...existing slides
  { component: NewSlide, title: 'New Slide Title' },
]
```

### Modifying Styles

- Global styles are managed through Tailwind CSS
- Each slide component can have its own specific styles
- The BaseSlide component provides consistent layout and background

## Note on Assets

The presentation requires several assets in the `public` directory:
- MNIST digit images for the learning demonstration
- Company logos for the "What is AI" slide
- Neural network architecture diagrams
- Placeholder images for examples

Make sure all required assets are present in the `public` directory before running the presentation.

## Troubleshooting

Common issues and solutions:

1. Missing dependencies
```bash
npm install
```

2. Port already in use
```bash
# Kill the process using port 3000 or use a different port
npm run dev -- -p 3001
```

3. Images not loading
- Ensure all required images are in the correct public directory
- Check image paths in the components

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
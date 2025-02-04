# AI Presentation App

This project is an interactive presentation in Hebrew about Artificial Intelligence for school students atudying computer science major. It is built with Next.js and React. The presentation includes animated slides, interactive demonstrations, and visual explanations of AI concepts.

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (version 20.11.0 or higher)
- npm (usually comes with Node.js)
- Git (for version control)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/shayzweig/ai-presentation
cd ai-presentation
```

2. Install dependencies:
```bash
npm install
```

## Running the Development Server

1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to:
```
http://localhost:3000
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
│   ├── logos/             # Company logos
│   ├── mnist/             # MNIST examples
│   └── neural/            # Neural network diagrams
│   └── faces/             # Faces examples
│   └── ...
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

## Navigation

- Use the arrow keys (← →) to navigate between slides
- Click the navigation arrows in the top bar
- Current slide number and title are shown in the top navigation bar

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
- Faces images for the overfitting slide

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

## License

This project is licensed under the MIT License - see the LICENSE file for details.
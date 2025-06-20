# Flowbite-dnd-kit React Integration Project

## Purpose

This project demonstrates the technical integration of Flowbite React components with dnd-kit drag-and-drop functionality within a production scheduling application context. The primary objectives are:

- **Component Library Integration**: Showcase comprehensive usage of Flowbite React components in a cohesive application
- **Drag-and-Drop Implementation**: Demonstrate dnd-kit capabilities for building accessible, interactive interfaces
- **Real-World Application Context**: Present integration patterns within a meaningful manufacturing/scheduling domain
- **TypeScript Best Practices**: Implement type-safe React development patterns
- **Modern React Architecture**: Utilize React 19 features and contemporary development patterns

## Architecture

### Technology Stack
```
React 19              - Component framework
TypeScript ~5.8.3     - Type safety
Flowbite React 0.11.8 - UI component library
dnd-kit 6.3.1         - Drag-and-drop functionality
Tailwind CSS 4.1.10   - Utility-first styling
Vite 6.3.5            - Build tool and dev server
React Router DOM 7.6.2 - Client-side routing
```

### Project Structure
```
src/
├── pages/
│   ├── MainPage.tsx              # Application entry point
│   ├── FlowbiteShowcase.tsx      # Flowbite component demonstrations
│   ├── DndKitShowcase.tsx        # dnd-kit feature demonstrations
│   ├── ProductionDashboard.tsx   # Integrated dashboard example
│   ├── ProductionScheduler.tsx   # Drag-and-drop scheduler
│   ├── ProductionOrders.tsx      # Order management interface
│   ├── ResourceManagement.tsx    # Resource allocation interface
│   ├── flowbite/                 # Individual Flowbite component showcases
│   └── dnd-kit/                  # Individual dnd-kit feature showcases
├── components/
│   ├── ShowcaseTheme.tsx         # Theme provider and utilities
│   └── index.ts                  # Component exports
└── App.tsx                       # Application router
```

Key integration patterns:
- React hooks for state management with TypeScript typing
- Context providers for theme and global state
- Composition-based component architecture
- Accessible drag-and-drop with keyboard navigation
- Cross-container drag operations with collision detection

## Development

### Setup Guide
**Prerequisites**: Node.js 18+, npm or yarn

```bash
git clone <repository-url>
cd Flowbite-dnd-kit-React/Flowbite-dnd-kit-React
npm install
```

**Post-install**: The project includes a `flowbite-react patch` post-install script for compatibility fixes.

### Commands
```bash
npm run dev      # Start development server (Vite)
npm run build    # TypeScript compilation + Vite build
npm run preview  # Preview production build
npm run lint     # ESLint code analysis
```

## Progress

### Milestones
- [x] **Phase 1: Component Showcase** - Individual Flowbite and dnd-kit demonstrations
- [x] **Phase 2: Integration** - Production scheduling application with integrated components

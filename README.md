# Tara Solutions Inc

A modern, responsive website built with Next.js 15, TypeScript, and Tailwind CSS. This project showcases a professional business website with various sections including About, Work, Solutions, Industries, and Contact pages.

## 🚀 Features

- Modern and responsive design
- Server-side rendering with Next.js 15
- TypeScript for type safety
- Tailwind CSS for styling
- Radix UI components for accessible UI elements
- Dark mode support
- Form handling with React Hook Form
- Data visualization with Recharts
- Toast notifications with Sonner
- Carousel components with Embla Carousel
- Date picking with React Day Picker
- Form validation with Zod

## 🛠️ Tech Stack


- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Form Handling:** React Hook Form
- **Validation:** Zod
- **Charts:** Recharts
- **Date Handling:** date-fns
- **Icons:** Lucide React
- **Animations:** tailwindcss-animate

## 📦 Project Structure

```
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── industries/        # Industries page
│   ├── solutions/         # Solutions page
│   ├── work/             # Work/Portfolio page
│   ├── components/       # App-specific components
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/           # Shared components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions and configurations
├── public/             # Static assets
└── styles/             # Additional styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/tarasolutions.cloud.git
cd tarasolutions.cloud
```

2. Install dependencies:
```bash
yarn install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```env
# Add your environment variables here
```

4. Start the development server:
```bash
yarn dev
```

The application will be available at `http://localhost:3000`.

### Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint

## 🎨 Styling

The project uses Tailwind CSS for styling with a custom configuration. The theme can be customized in `tailwind.config.js`.

## 🔧 Configuration

- `next.config.mjs` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `postcss.config.mjs` - PostCSS configuration

## 📱 Responsive Design

The website is fully responsive and optimized for all device sizes. The layout adapts to different screen sizes using Tailwind CSS's responsive design utilities.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 👥 Authors

- Abbas Ataie - Initial work

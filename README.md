# Northlight Landing Page

A responsive landing page for Northlight, a fictional product analytics platform.

## Technologies

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Lucide React
- Tanstack Router

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/z1jey/northlight-landing-page.git
```

### 2. Open the project

```bash
cd northlight-landing-page
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the project

```bash
npm run dev
```

Open the local URL shown in the terminal.

## Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Features

- Responsive desktop, tablet, and mobile layouts
- Responsive navigation
- Hero section with product dashboard
- Features section
- How It Works section
- Pricing section
- FAQ accordion
- Newsletter subscription form
- Form validation
- Responsive footer
- Accessible semantic HTML
- Reduced-motion support

## Testing

The website was tested using:

- Chrome
- Firefox
- Chrome Lighthouse
- Desktop viewport
- Tablet viewport
- Mobile viewport

Lighthouse was used to check:

- Performance
- Accessibility
- Best Practices
- SEO

## Notable Implementation Decisions

### Icons

I used Lucide React icons instead of some of the provided SVG icon assets.

I normally use Lucide React when working with icons because the icons are easy to import, resize, style, and customize directly through React and CSS. It also helps keep the icons consistent across the project without having to manage many separate SVG files.

For the "Connects to your stack" section, I could not find the exact icons from the design in Lucide React. I chose icons that were visually close to the original design while keeping the overall style consistent.

### Mobile Footer Layout

I changed the newsletter layout on mobile.

In the original design, the email input and Subscribe button were placed beside each other. On a smaller screen, I felt that this made the input field too narrow and the two elements looked too tight.

I decided to place the Subscribe button below the input on mobile. This gives the input more space, making it easier for users to see and enter their email address. It also gives the form a cleaner and more comfortable layout on smaller screens.

The input and Subscribe button remain side by side on tablet and desktop screens.

### Mobile Footer Information

I also changed the layout of the footer's bottom information on mobile.

The copyright text and "All systems operational" status were originally placed beside each other. On a smaller screen, they looked too close together and made the footer feel crowded.

I changed them to a vertical layout on mobile and centered them. This gives each piece of information more space and makes the footer easier to read.

On larger screens, they return to a horizontal layout.

### AI Assistance

I used AI tools such as ChatGPT, Claude, and Gemini as development assistants.

They were mainly used for:

- Debugging errors
- Checking possible solutions
- Testing ideas
- Reviewing code
- Getting feedback on UI and UX decisions
- Helping with development questions

The main design decisions, layout choices, implementation direction, and organization of the project were made by me. AI was used as a supporting tool rather than as a replacement for my own decisions and development work.

## Notes

The project uses reusable React components and Tailwind CSS for the layout and styling. The content used throughout the page is based on mock data.

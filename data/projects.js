export const projects = [
  {
    id: "studiospace",
    name: "StudioSpace",
    tagline: "Peer-to-peer marketplace for booking creative studios",
    image: "/projects/studiospace.png",
    description:
      "StudioSpace is a full stack marketplace where photographers, filmmakers, podcasters and musicians can discover and book creative studios by the hour. Hosts can list their own studios, manage them, and handle booking requests, while creators can search, review and book with real-time availability.",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "DaisyUI",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
    ],
    liveLink: "https://studiospace-client-lilac.vercel.app/",
    githubLink: "https://github.com/umme-ayman29/studiospace-client",
    challenges: [
      "Setting up secure authentication with a JWT stored in an HTTPOnly cookie while the client and server run on different domains.",
      "Preventing double bookings by checking overlapping time slots against already confirmed bookings.",
      "Connecting the Next.js client to the separate Express API and deploying both parts correctly on Vercel.",
    ],
    future: [
      "Add online payment integration for bookings.",
      "Add a wishlist and downloadable booking invoices.",
      "Add real-time notifications for hosts and creators.",
    ],
  },
  {
    id: "bazar-dor",
    name: "Bazar Dor",
    tagline: "Bangladeshi grocery price tracker",
    image: "/projects/bazardor.png",
    description:
      "Bazar Dor is a Bangla-language web app that shows today's grocery prices in Bangladesh with price changes, categories and sorting. Users can sign in with email, Google or GitHub, view product details on a protected page and update their profile.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "BetterAuth",
      "MongoDB Atlas",
    ],
    liveLink: "https://bazar-dor-peach-theta.vercel.app/",
    githubLink: "https://github.com/umme-ayman29/bazar-dor",
    challenges: [
      "Integrating BetterAuth with MongoDB and making email, Google and GitHub login work together with account linking.",
      "Configuring environment variables correctly on Vercel so authentication worked in production.",
      "Building protected routes and a clean Bangla interface that follows the Figma design.",
    ],
    future: [
      "Add price history charts for each product.",
      "Add price alerts and a favorites list for users.",
      "Connect live market data from a real price API.",
    ],
  },
  {
    id: "fit-log",
    name: "FitLog",
    tagline: "Workout library and daily plan manager",
    image: "/projects/fit-log.png",
    description:
      "FitLog is a modern, responsive workout library. Users can explore workouts, read step-by-step instructions, add exercises to today's plan, save workouts for later, sort them by duration, calories or rating, and track a summary of exercises, minutes and calories.",
    techStack: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Context API",
      "localStorage",
    ],
    liveLink: "https://fit-log-nu-puce.vercel.app/",
    githubLink: "https://github.com/umme-ayman29/fit-log",
    challenges: [
      "Managing the plan and saved workouts globally with React Context and keeping them after a page reload using localStorage.",
      "Enforcing the limit of 5 workouts in a plan and giving clear toast feedback.",
      "Building dynamic detail pages for every workout using dynamic routing.",
    ],
    future: [
      "Add user accounts so plans sync across devices.",
      "Add weekly progress charts and workout history.",
      "Let users create their own custom workouts.",
    ],
  },
];
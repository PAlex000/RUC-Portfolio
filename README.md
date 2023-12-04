# RUC-Portfolio
The repository is only for a portfolio projects in RUC

#DATABASES

#BACKEND WITH .NET


#FRONTEND

-- Ensure you have the following installed in order for the frontend to work

1. Newest version of Node

-- Commands to run when cloning the repository the very first time.

1. Npm install i (To install all dependencies for the project)

-- Commands to run for the frontend server to work

1. Npm run dev (dev server)
2. Npm start (for production)

-- File Structure example (which we are following):

my-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.tsx
│   │   │   └── ...
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ...
│   │   └── views/
│   │       ├── Home.tsx
│   │       ├── Profile.tsx
│   │       └── ...
│   ├── hooks/
│   │   └── useAuth.tsx
│   ├── redux/
│   │   ├── actions/
│   │   ├── reducers/
│   │   └── store/
│   ├── services/
│   │   └── api.ts
│   ├── utils/
│   │   └── ...
│   ├── types/
│   │   └── ...
│   ├── routes/
│   │   └── ...
│   ├── assets/
│   │   └── ...
│   ├── styles/
│   │   └── index.css
│   ├── App.tsx
│   └── index.tsx
├── package.json
└── ...


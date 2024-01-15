# NextAuth.js Demo

This is a demo project showcasing how to implement authentication in a Next.js application using NextAuth.js.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Next, run the database migrations:
```bash
npx prisma migrate dev --name init
```

Next, create a `.env.local` file similar to [`.env.example`](.env.example) with the following variables:

* NEXTAUTH_URL
* NEXTAUTH_SECRET
* GITHUB_ID
* GITHUB_SECRET

Finaly, run the development server:

```bash
npm run dev
```

Open http://localhost:3000 with your browser to see the result.

## Learn More

To learn more about NextAuth.js, take a look at the following resources:

[NextAuth.js Documentation](https://next-auth.js.org/getting-started/introduction)

## License
This project is licensed under the MIT License.

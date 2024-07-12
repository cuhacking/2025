# hackathon

Let's build the best hackathon platform.

## Description

What we use:
- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [tRPC](https://trpc.io)

## Development Setup

### 1. Install Docker

If you don't have Docker installed, you can download it from [here](https://www.docker.com/products/docker-desktop).

There's other ways of installing it, but we recommend using Docker Desktop because of its helpful UI.

### 2. Install Node.js

You'll also need Node.js installed. You can download it from [here](https://nodejs.org). 

### 3. Install Yarn

We use [Yarn](https://yarnpkg.com) as our package manager. You can install it by running:

```bash
npm install -g yarn
```

### 4. Install Dependencies

```bash
yarn install
```

### 5. Create `.env` File

Copy `.env.example` to `.env` and fill in the necessary environment variables. 

You will need to set `NEXTAUTH_SECRET` to a random string.
We recommend using a password generator to create a secure secret or you can use the following command to generate a random string:

```bash
openssl rand -base64 32
```

You will also need to set `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` if you want to enable Google OAuth.

There is information about how to install Google OAuth credentials in the [Additional Setup](#additional-setup) section.

### 5. Run PostgreSQL in Docker

```bash
docker-compose up -d db
```

<small>**Note:** If you have a local PostgreSQL server running, you may need to stop it before running the Docker container.</small>

<small>**Note:** You can also build and run the app itself with Docker by running `docker-compose up -d --build`.</small>

### 6. Run Prisma Migrate

```bash
yarn prisma migrate dev
```

### 7. Run Development Server

```bash
yarn dev
```

You should now be able to access the app at [http://localhost:8000](http://localhost:8000).

Happy hacking! 🚀


## Additional Setup

### Google OAuth

To enable Google OAuth, you'll need to create a project in the [Google Developer Console](https://console.developers.google.com) and create OAuth credentials.

1. Go to the [Google Developer Console](https://console.developers.google.com) and create a new project.

2. Go to the "Credentials" tab and click "Create credentials" > "OAuth client ID".

3. Select "Web application" as the application type.

4. Add `http://localhost:8000/api/auth/callback/google` as an authorized redirect URI.

5. Copy the client ID and client secret into your `.env` file as `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`.

6. Restart the development server.

You should now be able to sign in with Google.

## Contributors ✨

- [Nathan Coulas](https://www.nathancoulas.com)
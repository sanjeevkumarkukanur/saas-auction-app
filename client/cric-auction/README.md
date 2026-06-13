# Turborepo starter

This Turborepo starter is maintained by the Turborepo core team.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo

# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo build

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo build
yarn dlx turbo build
pnpm exec turbo build
```

You can build a specific package by using a [filter](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters):

```
# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo build --filter=docs

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo build --filter=docs
yarn exec turbo build --filter=docs
pnpm exec turbo build --filter=docs
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo

# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo dev

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo dev
yarn exec turbo dev
pnpm exec turbo dev
```

You can develop a specific package by using a [filter](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters):

```
# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo dev --filter=web

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo dev --filter=web
yarn exec turbo dev --filter=web
pnpm exec turbo dev --filter=web
```

### Remote Caching

> [!TIP]
> Vercel Remote Cache is free for all plans. Get started today at [vercel.com](https://vercel.com/signup?/signup?utm_source=remote-cache-sdk&utm_campaign=free_remote_cache).

Turborepo can use a technique known as [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup?utm_source=turborepo-examples), then enter the following commands:

```
cd my-turborepo

# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo login

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo login
yarn exec turbo login
pnpm exec turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo link

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo link
yarn exec turbo link
pnpm exec turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turborepo.com/docs/crafting-your-repository/running-tasks)
- [Caching](https://turborepo.com/docs/crafting-your-repository/caching)
- [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching)
- [Filtering](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters)
- [Configuration Options](https://turborepo.com/docs/reference/configuration)
- [CLI Usage](https://turborepo.com/docs/reference/command-line-reference)


| Layer         | Technology                       | Why                                |
| ------------- | -------------------------------- | ---------------------------------- |
| Web Framework | **Next.js 15+ (App Router)**     | SSR, SEO, SaaS dashboards, routing |
| Language      | **TypeScript**                   | Required for SaaS scale            |
| Styling       | **Tailwind CSS + ShadCN UI**     | Fast UI, enterprise look           |
| State         | **Zustand**                      | Simple global state                |
| Data Fetching | **TanStack Query (React Query)** | API caching, retries               |
| Forms         | **React Hook Form + Zod**        | Validation, performance            |
| Tables        | **TanStack Table**               | Data-heavy SaaS tables             |
| Charts        | **Recharts / Tremor**            | Analytics dashboards               |
| Auth          | **NextAuth / Clerk**             | Multi-tenant auth                  |
| Realtime      | **Socket.IO / WebSockets**       | Chat, Auction, Live bids           |
| Notifications | **Firebase FCM / Web Push**      | Push notifications                 |
| File Uploads  | **UploadThing / S3**             | Resume, player images              |


| Layer      | Tech                         |
| ---------- | ---------------------------- |
| Framework  | **React Native CLI (0.82+)** |
| Navigation | React Navigation             |
| State      | Zustand                      |
| API        | TanStack Query               |
| Realtime   | Socket.IO                    |
| Push       | Firebase FCM                 |
| Styling    | NativeWind (Tailwind for RN) |


apps/web/
└── src/
    ├── app/                     # Next.js App Router
    │   ├── (auth)/              # Login / signup
    │   │   ├── login/
    │   │   └── register/
    │   │
    │   ├── (public)/            # Landing pages
    │   │   └── page.tsx
    │   │
    │   ├── (tenant)/            # Multi-tenant protected area
    │   │   ├── layout.tsx       # Tenant layout
    │   │   ├── dashboard/
    │   │   ├── auctions/
    │   │   ├── players/
    │   │   ├── teams/
    │   │   ├── chat/
    │   │   ├── jobs/
    │   │   └── settings/
    │   │
    │   ├── api/                 # API Gateway proxy
    │   │   ├── auth/
    │   │   ├── users/
    │   │   ├── teams/
    │   │   ├── auctions/
    │   │   └── chat/
    │   │
    │   ├── layout.tsx
    │   └── page.tsx
    │
    ├── components/             # Reusable UI
    │   ├── layout/
    │   ├── forms/
    │   ├── tables/
    │   └── common/
    │
    ├── features/               # Business modules
    │   ├── auth/
    │   ├── auction/
    │   ├── chat/
    │   ├── teams/
    │   ├── jobs/
    │   └── billing/
    │
    ├── lib/
    │   ├── api.ts              # API Gateway axios
    │   ├── auth.ts
    │   ├── socket.ts
    │   └── tenant.ts
    │
    ├── hooks/
    ├── store/                  # Zustand
    ├── types/
    └── styles/

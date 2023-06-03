## BLOG with Next.js 13

This project is a practice exercise based on the tutorial : [Let’s build a BLOG with Next.js 13 (Sanity v3, TypeScript, Tailwind CSS, Auth, CMS, Preview Mode)](https://www.youtube.com/live/x3fCEPFgUSM?feature=share)。

## Features

- Browse articles
- Incremental Static Regeneration (ISR) for updating articles
- Publish articles using Sanity CMS
- Real-time preview of articles in Sanity CMS

## Installation

### Install Dependencies

```bash
pnpm install
```

### 環境變數說明

Please refer to the [.env.example]() file for the required environment variables.。

```env
NEXT_PUBLIC_SANITY_PROJECT_ID= # your sanity project id
NEXT_PUBLIC_SANITY_DATASET= # your sanity project dataset
NEXT_PUBLIC_SANITY_API_VERSION= # your sanity api version
```

### Run the Project

#### Development
```bash
pnpm run dev
```

#### Build
```bash
pnpm run build
```
```bash
pnpm run start
```


## Technologies Used

- Next.js 13
- React
- Tailwind CSS
- TypeScript
- Sanity v3

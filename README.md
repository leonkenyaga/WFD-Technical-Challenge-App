## Overview
This project is a demonstration project showcasing the seamless integration between Gatsby.js, a static site generator, and Contentful, a headless CMS.  This project aims to:

**Demonstrate the development process**: This project serves as a practical example of building a static site with Gatsby.js that fetches content from Contentful. It guides developers through the setup, configuration, and data fetching mechanisms.

**Highlight performance advantages**: The project emphasizes the performance benefits of using Gatsby.js for static site generation. By pre-rendering content at build time, delivers a fast and smooth user experience.

## Table of Contents

* [Architecture](#architecture)

## Architecture

**Framework**:Gatsby.js is used as the static site generator. Gatsby leverages React components for building the UI and utilizes GraphQL for data fetching.

**Headless CMS**: Contentful acts as the backend, managing all content for the application. The app's front-end fetches content from Contentful through Gatsby plugins, eliminating the need for a traditional server-side backend.

**Data Fetching**: Gatsby plugins facilitate communication with the Contentful GraphQL API. These plugins allow seamless retrieval content during the build process, ensuring that the statically generated site includes the latest information.

This architecture results in a lightweight and high-performance application. This project leverages the strengths of both Gatsby.js and Contentful for a modern and scalable web development experience.

## Quickstart

You will need a new or existing [Contentful space][] to use this starter and will be asked for your [Space ID][], [Content Management API Key][] (also referred to as a Personal Access Token) and [Content Delivery API Key][] during installation.


[contentful space]: https://www.contentful.com/help/contentful-101/#step-2-create-a-space
[space id]: https://www.contentful.com/help/find-space-id/
[content delivery api key]: https://www.contentful.com/developers/docs/references/authentication/#api-keys-in-the-contentful-web-app
[content management api key]: https://www.contentful.com/developers/docs/references/authentication/#the-content-management-api

1. **Create a Gatsby site**

   Use the Gatsby CLI to get started locally:

   ```sh repo
   npx gatsby new my-app https://github.com/leonkenyaga/WFD-Technical-Challenge-App.git
   ```

   if you dont already have Gatsby CLI installed:

   ```
   npm install -g gatsby-cli
   ```
   

1. **Run the Contentful setup script**

   From your site's root directory, run:

   ```sh
   cd my-app
   ```

   This will run a script to populate your Contentful space's content model and add demo content.

1. **Start developing**

   In your site directory, start the development server:

   ```sh
   gatsby develop
   ```

   Your site should now be running at <http://localhost:8000>




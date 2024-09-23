## Overview
This project is a demonstration project showcasing the seamless integration between Gatsby.js, a static site generator, and Contentful, a headless CMS.  This project aims to:

**Demonstrate the development process**: This project serves as a practical example of building a static site with Gatsby.js that fetches content from Contentful. It guides developers through the setup, configuration, and data fetching mechanisms.

**Highlight performance advantages**: The project emphasizes the performance benefits of using Gatsby.js for static site generation. By pre-rendering content at build time, delivers a fast and smooth user experience.

## Table of Contents

* [Architecture](#architecture)
* [Quickstart](#quickstart)

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
   

1. **Change directory**

   ```sh
   cd my-app
   ```

1. **Start developing**

   In your site directory, start the development server:

   ```sh
   gatsby develop
   ```

   Your site should now be running at <http://localhost:8000>

## File Structure

```
├── .cache
├── coverage
├── public
├── src
│   ├── components
│   │   ├── __tests__
|   |   |   ├──footer
|   |   |   |  ├── index.test.tsx
|   |   |   ├──header
|   |   |   |  ├── dreamshare_login_signup.test.tsx
|   |   |   |  ├── share_holiday.test.tsx
|   |   |   ├──main
|   |   |   |  ├── ideas
|   |   |   |  |   ├── index.test.tsx
|   |   |   |  ├── interests
|   |   |   |  |   ├── index.test.tsx
|   |   |   |  ├── most_popular_celebs
|   |   |   |  |   ├── index.test.tsx
|   |   |   |  ├── most_popular_movies
|   |   |   |  |   ├── index.test.tsx
|   |   ├──footer
|   |   |  ├── about_company
|   |   |  |   ├── index.tsx
|   |   |  |   ├── about.tsx
|   |   |  ├── designedby.tsx
|   |   |  ├── dreamshare.tsx
|   |   |  ├── index.tsx
|   |   |  ├── partners.tsx
|   |   ├──header
|   |   |  ├── dreamshare_login_signup
|   |   |  |   ├── login_signup
|   |   |  |   |   ├── index.tsx
|   |   |  |   |   ├── login.tsx
|   |   |  |   |   ├── signup.tsx
|   |   |  |   ├── dreamshare.tsx
|   |   |  |   ├── index.tsx
|   |   |  ├── share_holiday
|   |   |  |   ├── find_partner_message.tsx
|   |   |  |   ├── index.tsx
|   |   |  |   ├── share_holiday_message.tsx
|   |   |  ├── index.tsx
|   |   ├──main
|   |   |  ├── ideas
|   |   |  |   ├── idea_statement.tsx
|   |   |  |   ├── idea.tsx
|   |   |  |   ├── index.tsx
|   |   |  ├── interests
|   |   |  |   ├── intereststatement.tsx
|   |   |  |   ├── searchpartners.tsx
|   |   |  |   ├── index.tsx
|   |   |  ├── most_popular_celebs
|   |   |  |   ├── celeb_profile
|   |   |  |   |   ├── celeb_description.tsx
|   |   |  |   |   ├── celeb_icon.tsx
|   |   |  |   |   ├── celeb_image.tsx
|   |   |  |   |   ├── celeb_name.tsx
|   |   |  |   |   ├── index.tsx
|   |   |  |   ├── celeb_modal
|   |   |  |   |   ├── index.tsx
|   |   |  |   |   ├── modalcontent.tsx
|   |   |  |   |   ├── modaltitle.tsx
|   |   |  |   ├── index.tsx
|   |   |  ├── most_popular_movies
|   |   |  |   ├── movie
|   |   |  |   |   ├── movie_description.tsx
|   |   |  |   |   ├── movie_image.tsx
|   |   |  |   |   ├── movie_name.tsx
|   |   |  |   |   ├── index.tsx
|   |   |  ├── index.tsx
|   |   ├──share_components
|   |   |  ├── dreamsharebutton.tsx
|   |   |  ├── sectiontittle.tsx
|   |   ├──seo.tsx
│   ├── hooks
|   |   ├──useAllContentfulMovies.tsx
│   │   ├──useAllContentfulCelebrities.tsx
│   │   ├──useBackgroundImage.tsx
|   |   ├──useInitialContentfulMovies.tsx
│   │   ├──useInitialContentfulCelebrities.tsx
|   |   ├──useSiteMetadata.tsx
│   ├── pages
|   |   ├──index.tsx
│   ├── state
|   |   ├──store.tsx
│   ├── styles
|   |   ├──global.css
│   ├── static
│   ├── tests
│   │   ├── __mocks__
│   │   |  ├── file-mock.js
│   │   |  ├── gatsby-plugin-image.js
│   │   |  ├── gatsby.js
│   │   ├──jest-preprocess.js
│   │   ├──loadershim.js
│   ├── .gitignore
│   ├── gatsby-browser.js
│   ├── gatsby-config
│   ├── jest.config.js
│   ├── LICENSE
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── README.md
│   ├── tailwind.config.js
```
## Components

**Header**
The ```Header``` component includes the following sub-components:

1. *BackgroundImage*: provides optimized size and loading courtesy of gatsby-background-image plugin. However for recent versions of gatsby v3 and above BackgroundImage requres gbimage-bridge plugin to convert images to IGatsbyImageData into background image format.

```
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";

export const useBackgroundImage = () => {
  const { backgroundImage123 } = useStaticQuery(graphql`
    query {
      backgroundImage123: file(relativePath: { eq: "Hero2.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 2000
            quality: 50
            webpOptions: { quality: 70 }
            placeholder: BLURRED
          )
        }
      }
    }
  `);

  const image = getImage(backgroundImage123);

  const bgImage = convertToBgImage(image);

  return bgImage;
};

```
Ten pass the image into the BackgroundImage component:
```
      <BackgroundImage {...bgImage} > Content goes here </BackgroundImage>
```
2. *DreamshareButton* : The ```DreamshareButton``` component is a shared component among other components in the project. It takes the following props:
 
        *type: this dictates the type of the button e.g "submit"
     
        *onClick: this dictates the function that executes when the button is clicked
   
        *children: use the button to wrap text that you wish to display in the button

*Desktop View*

![HeaderComponent](https://github.com/user-attachments/assets/68f5a8cd-5d50-45b0-9309-63224fc9c4fc)

*Tablet View*

![HeaderComponentTablet](https://github.com/user-attachments/assets/d7f1b404-f025-488e-8b07-d51dcf83d14d)

*Mobile View*

![HeaderComponentTablet](https://github.com/user-attachments/assets/b6d94a1f-c0dd-4ad3-95d0-68d55a7376ff)

**Most Popular Movies**
The ```MostPopularMovies``` component has the following subcomponents:
 1. *Movie* : It takes the following props:
    
           *image: Has to be in the format of IGatsbyImageData
    
           *name: text that signifies the name of the movie
    
           *description: text that signifies the description of the movie
    
  2. A "Loadmore" button using ```DreamshareButton``` that triggers rendering of more movies   

*Desktop view*

![MoviesTablet](https://github.com/user-attachments/assets/e7877d4c-1468-4992-ae43-54d49e51b91d)



*Tablet View*

![MoviesTablet](https://github.com/user-attachments/assets/5e1c52b7-2c83-47ee-92ae-63fcca35e4e3)



*Mobile View*

![MoviesMobile1](https://github.com/user-attachments/assets/18569bf7-e025-406e-8d69-fcbbf30af121)


**Most Popular Celebs**
The ```MostPopularCelebs``` component has the following subcomponents:

 1. *Celeb Profile* : It takes the following props:
    
           *image: Has to be in the format of IGatsbyImageData
    
           *name: text that signifies the name of the celeb
    
           *description: text that signifies the description of the celeb

           *icon: text that signifies the icon of the celeb

           *iconColor: text that signifies the icon color of the celeb
    
 2. A "See more celebs" button using ```DreamshareButton``` that triggers the rendering of the ```CelebModal``` component             

*Mobile View*

![CelebsMobile](https://github.com/user-attachments/assets/c81db744-0da4-4d7c-9f74-ec7cfa869f44)



*Tablet View*

![CelebsTablet](https://github.com/user-attachments/assets/b26556d1-2444-477a-b6df-cae6db2a5943)



*Desktop View*

![CelebsDesktop](https://github.com/user-attachments/assets/5a34963e-cb37-48c8-9a7c-56a7a761f2f2)



**Celeb Modal**

The ```CelebModal``` component has the following subcomponents:

   1. *SectionTitle* : The ```SectionTitle``` button component is a shared component among other components in the project. Use it to wrap text you wish to use as the title         of a section.
   2. The ```CelebProfile``` component which is used for display celeb data
   3. A "close" button using ```DreamshareButton``` component that closes the modal

*Mobile View*

![ModalMobile](https://github.com/user-attachments/assets/3901cd56-28f6-4c24-babf-79fde0b87e28)



*Tablet View*

![ModalTablet](https://github.com/user-attachments/assets/68dc62d5-766f-4b66-af61-f33fd89d7729)


*Desktop View*

![ModalDesktop](https://github.com/user-attachments/assets/26b54488-60cf-4fa7-a8e8-a41d142c872c)


**Ideas**

The ```Ideas``` component has the following subcomponents:

   1. *Idea* : The ```Idea``` button component takes the following props:
    
             *idea: name of the idea

             *imgUrl: url as the source of the background image for the idea pitch

*Mobile View*

![IdeasMobileView](https://github.com/user-attachments/assets/e2cdb581-f099-4679-9537-26c9f479140d)


*Tablet View*

![IdeasTabletView](https://github.com/user-attachments/assets/2ca9e113-0ec5-4577-927c-c2cbe9ae9886)




*Desktop View*

![IdeasDesktopView](https://github.com/user-attachments/assets/1f31704c-a800-4f8f-80d1-45b9865de188)


**Interests**
The ```Ideas``` component has the following subcomponents:

   1. An ```input``` field
 
   2. A "Search partners" button using ```DreamshareButton``` component that submits the input value

*Mobile View*

![InterestsMobile](https://github.com/user-attachments/assets/1b8d0beb-8b76-4036-986a-7cb79689e72e)



*Tablet View*

![InterestsTabletView](https://github.com/user-attachments/assets/a4001cb4-a78a-46b2-9bf9-7514a3fd7eef)


*Desktop View*

![InterestsDesktopView](https://github.com/user-attachments/assets/85da9db3-eb69-4237-99c6-e8ced43a297e)


## Data Fetching

To fetch data from the Contentful GraphQL API. First you have to set up a data schema. For example the project's ```ContentfulMovie``` Schema comprises of:

*movieName
*movieImage
*movieDescription

Then use Gatsby's GraphiQL IDE at endpoint ```http://localhost:8000/___graphql``` to formulate your queries and fetch data. For example fetching data ```ContentfulMovie``` data:

```
import { useStaticQuery, graphql } from "gatsby";

export const useAllContentfulMovies = () => {
  const contentfulMovies = useStaticQuery(graphql`
    {
      allContentfulMovie {
        edges {
          node {
            movieName
            movieImage {
              gatsbyImageData(
                width: 300
                placeholder: BLURRED
                cropFocus: CENTER
                aspectRatio: 0.7
              )
            }
            movieDescription
          }
        }
      }
    }
  `);

  return contentfulMovies;
};

```
Fetching with limits. e.g the first three entries:

```
import { useStaticQuery, graphql } from "gatsby";

export const useInitialContentfulMovies = () => {
  const contentfulMovies = useStaticQuery(graphql`
    {
      allContentfulMovie(limit: 3) {
        edges {
          node {
            movieName
            movieImage {
              gatsbyImageData(
                width: 300
                placeholder: BLURRED
                cropFocus: CENTER
                aspectRatio: 0.7
              )
            }
            movieDescription
          }
        }
      }
    }
  `);

  return contentfulMovies;
};

```

## Testing

**Testing Queries**

To test if you componets queries and renders correctly you need ```gatsby-plugin-testing``` which records your query results and stores it into a snapshot. Also you need ```react-test-renderer``` which checks the if the data is rendered correctly. 


```
import React from 'react'
import MostPopularMovies from '../../../main/most_popular_movies'
import renderer from "react-test-renderer"



describe("MostPopularMovies", () => {
    it("Queries and renders correctly", () => {
      const tree = renderer
        .create(<MostPopularMovies />)
        .toJSON()
  
        expect(tree).toMatchSnapshot()
    })
  })
```
To test if you components render correctly you need ```@testing-library/react```. Testing e.g if component renders without crashing is as follows:

```
import React from 'react'
import MostPopularMovies from '../../../main/most_popular_movies'
import renderer from "react-test-renderer"

describe('MostPopularMovies', () => {
   test('Should render without crash', async () => {
      render(<MostPopularMovies />)
   })
})

```
To run the projects unit tests: ```npm run test:unit```
To get test coverage: ```npm run test:unit:coverage```

## Deployment

Run ```gatsby build ```. The build version of the application will be in the ```public``` folder. Deploy the public folder to netlify by dragging and dropping.

## Optimization

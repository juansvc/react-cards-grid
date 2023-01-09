# React Responsive Card

## Overview

React responsive web page that displays a card-based grid.

## Demo
[Demo](https://filter-info-cards.vercel.app)

## Technologies Used

- [React JS / React Hooks](https://reactjs.org/)
- [Sass](https://sass-lang.com) Styling
- [BEM](https://getbem.com) Methodology
- [MSW](https://mswjs.io) API Mocking
- [Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch) API Request

- Mobile First
- Design Patterns
- Best Practices (Naming, Project Structure, HOC, Functional Components, DRY, Destructuring, Spread Functions, Dynamic Rendering, ESlint)

## Installation

- `git clone` this repo
- `npm install` to install dependencies
- `npm run start` to run frontend react app
- `npm run start` to run test and mock api


- Filter Grid Component: 3 columns for desktop, 2 for mobile.
- Content cards flip on hover for desktop, flip on tap for mobile. 3D CSS transform.
- Filters are compounding, if Tag #1 & Tag #2 are selected, only show cards with both tags. If no - filters are selected, show all cards.
- Filters distribute as shown below, and become a dropdown on mobile.
- All cards must be uniform in height, and support any amount of content. Note the text truncation in - the mockup below.
- Filters are buttons on desktop, dropdown on mobile
- Parse this [JSON file](https://s3-us-west-1.amazonaws.com/hero-engineering-public/interview/fe-code-challenge.json) to populate your content
- Utilize React as your framework
- Use SASS for your style system following the [BEM methodology](http://getbem.com/introduction/)
- Data Card vars:
  - String: ID
  - Array: Tags
  - String: Title
  - String: Image URL
  - String: Description
  - Boolean: featured

### Sample Data

```json
{
  "id": "Nerium",
  "tags": ["CMS Selection", "Experience Design"],
  "image": "http://herodigi....jpg",
  "title": "Nerium: Reimagining the digital CX for Nerium International",
  "description": "As Nerium Internation....",
  "featured": 0
}
```

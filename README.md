## Project
Bargames

## Project Directory Structure

**Component folder**
```bash
ComponentName
├── ComponentName.test.tsx
├── ComponentName.tsx
├── componentName.module.ts
└── index.ts
```

**API folder**

```bash
api.js
```

**Stores folder**
```bash
storeName
├── storeName.js
├── storeName.test.ts
└── index.ts
```

**Utils folder**

```bash
utilsName
├── utilsName.js
├── utilsName.test.ts
└── index.ts
```

## Tech Stacks

consists of:
- [SWR](https://swr.vercel.app/) for server data fetching management
- [Zustand](https://github.com/pmndrs/zustand) for client-side state management
- [React Router](https://reactrouter.com/en/main) for managing urls and updating pages
- [React Select](https://react-select.com/home) for creating customizable and accessible select input fields
- [Jest Code Coverage](https://jestjs.io/) for measuring the amount of code that is being tested by my unit tests.

## Improvements
1. Loading of `Games List` - Right now, we loaded them altogether, ill recommend to use [react-virtualized](https://github.com/bvaughn/react-virtualized)
2. Lazy load Images that not in `Above the Fold` by using [react-lazy-load-image-component](https://github.com/Aljullu/react-lazy-load-image-component)
3. Use [Storybook](https://storybook.js.org/), It makes development faster, testing easier, and collaboration more effective. It also promotes reusability and helps to create living documentation for UI components.
4. Create a criteria for `Non-Functional Requirement (NFR)` , this refer to the qualities that describe how a web application should perform.
	- Performance
	- Security
	- Reliability
	- Maintainability

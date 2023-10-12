![Thiết kế chưa có tên](https://github.com/ryanphanrp/therealryanphanrp/assets/51282340/ab185ae0-85f5-467d-9e19-5a9af180e8a6)

# therealRYANPHAN
The personal website project has been built by Turborepo and ShadUI.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `web`: a [Next.js](https://nextjs.org/) app
- `ui`: a stub React component library shared for apps application which have [shadui](https://ui.shadcn.com/) react components library.
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `shared-utils`: share some utilites file and functions.

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd therealryanphanrp
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```bash
cd therealryanphanrp
pnpm dev
```

To install new [shadui](https://ui.shadcn.com/) component to `ui` packages, run the following command:

```bash
pnpm ui:add <name_shadui_component>
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

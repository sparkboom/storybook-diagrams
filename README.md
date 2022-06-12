# Storybook Diagrams

These are diagrams that can be used in various notes.

These components use Svelte and Tailwind.

## Development

### Set up environment

```sh
source ./.env
```

### Run

```sh
yarn start
```

### Build

```sh
yarn build
```

### Test

```sh
yarn test
```

### Storybook

```sh
# Run
# the node options below is required for newer versions of node
NODE_OPTIONS=--openssl-legacy-provider nx run ux:storybook

# Build Storybook
nx run ux:build-storybook

# Run e2e for UX components
nx run ux-e2e:e2e

# Create new Svelte component
nx g @nxext/svelte:component
```

----

## Resources

- 

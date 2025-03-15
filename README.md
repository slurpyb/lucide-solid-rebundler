# lucide-solid-rebundler

Adds virtual path for lucide-solid package, reducing package size and fixing issue with fingerprint.js via tree-shaking.

See Christopher N. Katoyi Kaba's [blog post](https://christopher.engineering/en/blog/lucide-icons-with-vite-dev-server/) about the issue and the fix. This repo is just that solution.

The lucide-solid package has actually been updated since that post, breaking that solution slightly.

## Installation
You can either manually apply the fix (below) or install via npm
```bash
pnpm add -D @slurpyb/lucide-solid-rebundler
pnpm add lucide-solid                               # if lucide-solid is not installed
```

Then update your vite config
```typescript
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from 'vite'

export default defineConfig({
  // ...
  resolve: {
    alias: {
      "lucide-solid/icons": fileURLToPath(
        new URL(
          // Replace with the path to your lucide-solid package
          "./node_modules/lucide-solid/dist/source/icons",
          import.meta.url,
        ),
      ),
    },
  },
})
```

## Manual Installation

1. Configure your `vite.config.ts`:

```typescript
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solid()],
  resolve: {
    alias: {
      "lucide-solid/icons": fileURLToPath(
        new URL(
          // Replace with the path to your lucide-solid package
          "./node_modules/lucide-solid/dist/source/icons",
          import.meta.url,
        ),
      ),
    },
  },
})

```

2. Add TypeScript definitions in `src/@types/lucide.d.ts`:

```typescript
declare module "lucide-solid/icons/*" {
  import { LucideProps } from "lucide-solid";
  import { Component } from "solid-js";
  const cmp: Component<LucideProps>;

  export = cmp;
}
```

## Usage

Import icons using the new path:

```tsx
import Twitch from 'lucide-solid/icons/twitch'

const MyComponent = () => {
  return <Button leftIcon={<Twitch />} />
}
```


## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.


## License

[MIT](LICENSE)

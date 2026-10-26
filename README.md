# @iest-tecnologia/icons

Shared stroke icon set and the IEST logo mark, for IEST's Next.js apps.
Companion package to [`@iest-tecnologia/ui`](https://github.com/IEST-Tecnologia/ui),
which depends on this for its own components.

## Install

```bash
npm install @iest-tecnologia/icons
```

Peer dependency: `react >=19`.

## Use

```tsx
import { PencilIcon, TrashIcon, LogoIcon } from "@iest-tecnologia/icons";

<PencilIcon className="h-4 w-4" />
```

## Conventions

- One file per icon, default-exported, all taking `IconProps`
  (`React.SVGProps<SVGSVGElement>` + `className`).
- `viewBox="0 0 24 24"`, stroke-based (`fill="none" stroke="currentColor"
  strokeWidth={1.75}`), `aria-hidden` by default — color comes from
  `currentColor`, never a hardcoded fill.
- Default size `h-5 w-5`, compact variants pass `h-4 w-4`.
- The one exception is `LogoIcon`, the filled IEST brand mark — it ships its
  own colors and is not `aria-hidden`.

Adding an icon: drop a new `XIcon.tsx` following the pattern above and add it
to `src/index.ts`'s barrel export.

## Releasing

Mirrors `@iest-tecnologia/auth`: bump `version` in `package.json`, push a
`v<version>` tag, and the `publish` workflow stages the release to npm via
trusted publishing (OIDC) — a maintainer then runs
`npm stage approve <stage-id>` with 2FA to make it public.

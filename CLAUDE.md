# Project
WellUber — flexi benefit management platform marketing landing page.

# Platform
Web — one-page marketing landing site (static export)

# Stack
Framework: Next.js 16 (App Router, static export)
Language: TypeScript
Styling: Tailwind CSS v4
Components: shadcn/ui + Magic UI
Fonts: Inter + Bricolage Grotesque (via `next/font/google`)

# Design system
Docs and design references will be placed in ./docs/ after scaffold.
Check there before building any section or component.

# File structure
src/
  app/
    layout.tsx                  # root layout, metadata
    globals.css                 # global styles, Tailwind base
    (marketing)/
      layout.tsx                # marketing shell (navbar + footer + fonts)
      page.tsx                  # landing page sections composed here
      privacy-policy/page.tsx   # legal
      terms-of-service/page.tsx # legal
  components/
    ui/             # shadcn/ui primitives (auto-generated, do not hand-edit)
    magicui/        # Magic UI components (copied in as source)
    marketing/      # landing page sections (Hero, Features, CTA, Footer, etc.)
    shared/         # reusable layout pieces (Logo, Nav, Container, etc.)
  lib/
    utils.ts        # cn() and other shared utilities
  types/
    index.ts        # shared TypeScript interfaces
public/
  images/           # static images and illustrations
docs/               # design references, DESIGN.md, screenshots, Figma exports

# Conventions
- Component files: PascalCase (e.g. HeroSection.tsx)
- Utility files: camelCase (e.g. formatDate.ts)
- All components fully typed — no `any`, no untyped props
- Co-locate component-specific types at the top of the file
- Section components are self-contained — no props drilling across sections
- Magic UI and shadcn/ui components live in separate folders — do not mix

# Deploy
Target: Vercel
Export: Static (next export compatible)
Always run /deploy before any push — security check required

# Team
Solo

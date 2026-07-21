# How I Build

[![Deploy to GitHub Pages](https://github.com/balangyaoejuspher/how-i-build/actions/workflows/deploy.yml/badge.svg)](https://github.com/balangyaoejuspher/how-i-build/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Docusaurus](https://img.shields.io/badge/Made%20with-Docusaurus-3ECC5F)](https://docusaurus.io/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)

A blueprint-driven blog on how I plan, build, and operate production systems from scratch.

Live at **https://balangyaoejuspher.github.io/how-i-build/**

## What this is

The blog is organized around a seven-phase framework, published in reading order:

1. **Foundation.** Users, MVP, critical path, workload profile, first-order architecture.
2. **Tech Stack.** Package selection, version pinning, database schema, primary-key strategy, auth and identity, API design.
3. **Resiliency.** Failure modes, real-world incidents (BullMQ, WAF outages, contract drift), observability, caching.
4. **Standards.** Clean architecture, CI guardrails, duplication and technical debt, deployment strategies.
5. **AI Discipline.** Prompt patterns, the blind-paste antipattern, agentic workflow, career traps.
6. **Working Practices.** Code review, hiring, mentorship.
7. **Craft and Career.** Reading unfamiliar code, debugging, growth as an engineer.

Every post traces back to a written framework, every recommendation names its trade-offs, and every AI-related post shows how to use assistants without letting them ship your next incident.

Start with the [Start Here](https://balangyaoejuspher.github.io/how-i-build/start-here) page for a curated map.

## Local development

```powershell
npm install
npm run start
```

Opens `http://localhost:3000/how-i-build/` with hot reload.

```powershell
npm run build
```

Generates the static site into `./build`. This is the exact command that CI runs.

```powershell
npm run serve
```

Serves the built site locally to preview production output.

## Stack

- Docusaurus 3 with the `@docusaurus/faster` (Rspack) preset.
- MDX for blog posts.
- Mermaid diagrams via `@docusaurus/theme-mermaid`.
- TypeScript for config.
- Deployed to GitHub Pages via `.github/workflows/deploy.yml`.

## Contributing

Contributions welcome. New blog posts, corrections, typo fixes, and broken-link reports are all fair game via PR.

Before opening a PR, please read [CONTRIBUTING.md](./CONTRIBUTING.md). It covers the style rules (no em dashes in prose, no code comments), the dating and slug conventions, the blueprint sync requirement, and the review process.

## Related work

- **WAF Survival Guide.** Cross-provider (GCP Cloud Armor, AWS WAF, Cloudflare) developer-first WAF handbook. https://balangyaoejuspher.github.io/waf-survival-guide/

## Author

Juspher Balangyao. Software Engineer.

- GitHub: [@balangyaoejuspher](https://github.com/balangyaoejuspher)

## License

MIT. See [LICENSE](./LICENSE).

The blog posts (prose content) may be quoted or referenced with attribution.

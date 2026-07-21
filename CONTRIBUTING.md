# Contributing to How I Build

Thanks for considering a contribution. This repo accepts new blog posts, corrections, typo fixes, and broken-link reports.

Before you open a PR, read the rules below. PRs that don't follow them will be asked to revise before review.

## What kind of PRs are welcome

- **New blog posts** that fit an existing chapter of the framework, or that argue for a new chapter.
- **Corrections and clarifications** in existing posts.
- **Typo fixes and broken-link reports.**
- **Diagram improvements** (Mermaid diagrams that render better, correct incorrect flows).
- **Config improvements** that keep the site accessible, fast, or maintainable.

## What kind of PRs are not welcome

- Rewrites of existing posts to match a different voice. The voice is deliberate.
- SEO-driven keyword stuffing.
- Sponsored or affiliate content.
- Posts arguing "AI will replace developers" or the mirror position "AI is useless."  The blog's stance on AI is documented across Chapter 5; contradicting it is fine, misrepresenting it is not.

## Post structure

Every blog post lives in `blog/` as an MDX file. The frontmatter is required.

```yaml
---
title: "How I Build: [Descriptive Title]"
authors: [balangyaoejuspher]
tags: [architecture, planning]
date: 2026-01-01
slug: /post-slug
---
```

- **`title`** always starts with `How I Build:` for series consistency.
- **`authors`** is a YAML array. Only `balangyaoejuspher` is defined; add yourself to `blog/authors.yml` in the same PR if you want attribution.
- **`tags`** must all exist in `blog/tags.yml`. Add new tags in the same PR if needed.
- **`date`** matches the filename date prefix and follows the [dating policy](#dating-policy) below.
- **`slug`** is the stable URL for the post. Use kebab-case, no date, no leading slash beyond the one shown. This keeps cross-post links from breaking when dates cascade.

After the frontmatter, add a `{/* truncate */}` marker on its own line about 2 to 4 paragraphs in. This creates the "read more" boundary for the blog listing.

## Style rules

The voice is deliberate. Following these rules is not optional.

### Prose

- **No em dashes (`—`) or en dashes (`–`).** Use periods, colons, commas, or parentheses instead. This is enforced.
- **No AI buzzwords** like "delve," "tapestry," "in today's fast-paced world." If it sounds like the intro to an LLM completion, rewrite it.
- **Blunt, direct voice.** Short paragraphs. Bold text for emphasis. State claims; do not hedge.
- **No "in my experience" or "most teams don't do this" throat-clearing.** State the claim. If you're wrong, be wrong.
- **Avoid the "The Rule" ending pattern.** It's overused across the existing series. Break the pattern.

### Code

- **No comments in code snippets.** `//`, `///`, `#`, `<!-- -->`, docstrings, all banned. Names should carry the meaning.
- **No `<!-- truncate -->`.** MDX doesn't accept HTML comments; use `{/* truncate */}` instead.
- **Code samples must be complete enough to actually run.** No `// ... implementation here`.

### Structure

- **Comparison tables where a decision has trade-offs.** Not for every post, but if you're comparing options, use a table with named dimensions.
- **Mermaid diagrams for flows.** Use fenced ```mermaid blocks.
- **At least one "AI Co-Pilot Layer" prompt** if the post covers a decision-making topic. See existing posts for the pattern.

## Blueprint sync

Every post must map to a section in [context-blueprint.md](./context-blueprint.md). This file is the canonical outline of the series.

- Adding a post that extends an existing chapter: update the chapter's subsection in the same PR.
- Adding a post for a topic not in the blueprint: add a new subsection (or a new chapter, if genuinely new territory) in the same PR.
- If your post reshapes the blueprint's structure, the reshape belongs in the PR.

Note: `context-blueprint.md` is gitignored on `main` in the deployed site, but it lives in the repo for exactly this purpose. Check the file locally before writing.

## Dating policy

The blog uses one post per day, in reverse chronological order.

- **Newest post gets today's date.** In your PR, use `date: YYYY-MM-DD` matching today (the day the PR is expected to merge, roughly).
- **When your PR merges, existing posts cascade one day earlier.** The maintainer handles this rename; you don't need to.
- **Filenames follow `YYYY-MM-DD-slug.mdx`.** The date in the filename must match the `date:` frontmatter.

## Slug policy

Every post has a `slug: /post-name` frontmatter that becomes its URL.

- Slugs are stable across date changes. Do not put dates in slugs.
- Cross-post links use `/slug` absolute paths, not `.mdx` file references and not `/YYYY/MM/DD/slug`.

## The PR checklist

Before opening the PR:

- [ ] `npm run build` succeeds locally (this is what CI runs).
- [ ] `grep -R '[\u2014\u2013]' blog/ src/` returns nothing (no em or en dashes).
- [ ] Frontmatter has `title`, `authors`, `tags`, `date`, `slug`.
- [ ] `{/* truncate */}` marker is present.
- [ ] Any new tags exist in `blog/tags.yml`.
- [ ] Any new author key exists in `blog/authors.yml`.
- [ ] Blueprint updated in the same commit if the post extends or reshapes the framework.
- [ ] Cross-post links use `/slug` paths.
- [ ] No code comments in any fenced code block.

## Review process

- Every PR requires **one approval from a code owner** (Juspher Balangyao, per `.github/CODEOWNERS`) before it can merge. This is enforced by branch protection on `main`.
- The code owner bypasses this requirement on their own direct commits (fixes, config changes, etc.).
- Feedback comes as delta-only comments on specific lines. Address them; don't rewrite the whole post.
- Once approved, the PR is squash-merged. Squashing is the only allowed merge method, so history stays clean.
- Reviews are dismissed if you push new commits after approval (`dismiss_stale_reviews_on_push`). Ask for re-review after any additional changes.
- All open review comments must be resolved before merge.
- After merge, the deploy workflow runs automatically and the post is live within ~2 minutes.

## Reporting issues

- **Typos or broken links:** open an issue with the specific URL. Include a screenshot if the issue is visual.
- **Factual corrections:** open an issue or PR with a source. Correcting a claim requires evidence.
- **Content disputes:** open a discussion, not an issue. Disagreements about the framework's opinions belong there.

## Code of conduct

Be direct. Be honest. Do not be cruel.

Disagreements about technical claims are welcome. Personal attacks are not. Bad-faith engagement (concern trolling, sea-lioning, karma farming) is not.

The maintainer's judgment on any of the above is final.

## Attribution

Contributors who ship substantial changes get attribution in the post's frontmatter (`authors: [balangyaoejuspher, your-key]`) and their author page appears on the site. Add yourself to `blog/authors.yml` in the same PR.

## License

By contributing, you agree that your contribution is licensed under the same [MIT license](./LICENSE) as the rest of the repository, and that prose content may be quoted or referenced with attribution.

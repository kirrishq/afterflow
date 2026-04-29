# AGENTS.md

## Project context
This is my first real project.
It is a website for my web agency.

Main stack:
- Next.js
- React
- TypeScript
- Strapi CMS

The developer is still learning React and Next.js.
Explain changes in simple language and avoid unnecessary complexity.

## Primary working rules
- Keep changes minimal and directly related to the current request.
- Do not redesign, refactor, or reorganize unrelated parts of the project.
- Do not change architecture unless the user explicitly asks for it.
- Do not add new dependencies unless the user explicitly approves them.
- Do not rename, move, or delete files unless it is necessary for the requested task.
- Do not modify configuration files unless the task clearly requires it.
- Do not touch environment variables, secrets, deployment config, billing config, or auth-related code unless explicitly asked.
- Preserve the existing coding style, file structure, and naming conventions.
- Reuse existing components and utilities before creating new ones.
- Prefer simple, readable, beginner-friendly solutions over advanced abstractions.

## Safe execution policy
For any task larger than a small edit:
1. First inspect the relevant files.
2. Then propose a short plan.
3. Then list which files you intend to change.
4. Wait for confirmation before making broad or multi-file changes.

If the task is small and clearly scoped, make the change directly, but still keep it minimal.

## Editing boundaries
- Only edit files relevant to the requested task.
- Never make “bonus improvements” unless the user asks for them.
- Never fix unrelated warnings or lint issues in the same change unless the user asks.
- If you notice other problems, mention them separately instead of changing them automatically.
- Do not replace existing code with a completely new pattern unless necessary.

## New pages and components
When creating a new page or section:
- Follow the existing project structure.
- Match the current visual language of the project unless the user asks for a redesign.
- Reuse existing layout, spacing, buttons, cards, and section patterns where possible.
- If a new file is needed, create only the smallest required set of files.
- Do not generate placeholder pages, fake routes, or dummy content unless the user requests them.

## Design and UI rules
- Keep the current brand direction unless the user explicitly asks to change it.
- Do not copy reference websites literally.
- Use references only as inspiration for layout rhythm, typography, spacing, motion, or polish.
- Avoid generic AI-looking design decisions.
- Prefer consistency with the current site over dramatic redesigns.

## Code quality rules
- Write clean and readable TypeScript.
- Keep components focused and not overly large.
- Prefer explicit props and simple logic.
- Avoid clever patterns that make the code harder to learn.
- Add comments only when they are genuinely useful.
- Do not leave dead code, commented-out blocks, or temporary debug output.

## Validation
After code changes, when relevant, run only the smallest useful validation:
- lint for lint-related changes
- build for structural or route-related changes
- targeted checks instead of broad expensive checks when possible

If a check cannot be run, say so clearly.
If something is risky, say so clearly.

## Communication style
- Explain what you changed in simple language.
- Explain why you changed it.
- Mention which files were changed.
- Warn before making larger changes.
- When there are multiple valid options, choose the simplest one and briefly mention alternatives.

## Never do this without explicit permission
- Add dependencies
- Large refactors
- Move or rename many files
- Rewrite styling system
- Change routing structure broadly
- Change CMS integration patterns
- Change theme system
- Edit deployment or CI config
- Delete existing code that might still be used

## Definition of done
A task is done when:
- The requested change is implemented
- The change is minimal and scoped
- Unrelated files are untouched
- The result matches the existing project style
- The explanation is simple and beginner-friendly
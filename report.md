## Selected UI element
- Target: The "View Recipe" button (`.btn-primary`).
- Reason: It uses the `@apply` directive to aggregate multiple Tailwind utility classes (background colours, hover states, padding, etc.) into a single class, creating a complex computed result from an abstract source.

## Property analysis
- `background-color`
  - Computed value: `rgb(255 103 64 / 1);` (or `#ff6740`).
  - Styles panel rule:
  ```css
  .btn-primary {
    border-radius: 0.5rem;
    --tw-bg-opacity: 1;
    background-color: rgb(255 103 64 / var(--tw-bg-opacity, 1));
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-weight: 600;
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity, 1));
    --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    }
  ```
  - Generated CSS location: An inline `<style>` tag injected into the document head by Vite (identified by the `data-vite-dev-id` attribute). The source map is not in a separate file, but instead embedded as a Base64-encoded data URI attached at the bottom of this style block via a `/* sourceMappingURL=... */` comment.
  - Source map traceback: DevTools traces this back to the `main.css:7` (the line containing `@apply bg-primary-500`).
- `padding-left` / `padding-right` (from `px-4`)
  - Computed value:  `16px`
  - Styles panel rule: Same as above (from `.btn-primary`).
  - Generated CSS location: Same as above.
  - Source map traceback: Same as above (from `main.css:7`).
- `border-radius` (from `rounded-lg`)
  - Computed value: `8px`
  - Styles panel rule: Same as above (from `.btn-primary`).
  - Generated CSS location: Same as above.
  - Source map traceback: Same as above (from `main.css:7`).
- `color` (from `text-white`)
  - Computed value: `rgb(255 255 255 / 1);` (or `#ffffff`)
  - Styles panel rule: Same as above (from `.btn-primary`).
  - Generated CSS location: Same as above.
  - Source map traceback: Same as above (from `main.css:7`).
  - Note: The alpha value is 1 due to the default opacity set by Tailwind's color utilities.
- `box-shadow` (from `shadow-md`)
  - Computed value: `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px`
  - Styles panel rule: Same as above (from `.btn-primary`).
  - Generated CSS location: Same as above.
  - Source map traceback: Same as above (from `main.css:7`).
  - Note: The `box-shadow` property is composed of multiple CSS variables (`--tw-shadow`, `--tw-ring-offset-shadow`, `--tw-ring-shadow`) that Tailwind uses to manage complex shadow layering and ring effects. The final computed value is a combination of these variables, which are defined globally by Tailwind and cannot be traced back to a specific line in the source code.

## Conclusion
### The `@apply` abstraction gap
The concept of a generated CSS file become ambiguous during local development.
When inspecting the element, the styles do not come from a physical CSS file.
Instead, Vite processes the Tailwind `@apply` directives and injects a massive, concatenated CSS block directly into the document head.
The devtools only know how to map this back to `main.css` because Vite appends a base64-encoded JSON object at the very end of the inline styles.
The mapping relies on the browser decoding this virtual map on the fly, which is a non-standard approach that only works in development mode.


### CSS variable indirection
Even if you trace the class to `bg-primary-500`, the computed style often relies on a CSS variable (`--tw-bg-opacity`).
The source map cannot trace a dynamically computed CSS variable back to a specific line in the source code, because the variable is defined globally by Tailwind.

### Production minification flattening
While the step-by-step mapping works in development, it breaks down entirely in the production build.
The bundler aggressively concatenates and minifies the CSS into a single chunk.
During this process, Rollup discards the PostCSS source maps, a limitation tracked in the Vite repository (see [vite#2830](https://github.com/vitejs/vite/issues/2830)).
Inspecting the button in the preview server points to the compiled chunk, breaking the visual link between the source and the generated CSS.
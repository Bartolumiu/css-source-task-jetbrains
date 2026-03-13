# Tracing Generated CSS Back to Source

## Setup and run instructions

1. Clone the repository and navigate to the project directory:

    ```bash
    git clone https://gitbub.com/Bartolumiu/css-source-task-jetbrains.git
    cd css-source-task-jetbrains
    ```
   
2. Install the dependencies:

    ```bash
   pnpm install --frozen-lockfile
    ```

### Development
3. Start the development server:

    ```bash
    pnpm dev
    ```
   
### Production Preview
4. Build the project for production:
    ```bash
    pnpm build
    ```
   
5. Start the preview server:
    ```bash
    pnpm preview
    ```
   

## How CSS is transformed

The source (`app/assets/css/main.css`) contains Tailwind directives (`@tailwind`, `@apply`).
During the build, Vite processes this file using PostCSS.
The Tailwind plugin then scans the .vue files for class names, resolves the `@apply` directives, strips out the custom macros, and outputs browser-compatible CSS utility classes.

## Location of generated CSS and source maps
The location varies based on the environment:

### Development
The generated CSS is served from memory by Vite's development server.
You can inspect the generated CSS and source maps in the browser's developer tools under the "Sources" tab.

### Production Preview
The generated CSS output is located in the `.output/public/_nuxt/entry.(hash).css` file.
While JavaScript source maps (`.js.map`) are successfully generated in this directory, the CSS source map is being discarded by Rollup during the build process, which is why it does not appear in the output.

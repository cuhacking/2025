# LikeC4 Template

This template is a simple example of how to use LikeC4.  
Contains:

- LikeC4 sources ([`/src`](./src/))
- Deploy to github pages ([`pages.yml`](./.github/workflows/pages.yml))

Demo - [https://template.likec4.dev](https://template.likec4.dev/view/cloud)

Try it online:

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/likec4/template?file=src%2Fmodel.c4&initialpath=%2Fview%2Findex)

> StackBlitz does not support extensions, so do not expect validation, syntax highlighting and other features in likec4 files.  
> Try this template online with [github.dev](https://github.dev/likec4/template/blob/main/src/model.c4) and install extension.

## How-to

1. Create a new repository from this template
2. Pull your repository and open in VSCode
3. Install suggested [LikeC4 extension](https://marketplace.visualstudio.com/items?itemName=likec4.likec4)

Now you can edit likec4 sources, refactor, navigate and preview diagrams.

### CLI

You can install globally, locally and use scripts from `package.json`, or just via `npx`  
Check [how to install likec4](https://github.com/likec4/likec4/tree/main/packages/likec4#install)  

> LikeC4 requires Node.js version 18+, 20+  

To start local server with live reload (for development or quick preview)  
Inside the project folder:

```bash
npx likec4 start
```

Export to PNG:

```bash
npx likec4 export png -o png
```

Documentation: https://likec4.dev/docs/tools/cli/

### Deployment

Deployment is the same as for any project built with [vite](https://vitejs.dev/).

1. Build static site (export to HTML, ready for deployment):

```bash
npx likec4 build -o ./dist
```
> Check `npx likec4 build --help` for options and examples

2. Upload `./dist` folder to your hosting

#### Github Pages

This template contains workflow to deploy to github pages on every push to `main` branch.  
Check [`.github/workflows/pages.yml`](./.github/workflows/pages.yml)

## License

This project is released under the [MIT License](LICENSE)
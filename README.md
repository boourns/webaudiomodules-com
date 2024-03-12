# Source code to webaudiomodules.com

This repository contains the [www.webaudiomodules.com](https://www.webaudiomodules.com) website, including hosted copies of wam-community and the latest webaudiomodules SDK.

This site uses [Docusaurus](https://docusaurus.io), which builds the website into the `docs/` folder. When changes are merged to this repository, Github will automatically deploy whatever content is in `docs/` to www.webaudiomodules.com.

- Please don't edit `docs/` directly, as it's overwritten every time the website is built.
- Make sure to build the website before you push your changes to Github. If you change something, but don't run `npm run build`, nothing in `docs/` will change and your edit won't be reflected.

The site is also behind Cloudflare, which acts as a cache, so if you don't see your merged changes live you need to perge the CloudFlare cache.

## Development

- Run the site for development using:

  `npm run start`

- Run build the site:

  `npm run build`

  > Make sure to build the site before commiting changes

## Structure

Depending on where you place a file in this repo, it'll show differently on the website. There's 4 places where you might want to edit content:

| folder       | website path                 | description                                                                                                          |
| ------------ | ---------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `/content`   | www.webaudiomodules.com/docs | The bulk of the content of the website. Pages here have a common layout, and are added to the sidebar automatically. |
| `/news`      | www.webaudiomodules.com/news | For pages with a date and author. Pages here have a common layout, and are not added to the sidebar.                 |
| `/src/pages` | www.webaudiomodules.com/     | For "raw", custom pages. Pages here have no default layout and are not added to the sidebar.                         |
| `/static`    | www.webaudiomodules.com/     | For "raw" files. Everything here gets copied as-is to the root of the site                                           |

Some good-to-know information:

- `/content`
  - If you add a folder here, include `_category_.json` with metadata. Look at existing folders for examples.
  - If you add a page here, make sure to include a metadata header with `sidebar_position:`. Look at existing folders for examples.
  - Supported formats: `.md`, `.mdx` for pages with interactive javascript.
- `/news`
  - Posts here follow the file format: `[date]-[slug-id].md`.
  - If you add a post here, and include a metadata header with `authors`, make sure the author is listed in `news/authors.yml`
  - Supported formats: `.md`, `.mdx` for posts with interactive javascript.
- `/src/pages`
  - Pages here are built using TSX and React.
  - Pages here are routed from the root (`/`) of the site. This is how some files here would appear on the site:
    - `/src/pages/index.tsx` -> `www.webaudiomodules.com/`
    - `/src/pages/foo.tsx` -> `www.webaudiomodules.com/foo`
    - `/src/pages/folder/index.tsx` -> `www.webaudiomodules.com/folder`
    - `/src/pages/folder/foo.tsx` -> `www.webaudiomodules.com/folder/foo`
    - etc

Other folders that don't affect the build to `/docs`:

| folder   | website path | description                                                                                      |
| -------- | ------------ | ------------------------------------------------------------------------------------------------ |
| `/tools` | _N/A_        | Useful scripts                                                                                   |
| `/news`  | _N/A_        | An http server                                                                                   |
| `/docs`  | _--_         | `/docs` itself is ignored when building the site. Don't edit content here! It'll be overwritten. |

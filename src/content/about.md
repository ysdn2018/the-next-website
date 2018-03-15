---
templateKey: about-page
path: /about
title: About Dynamic Pages
subtitle: 'This is front the subtitle field, inserted in the template'
image: /assets/sloth.jpg
description: >
  Sometimes pages have little bits of text rather than a main body section for
  weirder layouts. Formatting text in frontmatter like this allows you to have
  named little nodes of information.


  This information isn't actually inserted in the page, you can add it similar
  to how we added the list in the template file.
exampleList:
  - text: list item one
  - text: list item two
  - text: list item three
  - text: list item four
---
The content folder is where all your information for dynamic pages lives.

You can create markdown files in here and use that data in other pages.

The `templateKey` field above tells Gatsby which template in your `src/templates` folder to use when turning this markdown file into an actual page.

You might just want to use dynamic pages for blog posts anyways and not use markdown files for other pages. To just create normal pages, you can do things like in `src/pages/page-2.js`.

You can add content in the `frontmatter` part of file like lists if you want to be able to place content within more complex styles.
This list below isn't actually part of the markdown.

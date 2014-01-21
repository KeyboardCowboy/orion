# Orion SASS Library
Version 2.1

https://github.com/KeyboardCowboy/orion

The CSS Directory is organized in the following manner:

## Contents

- Variables
  Variables needed for certain mixins and functions, both globally and locally.

- Mixins
  Tools are SASS files containing mixins and functions that the
  components rely on to run.  They may be safely imported into child themes
  without the risk of duplicating CSS declarations.

- Placeholders
  These are commonly used styles that can be extended into CSS selectors at will.

- Components
  Components are purely CSS declarations.  They should not contain any variables
  or other functionality.

## Libraries
Orion integrates various 3rd party libraries:

- [Zen Grids, v1.4](http://zengrids.com/) for responsive grid layouts
- [Typeplate, v1.1.2](http://typeplate.com/) for typography
- [Normalize, v2.1.3](http://necolas.github.io/normalize.css/) for cross browser consistency

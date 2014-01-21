# Orion SASS Library
Version 3.x

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

### Included
Some libraries are included in Orion and are loaded automatically.
- [Typeplate, v1.1.2](http://typeplate.com/) for typography
- [Normalize, v2.1.3](http://necolas.github.io/normalize.css/) for cross browser consistency

### Installed
Some libraries must be installed on your system in order to be used.
- [Bourbon](http://bourbon.io)* for CSS3 and multi-vendor support
- [Zen Grids](http://zengrids.com) for responsive grid layouts


*Bourbon is required for Orion to work at all.

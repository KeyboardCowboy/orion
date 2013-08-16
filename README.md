# Orion SASS Library
Version 1.1

https://github.com/KeyboardCowboy/orion

The CSS Directory is organized in the following manner:

## Contents

- Libraries
  These are third party SASS libraries such as Zen Grids or Bourbon that contain
  site agnostic tools.

- Variables
  Variables needed for certain mixins and functions, both globally and locally.

- Mixins
  Tools are SASS files containing mixins and functions that the
  components rely on to run.  They may be safely imported into child themes
  without the risk of duplicating CSS declarations.

- Components
  Components are purely CSS declarations.  They should not contain any variables
  or other functionality.

## Changelog

### Release 1.1
- Added Drupal QuickFix for improved status messages
- Upgraded x-rem to handle multiple values
- Removed Text-Shadow mixin.  IE just sucks at rendering text shadows.

# Tailwindcss @apply directive with dynamic class names

This repository demonstrates a bug where Tailwind's `@apply` directive doesn't work as expected when used with dynamically generated class names.  The issue arises when trying to apply a dynamic class to an element using the `@apply` directive. This usually manifests as the styles not being applied, or conflicting styles. 

## Bug Description

The `@apply` directive in Tailwind CSS is designed to apply predefined utility classes to custom classes.  However, when the class name being applied is dynamically generated, it fails to work correctly. 

## Bug Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the unexpected behavior in the browser.

## Solution

The solution involves avoiding the use of `@apply` with dynamically generated classes. Using normal className prop or other similar mechanisms offers the desired functionality without encountering the bug. Please see the solution file for implementation details.
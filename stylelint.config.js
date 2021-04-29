module.exports = {
  extends: ["stylelint-config-standard"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
          "empty-lines",
          "no-empty-source"
        ],
      },
    ],

    "declaration-block-trailing-semicolon": null,
    "no-descending-specificity": null,
  },
};

// https://stackoverflow.com/questions/61443484/how-to-solve-semi-colon-expected-warnings-css-semicolonexpected

// There is no built-in way to solve this within VS Code. The recommended way to solve this is by making use of the Stylelint extension to handle your CSS linting (& SCSS and/or Less, etc.). It's very powerful and likely will improve your stylesheets beyond removing these errors for you.

// You need to add the styleint dependencies to your project. Run:
// npm install --save-dev stylelint stylelint-config-standard

// yarn add -D stylelint stylelint-config-standard
// Create a stylelint.config.js in the root of your project. (same location where your package.json is stored)
// Place this snippet into it:

// module.exports = {
//   extends: ["stylelint-config-standard"],
//   rules: {
//     "at-rule-no-unknown": [
//       true,
//       {
//         ignoreAtRules: [
//           "tailwind",
//           "apply",
//           "variants",
//           "responsive",
//           "screen",
//         ],
//       },
//     ],
//     "declaration-block-trailing-semicolon": null,
//     "no-descending-specificity": null,
//   },
// };

// Install these extensions to your VS Code setup:
// Stylelint
// Tailwind CSS IntelliSense
// Last but not least, adjust your local or global VS Code settings.json file to include:
// "css.validate": false,
// "less.validate": false,
// "scss.validate": false,
// This way you will have the native linting "disabled", but are still ensuring it is linted using the Tailwind IntelliSense plugin.
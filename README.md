# Coding is Magic

A block language coding game using Unity, Google Blockly, Firebase, and React.js, made as a capstone for the 1809 Cohort of the Grace Hopper Program at Fullstack Academy. The alpha can be found online at [Coding is Magic](https://coding-is-magic.firebaseapp.com/) on Firebase.

## Installation

Please note that the full installation cannot be performed without our Unity source code- this repo only contains the website itself and C# scripts for Unity, and does not contain any of the assets or scenes required for a full build.

To install, run `npm install`. Configure Unity to use the provided Assets folder, and place the current build in a Build/ folder in the main directory. Then, `npm run start-dev`, which will automatically generate Webpack assets and process the provided Unity build for Firebase deployment.

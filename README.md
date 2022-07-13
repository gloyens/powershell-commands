# Powershell Command Reference
### Live Demo: https://gloyens.github.io/powershell-commands/

## What is this project?
This project is a searchable table of basic UNIX commands and their Windows Powershell equivalents.

## Aim
While learning about shell commands I repeatedly ran into the problem of UNIX commands not being consistent with Windows, my current OS. I saw this as an opportunity to practice my Javascript skills by creating a small resource that solved this problem, and which could be updated as I learned. I also wanted to learn how to store data in separate JSON files rather than inside the main script, in preparation for future work with databases.

Unexpectedly, loading JSON files (specifically using the Fetch API) required that I set up a test server on my machine, which necessitated some familiarity with Node.js. Creating this relatively simple app, therefore, demystified an important part of web development for me - a little earlier than intended, perhaps, but very useful nonetheless.

## How it works
The frontend side of the app is relatively simple. Once the data is loaded from the JSON file, a function loops through every key in the database, finding the appropriate values (the unix command, its powershell equivalent, the powershell alias, and a description) and appending them to the table.

The search bar works by calling a function, on every key press, that compares the input to every cell in the table (excluding the header). If the inputted text cannot be found in a row, that entire row is hidden from view.

### Known Issues
- Table lacks a number of useful commands.
- Cells are not a fixed size, and can change based on which rows are visible.

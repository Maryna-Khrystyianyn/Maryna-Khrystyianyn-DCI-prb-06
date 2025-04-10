# Task 2

This task practices problem solving.

Your task is to create a mini file browser application. Create and work in `app.js`. See the reference animation below for guidance.

![Reference](./reference.gif)

## Requirements

- The program should be started with `node app.js /my/path`

- If the path is not included in the program arguments, exit the program

- If the path in the program arguments isn't a valid folder, exit the program

- Print an ordered listing of the contents in the given folder; `/my/path`

- Ask the user for input what to do next

- When the user inputs a number, change to that directory from the listing and print an ordered listing

- If the user inputs something that isn't a valid folder, exit the program

## Hints

- `fs.readdirSync("/path/to/folder")`
- `fs.readdirSync("/path/to/file.pdf")` throws an error
- `fs.readdirSync("asdfghasdg")` throws an error

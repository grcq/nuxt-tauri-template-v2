# TypeScript + Nuxt + Tauri v2 template
*NOTE: This template uses yarn. If you do not have yarn installed, run `npm install -g yarn` in your command prompt or terminal.*

You may change whatever you want in this template to fit your needs for your app. Good luck!

## Setup

To use this, use this template or clone the repository and open with your editor.
You will need to have Rust installed. If you do not have it install, visit https://www.rust-lang.org/ to install it.
You will also need the Visual Studio C++ Build Tools installed so you can build and run your application. Install it with your Visual Studio Installer.

Install all the dependencies by doing `yarn install`. If you wish to add more dependencies, use `yarn add <package>`.<br />
If you wish to add any additional packages to the tauri application, go in the `src-tauri` directory in the terminal and use `cargo add <package>`.<br />
You can also add modules using `yarn nuxi module add <module>`, or if you have the CLI installed globally (recommended), use `nuxi module add <module>`. You can install Nuxt CLI globally using `npm install -g @nuxtjs/cli`.

To add plugins for Tauri, you can use `yarn tauri add <plugin>`. You can find a list of plugins at their documentation.

## Running
Running the program is very simple, just run `yarn tauri dev` and it'll be running. If you are not familiar with Nuxt or Tauri, take a look at their documentation.

Nuxt Documentation: https://nuxt.com/docs/getting-started/introduction<br />
Tauri Documentation: https://v2.tauri.app/start/
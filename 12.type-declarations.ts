(() => {
  console.log(process.env.USER);

  // declare const process: any; // type declaration: defines the "process" constant to be of type any; removing this declaration will cause a compiler error

  // declare is actually definition, not declaration, hence you cannot provide any implementation to it
  // declare const something = 123; // compiler error

  // declarations can sit in a separate file that has the extension .d.ts

  // before writing your own declarations, check open-source community first (e.g. the corresponding node types can be installed with npm install @types/node)
})();
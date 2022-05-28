(() => {
  const wait = (ms: number) => new Promise(res => setTimeout(res, ms));

  const someFunction = async () => {
    console.log("waiting");
    await wait(1000);
    console.log("1s");
    await wait(1000);
    console.log("2s");
  };

  const someOtherFunction = async () => {
    console.log("something");
  }

  const main = async () => {
    // sequential
    await someFunction();
    await someOtherFunction()

    // single thread parallel execution
    someFunction();
    someOtherFunction()
  };

  main();
})();

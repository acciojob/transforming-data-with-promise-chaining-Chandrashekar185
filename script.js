 document.getElementById("btn").addEventListener("click", () => {
      const one = Number(document.getElementById("ip").value);
      const output = document.getElementById("output");

      new Promise((resolve) => {
        setTimeout(() => {
          output.innerHTML = `Result: ${one}`;
          resolve(one);
        }, 2000);
      })
      .then((val) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const result = val * 2;
            output.innerHTML = `Result: ${result}`;
            resolve(result);
          }, 2000);
        });
      })
      .then((val) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const result = val - 3;
            output.innerHTML = `Result: ${result}`;
            resolve(result);
          }, 3000);
        });
      })
      .then((val) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const result = val - 2;
            output.innerHTML = `Result: ${result}`;
            resolve(result);
          }, 1000);
        });
      })
      .then((val) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const result = val / 2;
            output.innerHTML = `Result: ${result}`;
            resolve(result);
          }, 1000);
        });
      })
      .then((val) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const result = val + 10;
            output.innerHTML = `Final Result: ${result}`;
            resolve(result);
          }, 1000);
        });
      });
    });
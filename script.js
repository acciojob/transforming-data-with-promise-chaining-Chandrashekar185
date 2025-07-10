document.getElementById("btn").addEventListener("click", () => {
  const one = Number(document.getElementById("ip").value);
  const output = document.getElementById("output");

  new Promise((resolve) => {
    setTimeout(() => {
      output.innerHTML += `Result: ${one}<br>`;
      resolve(one);
    }, 2000); // First promise: 2 seconds
  })
  .then((val) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = val * 2; // Multiply by 2
        output.innerHTML += `Result: ${result}<br>`;
        resolve(result);
      }, 2000); // Second promise: 2 seconds
    });
  })
  .then((val) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = val - 3; // Subtract 3
        output.innerHTML += `Result: ${result}<br>`;
        resolve(result);
      }, 1000); // Third promise: 1 second
    });
  })
  .then((val) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = val / 2; // Divide by 2
        output.innerHTML += `Result: ${result}<br>`;
        resolve(result);
      }, 1000); // Fourth promise: 1 second
    });
  })
  .then((val) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = val + 10; // Add 10
        output.innerHTML += `Final Result: ${result}`;
        resolve(result);
      }, 1000); // Fifth promise: 1 second
    });
  });
});
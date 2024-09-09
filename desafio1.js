/*Parte 1 
function task1() {
  setTimeout(function() {
    console.log("task1");
  }, 1000); 
}

function task2() {
  setTimeout(function() {
    console.log("task2");
  }, 1000);
}

function task3() {
  setTimeout(function() {
    console.log("task3");
  }, 1000);
}

function mainCallback() {
  task1();
  task2();
  task3();
}

mainCallback();
*/

/*Parte 2 
function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("task1");
      resolve("task1 completed");
    }, 1000);
  });
}

function task2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("task2");
      resolve("task2 completed");
    }, 1000);
  });
}

function task3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("task3");
      resolve("task3 completed");
    }, 1000);
  });
}

function mainCallback() {
  Promise.all([task1(), task2(), task3()])
    .then((results) => {
      console.log("Todas las tareas han terminado:");
      console.log(results); 
    })
    .catch((error) => {
      console.error("Ocurrió un error:", error);
    });
}

mainCallback();

*/
/*Parte 3 
function task1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        console.log("task1");
        resolve("task1 completed");
      } catch (error) {
        reject("task1 failed");
      }
    }, 1000);
  });
}

function task2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        console.log("task2");
        resolve("task2 completed");
      } catch (error) {
        reject("task2 failed");
      }
    }, 1000);
  });
}

function task3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        console.log("task3");
        resolve("task3 completed");
      } catch (error) {
        reject("task3 failed");
      }
    }, 1000);
  });
}

async function mainAsync() {
  try {
    const result1 = await task1();
    console.log(result1);

    const result2 = await task2();
    console.log(result2);

    const result3 = await task3();
    console.log(result3);

    console.log("Todas las tareas han terminado");
  } catch (error) {
    console.error("Ocurrió un error:", error);
  }
}

mainAsync();

*/

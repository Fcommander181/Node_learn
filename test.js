/*

const n = "mariyoshio";

console.log(n);

const greet = (n) => {
  console.log(`hello , ${n}`);
};
*/

// Global Object is like the Window object in browser but doesnt have  for example DOM

/*
console.log(global);
global.setTimeout(() => {
  console.log("in the timeout");
  clearInterval(int);
}, 3000);

const int = setInterval(() => {
  console.log("in the interval");
}, 1000);
*/
// give the absolute path until it gets to current folder
console.log(__dirname);
// give the absolute path with the name of current filename
console.log(__filename);

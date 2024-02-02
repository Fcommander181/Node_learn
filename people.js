const people = ["yoshi", "ryu", "chun-li", "mario"];
const ages = [20, 25, 30, 35];
console.log(people);
// module.exports set the value of the file in case of importing it by another file it will return the value you
/*
module.exports = people;
*/
// to import more than one thing :
module.exports = {
  people,
  ages,
};

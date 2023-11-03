// let test = (one, two, three) => one * two * three;

// let test2 = (abid, nana = 10) => nana * abid;

// console.log(test2(10));

// var nt = "\n";

// var lala = `i am a web developer ${nt} I hate everybody ${nt} and my brothers `;
// console.log(lala);

// let my_fr = ["abid", "sahil", "murgichor"];

// my_fr.forEach ()=> (check) {
//   let nt = check.length;
//   console.log(nt);
// };

const friend = (myfrnd) => {
  const frieendlist = [];

  for (const abid of myfrnd) {
    if (myfrnd.length % 2 === 0) {
      frieendlist.push(abid);
    }
  }
  return frieendlist;
};

const myfrnd = ["abid", "zubayg", "nanai", "ratufl", "nananana"];
const murgifriend = friend(myfrnd);
console.log(murgifriend);

// const getFriendsWithEvenNames = (friends) => {
//   const evenNamedFriends = [];
//   for (const friend of friends) {
//     if (friend.length % 2 === 0) {
//       evenNamedFriends.push(friend);
//     }
//   }
//   return evenNamedFriends;
// };
// const friends = ["Alice", "Bob", "Carol", "Dave"];
// const evenNamedFriends = getFriendsWithEvenNames(friends);

// console.log(evenNamedFriends);

// Write an arrow function where it will do the following:
// a) It w                ill take an array where the array elements will be the name of your friends
// b) Check if the length of each element is even, push elements with even length to a new array and return the result.
// Print the result.

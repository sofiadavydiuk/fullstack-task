const getSortFunc = (sortedBy) => (userA, userB) => {
  let a = new Date(userA.joinDate.replace(" ", ""));
  let b = new Date(userB.joinDate.replace(" ", ""));

  if (sortedBy === "newest") {
    return a > b ? -1 : a < b ? 1 : 0;
  } else {
    return a > b ? 1 : a < b ? -1 : 0;
  }
};

const filterByTicketsCreated = (user) => {
  return user.ticketsCreated.length >= 5;
};

module.exports = { getSortFunc, filterByTicketsCreated };

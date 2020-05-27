// Sort by newest and oldest data

export const getSortFunc = (sortedBy) => (userA, userB) => {
  let a = new Date(userA.joinDate.replace(" ", ""));
  let b = new Date(userB.joinDate.replace(" ", ""));

  if (sortedBy === "newest") {
    return a > b ? -1 : a < b ? 1 : 0;
  } else {
    return a > b ? 1 : a < b ? -1 : 0;
  }
};

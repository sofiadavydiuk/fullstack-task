const findAverage = (users) => {
  let sumTickets = 0;
  let sumBackups = 0;

  const forEachFunction = (item, index) => {
    sumTickets = sumTickets + users[index].ticketsCreated.length;
    sumBackups = sumBackups + users[index].backups.length;
  };

  users.forEach(forEachFunction);

  const avBackups = sumBackups / users.length;
  const avTickets = sumTickets / users.length;

  const newUsers = {
    users: users,
    calculations: {
      averageTicketCreated: avBackups.toFixed(2),
      averageBackupsCreated: avTickets.toFixed(2),
    },
  };

  return JSON.stringify(newUsers);
};

exports.findAverage = findAverage;

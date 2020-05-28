const findAverage = (users) => {
  const averageScores = users.reduce(
    ({ sumTickets, sumBackups }, user) => {
      return {
        sumTickets: sumTickets + user.ticketsCreated.length,
        sumBackups: sumBackups + user.backups.length,
      };
    },
    { sumTickets: 0, sumBackups: 0 }
  );

  const { sumTickets, sumBackups } = averageScores;

  return {
    users: users,
    calculations: {
      averageTicketCreated: (sumBackups / users.length).toFixed(2),
      averageBackupsCreated: (sumTickets / users.length).toFixed(2),
    },
  };
};

exports.findAverage = findAverage;

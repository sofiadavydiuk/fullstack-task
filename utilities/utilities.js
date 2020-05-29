const findAverage = (users) => {
  return {
    users: users,
    calculations: calculateAverageScores(users),
  };
};

const calculateAverageScores = (users) => {
  const { sumTickets, sumBackups } = users.reduce(
    ({ sumTickets, sumBackups }, user) => {
      return {
        sumTickets: sumTickets + user.ticketsCreated.length,
        sumBackups: sumBackups + user.backups.length,
      };
    },
    { sumTickets: 0, sumBackups: 0 }
  );

  return {
    averageTicketCreated: Number((sumTickets / users.length).toFixed(2)),
    averageBackupsCreated: Number((sumBackups / users.length).toFixed(2)),
  };
};

module.exports = { calculateAverageScores, findAverage };

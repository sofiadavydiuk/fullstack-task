const { getSortFunc } = require("./Utilities");
const { filterByTicketsCreated } = require("./Utilities");

describe("Sort function: ", () => {
  const dates = [
    { joinDate: "2003-03-26T06:42:15 -01:00" },
    { joinDate: "2001-06-16T07:43:00 -02:00" },
    { joinDate: "2003-03-26T06:42:15 -01:00" },
    { joinDate: "2002-06-16T07:43:00 -02:00" },
    { joinDate: "1222-03-26T06:42:15 -01:00" },
    { joinDate: "2333-06-16T07:43:00 -02:00" },
  ];

  const newest = [
    { joinDate: "2333-06-16T07:43:00 -02:00" },
    { joinDate: "2003-03-26T06:42:15 -01:00" },
    { joinDate: "2003-03-26T06:42:15 -01:00" },
    { joinDate: "2002-06-16T07:43:00 -02:00" },
    { joinDate: "2001-06-16T07:43:00 -02:00" },
    { joinDate: "1222-03-26T06:42:15 -01:00" },
  ];

  const oldest = [
    { joinDate: "1222-03-26T06:42:15 -01:00" },
    { joinDate: "2001-06-16T07:43:00 -02:00" },
    { joinDate: "2002-06-16T07:43:00 -02:00" },
    { joinDate: "2003-03-26T06:42:15 -01:00" },
    { joinDate: "2003-03-26T06:42:15 -01:00" },
    { joinDate: "2333-06-16T07:43:00 -02:00" },
  ];

  test("should sort by newest", () => {
    expect(dates.sort(getSortFunc("newest"))).toEqual(newest);
  });

  test("should sort by oldest", () => {
    expect(dates.sort(getSortFunc("oldest"))).toEqual(oldest);
  });

  test("should sort by oldest with not expected param", () => {
    expect(dates.sort(getSortFunc("wrongString"))).toEqual(oldest);
  });
});

describe("Filter function: ", () => {
  const users = [
    {
      ticketsCreated: [
        {
          ticketID: "5ae33e08e4c72cb82d99f231",
          severity: 1,
          createdAt: "2010-09-14T10:06:39 -02:00",
        },
        {
          ticketID: "5ae33e081c6020ff43ea3d7a",
          severity: 4,
          createdAt: "2013-12-19T10:47:23 -01:00",
        },
        {
          ticketID: "5ae33e081047e617cdfc990a",
          severity: 1,
          createdAt: "2013-12-19T01:30:16 -01:00",
        },
      ],
    },
    {
      ticketsCreated: [
        {
          ticketID: "5ae33e0832a1928e0b4338c3",
          severity: 1,
          createdAt: "2013-10-14T11:34:15 -02:00",
        },
      ],
    },
    {
      ticketsCreated: [
        {
          ticketID: "5ae33e08a61c0379f113ee1c",
          severity: 3,
          createdAt: "2011-02-08T09:53:54 -01:00",
        },
        {
          ticketID: "5ae33e082f4e420c58b3c707",
          severity: 2,
          createdAt: "2018-02-04T08:15:11 -01:00",
        },
        {
          ticketID: "5ae33e084faeebd114ad5540",
          severity: 1,
          createdAt: "2015-09-16T08:30:30 -02:00",
        },
        {
          ticketID: "5ae33e08bfd93f70f7ab901c",
          severity: 4,
          createdAt: "2011-10-25T02:44:54 -02:00",
        },
        {
          ticketID: "5ae33e081b00123206519e3d",
          severity: 4,
          createdAt: "2016-05-29T03:21:49 -02:00",
        },
      ],
    },
    {
      ticketsCreated: [
        {
          ticketID: "5ae33e0896dca2d1b81b938f",
          severity: 4,
          createdAt: "2018-01-06T01:00:55 -01:00",
        },
        {
          ticketID: "5ae33e08e806585b61e0001c",
          severity: 3,
          createdAt: "2015-03-17T04:04:30 -01:00",
        },
        {
          ticketID: "5ae33e08a3bd3c83c89c63ef",
          severity: 3,
          createdAt: "2017-04-07T04:41:46 -02:00",
        },
      ],
    },
  ];

  const moreThen5 = [
    {
      ticketsCreated: [
        {
          ticketID: "5ae33e08a61c0379f113ee1c",
          severity: 3,
          createdAt: "2011-02-08T09:53:54 -01:00",
        },
        {
          ticketID: "5ae33e082f4e420c58b3c707",
          severity: 2,
          createdAt: "2018-02-04T08:15:11 -01:00",
        },
        {
          ticketID: "5ae33e084faeebd114ad5540",
          severity: 1,
          createdAt: "2015-09-16T08:30:30 -02:00",
        },
        {
          ticketID: "5ae33e08bfd93f70f7ab901c",
          severity: 4,
          createdAt: "2011-10-25T02:44:54 -02:00",
        },
        {
          ticketID: "5ae33e081b00123206519e3d",
          severity: 4,
          createdAt: "2016-05-29T03:21:49 -02:00",
        },
      ],
    },
  ];

  test("should filter by more than 5 tickets created", () => {
    expect(users.filter(filterByTicketsCreated)).toEqual(moreThen5);
  });
});

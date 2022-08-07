const data = {
  summary: [
    {
      title: "Ticket Sales",
      subtitle: "Total sales today",
      value: "$1.000",
      percent: 70,
    },
    {
      title: "Tickets Booked",
      subtitle: "Total bought tickets today",
      value: "1500",
      percent: 49,
    },
    {
      title: "Buses",
      subtitle: "Buses to departure next",
      value: "11",
      percent: 17,
    },
    {
      title: "Students",
      subtitle: "Total students registered",
      value: "2345",
      percent: 55,
    },
  ],
  studentSummary: {
    title: "Students",
    value: "৯৪২৫ জন",
    chartData: {
      labels: ["May", "Jun", "July", "Aug", "May", "Jun", "July", "Aug"],
      data: [300, 300, 280, 380, 200, 300, 280, 350],
    },
  },
  overall: [
    {
      value: "30K",
      title: "Tickets sales",
    },
    {
      value: "30K",
      title: "Students",
    },
    {
      value: "41",
      title: "Routes",
    },
    {
      value: "62",
      title: "Buses",
    },
  ],
  usageByChannel: [
    {
      title: "Direct",
      value: 70,
    },
    {
      title: "External search",
      value: 40,
    },
    {
      title: "Referal",
      value: 60,
    },
    {
      title: "Social",
      value: 30,
    },
  ],
  studentsByMonths: {
    labels: [
      "Baipayl",
      "Uttara",
      "Dhanmondi",
      "Narayanganj",
      "Dhamrai",
      "Kashimpur",
      "Savar",
      "Tongi",
      "Jamgora",
    ],
    data: [250, 200, 300, 280, 100, 220, 310, 190, 200, 120, 250, 350],
    buses: [3, 1, 4, 2, 5, 1, 4, 2, 1, 4, 5, 1],
  },
};

export default data;

// SORT BDAY
const sortBdays = (bdays) => {

  // GET CURRENT MONTH
  const currentMonth = new Date().getMonth();

  // DEFINE MONTH-LABELS
  const monthLabels = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  // SETUP MONTHS
  const months = monthLabels.reduce((accumulator, month) => {

    // ADD MONTH TO OBJECT
    accumulator[month] = [];

    // RETURN ACCUMULATOR
    return accumulator;

  }, {});

  // GROUP BDAY BY MONTH
  bdays.forEach(bday => {

    // GET MONTH OF BDAY
    const month = new Date(bday.birthDate).getMonth(); // getMonth() returns 0 for January, 1 for February, etc.

    // MAP THE MONTH-LABEL
    const monthLabel = monthLabels[month];

    // APPEND BDAY
    months[monthLabel].push(bday);

  });

  // SORT BDAYS IN MONTHS
  for (const month in months) {
    months[month].sort((a, b) => new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate());
  }

  // CREATE AN ARRAY OF MONTH OBJECTS
  const sortedBdays = [...monthLabels.slice(currentMonth), ...monthLabels.slice(0, currentMonth)].map(month => ({
    label: month,
    events: months[month]
  }));

  // RETURN SORTED-BDAYS
  return sortedBdays

};


// EXPORTS
export {
  sortBdays,
};

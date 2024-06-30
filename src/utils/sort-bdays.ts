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
    const month = new Date(bday.birthdate).getMonth(); // getMonth() returns 0 for January, 1 for February, etc.

    // MAP THE MONTH-LABEL
    const monthLabel = monthLabels[month];

    // APPEND BDAY
    months[monthLabel].push(bday);

  });

  // SORT BDAYS IN MONTHS
  for (const month in months) {
    months[month].sort((a, b) => new Date(a.date).getDate() - new Date(b.date).getDate());
  }

  // DEFINE CORRECT ORDER OF MONTHS
  const sortedBdays = [...monthLabels.slice(currentMonth), ...monthLabels.slice(0, currentMonth)].reduce((acc, month) => {

    // SET CORRECT MONTH
    acc[month] = months[month];

    // RETURN ACCUMULATOR
    return acc;

  }, {});

  // RETURN SORTED-BDAYS
  return sortedBdays;

};

// EXPORTS
export {
  sortBdays,
};

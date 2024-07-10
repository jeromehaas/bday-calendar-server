// IMPORT NECESSARY FUNCTIONS FROM DATE-FNS
import { format, addMonths, isWithinInterval, parseISO, startOfMonth, endOfMonth } from 'date-fns';

// FILTER CURRENT BDAYS
const filterMonthlyBdays = (bdays) => {

  // GET CURRENT DATE
  const today = new Date();

  // GET START AND END DATE OF NEXT MONTH
  const startNextMonth = startOfMonth(addMonths(today, 1));
  const endNextMonth = endOfMonth(startNextMonth);

  // FILTER
  const monthlyBdays = bdays.filter((bday) => {

    // PARSE BDAY
    const bdayDate = parseISO(bday.birthdayDate);

    // CHECK FOR CURRENT BDAY
    if (isWithinInterval(bdayDate, {start: startNextMonth, end: endNextMonth})) {
      return bday;
    }

  });

  // RETURN
  return monthlyBdays;

};

// EXPORTS
export {
  filterMonthlyBdays,
};
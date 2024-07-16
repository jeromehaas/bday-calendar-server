// FILTER CURRENT BDAYS
import { addDays, format, isWithinInterval, parseISO } from 'date-fns';

// FILTER CURRENT BDAYS
const filterWeeklyBdays = (bdays) => {

  // GET CURRENT DATE
  const today = new Date();

  // GET DATE 7 DAYS FROM NOW
  const weekFromNow = addDays(today, 7);
  const endDate = format(weekFromNow, 'yyyy-MM-dd');

  // FILTER
  const weeklyBdays = bdays.filter((bday) => {

    // PARSE BDAY
    const bdayDate = parseISO(bday.birthdayDate);

    // CHECK FOR CURRENT BDAY
    if (isWithinInterval(bdayDate, { start: today, end: parseISO(endDate) })) {
      return bday;
    }

  });

  // RETURN
  return weeklyBdays;

};

// EXPORTS
export {
  filterWeeklyBdays,
};
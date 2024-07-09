// FILTER CURRENT BDAYS
import { format } from 'date-fns';

// FILTER CURRENT BDAYS
const filterDailyBdays = (bdays) => {

  // GET CURRENT DATE
  const today = new Date();
  const currentDate = format(today, 'yyyy-MM-dd');

  // FILTER
  const dailyBdays = bdays.filter((bday) => {

    // CHECK FOR CURRENT BDAY
    if (bday.birthdayDate === currentDate) {
      return bday;
    }

  });

  // RETURN
  return dailyBdays;

};

// EXPORTS
export {
  filterDailyBdays,
};
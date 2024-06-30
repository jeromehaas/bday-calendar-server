// IMPORTS
import { differenceInYears, differenceInDays, addYears, parseISO } from 'date-fns';

// EXTEND BDAY
const extendBday = (bday) => {

  // GET BIRTHDATE AND CURRENT DATE
  const birthdate = parseISO(bday.birthdate);
  const today = new Date();

  // CALCULATE CURRENT AGE
  const currentAge = differenceInYears(today, birthdate);

  // CALCULATE NEXT BDAY
  let nextBday;
  nextBday = addYears(birthdate, currentAge + 1);
  if (differenceInDays(nextBday, today) < 0) {
    nextBday = addYears(birthdate, currentAge + 2);
  }

  // CALCULATE REMAINING DAYS
  const remainingDays = differenceInDays(nextBday, today);

  // EXTEND BDAY
  const extendedBday = {
    ...bday,
    currentAge: currentAge,
    remainingDays: remainingDays,
  };

  // RETURN EXTENDED BDAY
  return extendedBday;
};

// EXTEND BDAYS
const extendBdays = (bdays) => {

  // EXTEND BDAYS
  const extendedBdays = bdays.map((bday) => {

    // EXTEND BDAY
    const extendedBday = extendBday(bday);

    // RETURN EXTENDED BDAY
    return extendedBday;

  });

  // RETURN EXTENDED BDAYS
  return extendedBdays;

};

// EXPORTS
export {
  extendBdays,
  extendBday,
};
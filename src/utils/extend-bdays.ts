// IMPORTS
import { addYears, differenceInDays, differenceInYears, format, parseISO } from 'date-fns';

// EXTEND BDAY
const extendBday = (bday) => {

  // GET BIRTHDATE AND CURRENT DATE
  const birthDate = parseISO(bday.birthDate);
  const today = new Date();

  // CALCULATE CURRENT AGE
  const currentAge = differenceInYears(today, birthDate);

  // CALCULATE NEXT BDAY
  let nextBday;
  nextBday = addYears(birthDate, currentAge + 1);
  if (differenceInDays(nextBday, today) < 0) {
    nextBday = addYears(birthDate, currentAge + 2);
  }

  // CALCULATE NEXT BDAY-DATE
  const birthdayDate = format(nextBday, 'yyyy-MM-dd');

  // CALCULATE REMAINING DAYS
  const remainingDays = differenceInDays(nextBday, today);

  // EXTEND BDAY
  const extendedBday = {
    ...bday,
    currentAge: currentAge,
    remainingDays: remainingDays,
    birthdayDate: birthdayDate,
  };

  // RETURN EXTENDED BDAY
  return extendedBday;
};

// EXTEND BDAYS
const extendBdays = (bdays) => {

  // SET INDEX AND MINIMUM REMAINING DAYS
  let nextBdayIndex = 0;
  let minRemainingDays = Infinity;

  // EXTEND BDAYS
  const extendedBdays = bdays.map((bday) => {

    // EXTEND BDAY
    const extendedBday = extendBday(bday);


    // RETURN EXTENDED BDAY
    return extendedBday;

  });

  // FIND NEXT BDAY
  extendedBdays.forEach((bday, index) => {

    // BY DEFAULT NEXT BDAY ID FALSE
    bday.isNextBday = false;

    // IF REMAINING DAYS IS SMALLER UPDATE INDEX
    if (bday.remainingDays < minRemainingDays) {
      minRemainingDays = bday.remainingDays;
      nextBdayIndex = index;
    }

  });

  // MARK NEXT BDAY
  extendedBdays[nextBdayIndex].isNextBday = true;

  // RETURN EXTENDED BDAYS
  return extendedBdays;

};

// EXPORTS
export {
  extendBdays,
  extendBday,
};
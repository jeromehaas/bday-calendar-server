// IMPORTS
import { addYears, differenceInDays, differenceInYears, format, parseISO } from 'date-fns';

// EXTEND BDAY
const extendBday = (bday) => {

  // GET BIRTHDATE AND CURRENT DATE
  const today = new Date();

  if (!bday.birthDate) return;
  const birthDate = parseISO(bday.birthDate);
  const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  // CALCULATE CURRENT AGE
  const currentAge = differenceInYears(today, birthDate);

  // CALCULATE NEXT BDAY
  const isTodayBirthday = todayDate.getTime() === new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate()).getTime();

  // DEFINE NEXT AGE
  let nextAge = currentAge + 1;

  // GET NEXT BDAY
  const nextBday = isTodayBirthday ? todayDate : addYears(birthDate, nextAge);

  // CHECK FOR CURRENT BDAY
  if (!isTodayBirthday && differenceInDays(nextBday, today) < 1) nextAge += 1;

  // CALCULATE NEXT BDAY-DATE
  const birthdayDate = format(nextBday, 'yyyy-MM-dd');

  // CALCULATE REMAINING DAYS
  const remainingDays = isTodayBirthday ? 0 : differenceInDays(nextBday, today);

  // EXTEND BDAY
  const extendedBday = {
    ...bday,
    currentAge: currentAge,
    nextAge: isTodayBirthday ? currentAge : nextAge,
    remainingDays: remainingDays,
    birthdayDate: birthdayDate,
    nextBday: nextAge,
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

// FIND NEXT BDAY
const markNextBday = (bdays) => {

  // SET MINIMUM REMAINING DAYS
  let minRemainingDays = Infinity;

  // FIND NEXT BDAY
  bdays.forEach((bday) => {

    // IF REMAINING DAYS IS SMALLER UPDATE INDEX
    if (bday.remainingDays < minRemainingDays) {
      minRemainingDays = bday.remainingDays;
    }

  });

  // MAEK BDAYS
  bdays.forEach((bday) => {
    bday.isNextBday = bday.remainingDays === minRemainingDays;
  });

  // RETURN EXTENDED BDAYS
  return bdays;

};

// EXPORTS
export {
  markNextBday,
};


export const getCurrentMonth = () =>
  (new Date().getMonth() + 1).toString().padStart(2, "0");

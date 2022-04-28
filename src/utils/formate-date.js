const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
const formatDate = (date) => {
  const temp = date.split("/");
  const d = temp[0] < 9 ? `0${temp[0]}` : temp[0];
  const mon = months[temp[1] - 1];
  return `${d} ${mon}, ${temp[2]}`;
};
export default formatDate;

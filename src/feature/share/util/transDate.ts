import dayjs from 'dayjs';

const transDate = (date: Date | string) => {
  return dayjs(date).format('YYYY. MM. DD');
};
export default transDate;

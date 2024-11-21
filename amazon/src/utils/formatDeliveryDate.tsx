// 날짜를 "00월 00일 0요일" 형식으로 변환하는 함수
const formatDeliveryDate = (dateString: string) => {
  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = daysOfWeek[date.getDay()]; // 요일 인덱스 가져오기

  return `${month}월 ${day}일 ${dayOfWeek}요일`;
};

export default formatDeliveryDate;

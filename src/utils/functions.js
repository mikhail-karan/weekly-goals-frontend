export function getMonday(d){
  d = new Date(d);
  let day = d.getDay(),
  diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
  return new Date(d.setDate(diff)).toDateString();
}

export function getSunday(d){
  d = new Date(d);
  let day = d.getDay(),
  diff = d.getDate() +(7-day) + (day == 0 ? -7:0); // adjust when day is sunday
  return new Date(d.setDate(diff)).toDateString();
}

export function daysLeft(){
  const _today = new Date().getDay()
  if (_today === 0){
    return "1 day left" 
  }
  else {
    return (8 - _today) + " days left"
  }
}
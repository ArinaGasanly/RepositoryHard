const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const todayDay = new Date();


for (let i = 0, len = week.length; i < len; i++) {

  let html = week[i]; 
  if (i === +todayDay.getDay()-1) html = html.italics();
  else if (i > 4) html = html.bold(); 

  const div = document.createElement('div');
  div.innerHTML = html;
  document.body.appendChild(div);

  }
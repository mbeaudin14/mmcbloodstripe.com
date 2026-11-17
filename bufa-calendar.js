const calendarYear = 2027;
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const events = [
  [0, "9", "Eagle Riders 3260 - Frozen Feathers Party", "12–4pm · Eagles Lodge"],
  [0, "16", "Street Envy MC - Lunch Plate Fundraiser", "Time and location TBA"],
  [0, "25", "BUFA Meeting", ""],
  [0, "30", "Pikes Peak Bikers Church – Pancake Breakfast", "8–10am"],
  [1, "6–7", "Motorcycle Expo in Denver", ""],
  [1, "6", "Street Envy MC – Mardi Gras Party", "8pm · TBA"],
  [1, "20", "Infidels MC – 4th Annual Feed The Vets Food Drive", "TBA"],
  [1, "22", "BUFA Meeting", ""],
  [1, "27", "Geezers MC – Geezer Party", "TBA"],
  [2, "13", "Infidels MC – Annual Pig Roast", "5pm · CH"],
  [2, "20–21", "Colorado Springs Swap Meet", ""],
  [2, "20", "SOS MC - Swap Meet Party", "5pm · CH"],
  [2, "29", "BUFA Meeting", ""],
  [3, "3", "ALR Post 209 – Spring Fun Run", "10am · AL Post 209"],
  [3, "3", "Sober Souls MC – Rep Your City 9", "1–4pm · PPHD"],
  [3, "10", "B.A.C.A. Pikes Peak Chapter - 18th Anniversary Party", "7pm · TBD"],
  [3, "17", "SOS MC – 34th Annual Fallen Brothers Run", "11am · CH"],
  [3, "18", "Vets4Vets – Military Order Of Purple Heart Poker Run", "TBA"],
  [3, "25", "VFW Warrior D5 – Fallen Warriors Ride", "11am · VFW Post 101"],
  [3, "26", "BUFA Meeting", ""],
  [4, "1", "Soldiers For Jesus MC – 34th Anniversary Party", "1–5pm · TBA"],
  [4, "2", "Vets4Vets – Spring Party", "Noon–5pm · TBA · Includes Meat Freezer Raffle"],
  [4, "2", "Sober Souls MC – 4th Annual Dice Run", "Noon · 3D Cigar Lounge"],
  [4, "8", "Veterans MC – Party For The Pig", "3pm · CH"],
  [4, "8", "Street Envy MC – 18th Anniversary Party", "8pm · TBD"],
  [4, "15", "Organized Generals MC – 2nd Annual Brews, Bikes & BBQ", "2pm · CH"],
  [4, "16", "Geezers MC – Pancake Breakfast", "9am–noon · TBA"],
  [4, "22", "Silent Chaos MC – Search For Chaos Run", "Noon · All-day event"],
  [4, "23", "VFW Warrior D5 – 22nd Spring Dart and Dice Run", "10am · VFW Post 101"],
  [4, "24", "BUFA Meeting", "One week earlier due to Memorial Day"],
  [4, "29", "Pikes Peak Bikers Church – Pancake Breakfast", "8–10am"],
  [4, "29", "Infidels MC – 5th Annual PTSD Awareness", "11am · PPHD"],
  [5, "5", "Pikes Peak Bikers Church – 20th Blessing Of The Bikes", "8am"],
  [5, "5", "ALR Post 2008 – 13th Annual Falcon Freedom Poker Run", "10am · Red’s American Grill"],
  [5, "5", "ALR Post 38 – Fallen Brothers & Sisters Run", "10am · AL Post 38"],
  [5, "6", "37th Annual United Run", ""],
  [5, "12", "ALR Post 5 - PFC Floyd Lindstrom Poker Run", "9am · AL Post 5"],
  [5, "13", "B.A.C.A. – 2nd Annual Awareness Run", "10am · TBD"],
  [5, "26", "Marines MC – 5th Annual Marine Corps Birthday Ball Poker Run", "11am · Mad Hatter"],
  [5, "27", "ALR Post 209 - High Country Memorial Run", "10am · AL Post 209"],
  [5, "27", "Geezers MC – 3nd Annual Poker Run", "10am · TBD"],
  [5, "28", "BUFA Meeting", ""],
  [6, "10", "Veterans MC – Independence Run", "10am"],
  [6, "10", "ALR Post 38 – 13th Annual 38 Special Poker Run", "9am · AL Post 38"],
  [6, "17", "SOS MC - Night Time Poker Run", "5pm · Veterans MC CH"],
  [6, "18", "Soldiers For Jesus MC - Annual Family Picnic", "11am · Palmer Park Pavillion"],
  [6, "24", "Street Soldierz MC – Back To School Fundraiser", "TBA · CH"],
  [6, "26", "BUFA Meeting", ""],
  [6, "31", "Pikes Peak Bikers Church – Pancake Breakfast", "8–10am"],
  [6, "31", "CVMA 3-5 – 22nd Annual Open Range Run", "10am · VFW 5521 Calhan"],
  [6, "31", "Street Envy MC – Back To School Fundraiser & Bike Wash", "2pm · PPHD"],
  [7, "7", "Infidels MC – 14th Anniversary Party", "7pm · CH"],
  [7, "20–21", "Salute To American Veterans Rally – Cripple Creek", ""],
  [7, "20", "CVMA – 24th Annual High Altitude Poker Run", "10am · VFW Woodland Park"],
  [7, "21", "Vets4Vets – 40th Annual POW/MIA Recognition Ride", "Registration 7:30am · Woodland Park HS"],
  [7, "21", "Geezers MC – 22nd Anniversary Party", "3pm · TBD"],
  [7, "28", "Geezers MC – 22nd Anniversary Party", "TBA · Not a duplicate; more info to follow"],
  [7, "30", "BUFA Meeting", ""],
  [8, "4", "Organized General MC – 13th Anniversary Party", "3pm"],
  [8, "6", "ALR Post 2008 – 11th Annual Stock The Pantry Run", "10am · Red’s American Grill"],
  [8, "11", "CVMA 3-2 - 9th Mission To Zero Poker Run", "9am · Pikes Peak Indian"],
  [8, "12", "27th Annual BUFA 9/11 Remembrance Party", ""],
  [8, "17", "Street Soldierz MC – Anniversary Meet ‘n Greet", "TBA"],
  [8, "18", "5th Annual El Mariachi Vicla Run", "KSU 10am · PPHD"],
  [8, "18", "ALR Post 209 – Centennial Poker Run", "10am · AL Post 209"],
  [8, "18", "Street Soldierz MC – 21th Anniversary Party", "TBA"],
  [8, "19", "VFW Warriors D5 – End Of Summer Run", "10am · VFW Post 101"],
  [8, "24", "ALR Post 5 – End Of Summer Steak Night", "6pm · AL Post 5"],
  [8, "25", "Sober Souls MC – Rep Your City 10", "Noon–3pm · PPHD"],
  [8, "25", "SOS MC - End Of Summer Party", "3pm"],
  [8, "26", "ALR Post 209 - Neal Thomas Jr Memorial Ride", "9am · AL Post 209"],
  [8, "26", "Vets4Vets – End Of Summer Party", "Noon–5pm · TBA"],
  [8, "27", "BUFA Meeting", ""],
  [9, "2", "Street Envy MC – Breast Cancer Awareness Run and Booby Dash", "9am · PPHD"],
  [9, "2", "Silent Chaos MC – Unleashed Chaos Party", "2pm · SONS CH"],
  [9, "3", "40th Annual High-Country Toy Run", "KSU 11am · PPHD"],
  [9, "9", "CVMA 3-2 - 13th Annual Ghoulfest", "10am · TBA"],
  [9, "16", "Organized Generals MC – 11th Annual Feed The Families Party", "2pm · CH"],
  [9, "23", "Infidels MC – Halloween Party / Celebration Of Foghorn", "7pm · CH"],
  [9, "30", "Pikes Peak Bikers Church – Pancake Breakfast", "8–10am"],
  [9, "30", "Street Envy MC – Halloween Party", "8pm · TBD"],
  [10, "13", "BUFA Calendar Meeting", "1pm · Eagles Lodge"],
  [10, "14", "Street Envy MC – 11th Annual Fowls For Families Fundraiser", "10am–2pm · TBA"],
  [10, "19", "Infidels MC – Food Drive", "7pm · CH · During Open House"],
  [11, "3", "Organized Generals MC – Chili Cook-Off", "7pm · CH"],
  [11, "4", "SOS MC – 18th Annual Turkey Fry & Toy Drive", "2pm · CH"],
  [11, "4", "Veterans MC - Fallen Brothers Dinner", "5:30pm · CH"],
  [11, "11", "Infidels MC – Ham For The Holidays Fundraiser", "Time TBA"]
];

const monthNav = document.getElementById("month-nav");
const calendar = document.getElementById("calendar");
document.getElementById("calendar-year").textContent = calendarYear;
const groups = months.map((month, index) => {
  const section = document.createElement("section");
  section.className = "month-section";
  section.id = `month-${index + 1}`;
  section.setAttribute("aria-labelledby", `month-heading-${index + 1}`);

  const heading = document.createElement("h2");
  heading.className = "month-heading";
  heading.id = `month-heading-${index + 1}`;
  heading.textContent = month;
  section.append(heading);

  const list = document.createElement("div");
  list.className = "event-list";
  section.append(list);
  calendar.append(section);

  const link = document.createElement("a");
  link.href = `#month-${index + 1}`;
  link.textContent = month.slice(0, 3);
  link.setAttribute("aria-label", `Jump to ${month}`);
  monthNav.append(link);

  return list;
});

const orderedEvents = events
  .map((event, index) => ({ event, index }))
  .sort((left, right) =>
    left.event[0] - right.event[0] ||
    Number.parseInt(left.event[1], 10) - Number.parseInt(right.event[1], 10) ||
    Number(right.event[4] === true) - Number(left.event[4] === true) ||
    left.index - right.index
  );

for (const { event } of orderedEvents) {
  const [month, day, title, detail, starred = false] = event;
  const article = document.createElement("article");
  article.className = starred ? "event priority" : "event";

  const date = document.createElement("div");
  date.className = "event-date";
  date.textContent = day;
  article.append(date);

  const info = document.createElement("div");
  const heading = document.createElement("h3");
  heading.className = "event-title";
  if (starred) {
    const mark = document.createElement("span");
    mark.className = "priority-mark";
    mark.setAttribute("aria-label", "BUFA calendar meeting priority");
    mark.textContent = "* ";
    heading.append(mark);
  }
  heading.append(document.createTextNode(title));
  info.append(heading);
  if (detail) {
    const description = document.createElement("p");
    description.className = "event-detail";
    description.textContent = detail;
    info.append(description);
  }
  article.append(info);
  groups[month].append(article);
}

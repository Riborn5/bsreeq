const members = [
  {
    name: "Faisal Alali",
    image: "https://via.placeholder.com/150?text=Faisal+Alali",
    major: "Computer Science",
    degree: "Bachelor",
    startingYear: 2018,
  },
  {
    name: "Faris Alnzlaoy",
    image: "/images/faris man.JPG",
    major: "Software Engineering",
    degree: "Bachelor",
    startingYear: 2018,
  },
  {
    name: "Tarek Aljawi",
    image: "https://via.placeholder.com/150?text=Tarek+Aljawi",
    major: "Software Engineering",
    degree: "Bachelor",
    startingYear: 2018,
  },
  {
    name: "Abdulhadi Sidam",
    image: "/images/abdulhadi 83ady.JPG",
    major: "Mechanical Engineering",
    degree: "Bachelor",
    startingYear: 2017,
  },
  {
    name: "Abdulkarim Alsurki",
    image: "https://via.placeholder.com/150?text=Abdulkarim+Alsurki",
    major: ".",
    degree: ".",
    startingYear: 2019,
  },
  {
    name: "Abdullah Alfaisal",
    image: "/images/Abdullah in 4k.JPG",
    major: "Electrical Engineering",
    degree: "Bachelor",
    startingYear: 2016,
  },
  {
    name: "Abdulmohsen Bin Rasheed",
    image: "https://via.placeholder.com/150?text=Abdulmohsen+Bin+Rasheed",
    major: "Aerospace Engineering",
    degree: "Bachelor",
    startingYear: 2019,
  },
  {
    name: "Abdulrahman Azhar",
    image: "https://via.placeholder.com/150?text=Abdulrahman+Azhar",
    major: "Software Engineering",
    degree: "Bachelor",
    startingYear: 2018,
  },
  {
    name: "Ahmad Al Qanber",
    image: "https://via.placeholder.com/150?text=Ahmad+Al+Qanber",
    major: "Computer Engineering",
    degree: "Bachelor",
    startingYear: 2018,
  },
  {
    name: "Ahmad Alzhrani",
    image: "https://via.placeholder.com/150?text=Ahmad+Alzhrani",
    major: "Computer Engineering",
    degree: "Bachelor",
    startingYear: 2019,
  },
  {
    name: "Ahmed Al-Attas",
    image: "/images/Ahmad Escobar.JPG",
    major: "Accounting",
    degree: "Bachelor",
    startingYear: 2019,
  },
  {
    name: "Dhiaaddin Hamidaddin",
    image: "https://via.placeholder.com/150?text=Dhiaaddin+Hamidaddin",
    major: "Software Engineering",
    degree: "Bachelor",
    startingYear: 2019,
  },
  {
    name: "Faisal Hijazi",
    image: "https://via.placeholder.com/150?text=Faisal+Hijazi",
    major: "Computer Engineering",
    degree: "Bachelor",
    startingYear: 2017,
  },
  {
    name: "Hassan Alobaid",
    image: "https://via.placeholder.com/150?text=Hassan+Alobaid",
    major: "Computer Science",
    degree: "Bachelor",
    startingYear: 2019.5,
  },
  {
    name: "Ismail Hawsawi",
    image: "https://via.placeholder.com/150?text=Ismail+Hawsawi",
    major: "Computer Engineering",
    degree: "Bachelor",
    startingYear: 2020,
  },
  {
    name: "Mansour Alsharif",
    image: "https://via.placeholder.com/150?text=Mansour+Alsharif",
    major: "Geophysics",
    degree: "Bachelor",
    startingYear: 2018,
  },
  {
    name: "Miraan Alkatib",
    image: "https://via.placeholder.com/150?text=Miraan+Alkatib",
    major: "Computer Engineering",
    degree: "Bachelor",
    startingYear: 2018,
  },
  {
    name: "Mohammad Alharbi",
    image: "/images/Mohammad D Luffy.JPG",
    major: "Software Engineering",
    degree: "Bachelor",
    startingYear: 2019,
  },
  {
    name: "Mohammed Almodhhi",
    image: "https://via.placeholder.com/150?text=Mohammed+Almodhhi",
    major: "Electrical Engineering",
    degree: "Masters",
    startingYear: 2017,
  },
  {
    name: "Mohammed Almuallimi",
    image: "/images/Mohammad almualimi.JPG",
    major: "Software Engineering",
    degree: "Bachelor",
    startingYear: 2018,
  },
  {
    name: "Osama Bamardouf",
    image: "https://via.placeholder.com/150?text=Osama+Bamardouf",
    major: "Management Information Systems",
    degree: "Bachelor",
    startingYear: 2018,
  },
  {
    name: "Raiyan Banjer",
    image: "https://via.placeholder.com/150?text=Raiyan+Banjer",
    major: "Software Engineering",
    degree: "Bachelor",
    startingYear: 2018,
  },
  {
    name: "Rashed Almani",
    image: "https://via.placeholder.com/150?text=Rashed+Almani",
    major: "Software Engineering",
    degree: "Bachelor",
    startingYear: 2020,
  },
  {
    name: "Redha Kattoa",
    image: "https://via.placeholder.com/150?text=Redha+Kattoa",
    major: "Management Information Systems",
    degree: "Bachelor",
    startingYear: 2016,
  },
  {
    name: "Taha Al-Kazem",
    image: "/images/Taha the one and only.JPG",
    major: "Electrical Engineering",
    degree: "Bachelor",
    startingYear: 2017,
  },
  {
    name: "Abdulrahman Almulla",
    image: "https://via.placeholder.com/150?text=Abdulrahman+Almulla",
    major: ".",
    degree: ".",
    startingYear: 2018,
  },
  {
    name: "Saeed Alghamdi",
    image: "https://via.placeholder.com/150?text=Saeed+Alghamdi",
    major: ".",
    degree: ".",
    startingYear: 2018,
  },
  {
    name: "Ryan Alzahrani",
    image: "/images/Ryan angelo.JPG",
    major: "Chemical Engineering",
    degree: "Bachelor",
    startingYear: 2022,
  },
  {
    name: "Salem Al-Saqaf",
    image: "/images/Salem last piece.JPG",
    major: "Electrical Engineering",
    degree: "Bachelor",
    startingYear: 2018,
  },
  // Add more members to the array
];

class Member {
  constructor({ name, image, major, degree, startingYear }) {
    this.name = name;
    this.image = image;
    this.major = major !== '.' ? major : 'N/A';
    this.degree = degree !== '.' ? degree : 'N/A';
    this.startingYear = startingYear;
  }

  createMemberCard() {
    const card = createElement('div', 'card');
    card.innerHTML = `
      <img src="${this.image}" alt="Profile Picture">
      <h2 class="name-text">${this.name}</h2> <!-- Added class here -->
      <div class="dates-major">
        <span>Starting Year: ${this.startingYear}</span>
      </div>
      <div class="major-box major-text" data-major="${this.major}">${this.major}</div> <!-- And here -->
      <div class="degree-box ${this.degree.toLowerCase()}">${this.degree}</div>
    `;
    card.addEventListener('click', () => showModal(this));
    return card;
  }
}

const membersList = document.getElementById('members-list');
const searchNameInput = document.getElementById('search-name');
const searchMajorInput = document.getElementById('search-major');
const searchStartingYearInput = document.getElementById('search-starting-year');

function showModal(member) {
  document.getElementById('modal-name').textContent = member.name;
  document.getElementById('modal-image').src = member.image;
  document.getElementById('modal-major').textContent = `Major: ${member.major}`;
  document.getElementById('modal-degree').textContent = `Degree: ${member.degree}`;
  document.getElementById('modal-starting-year').textContent = `Starting Year: ${member.startingYear}`;
  document.getElementById('modal').style.display = 'block';
}

document.getElementById('close-btn').addEventListener('click', () => {
  document.getElementById('modal').style.display = 'none';
});

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function displayMembers(membersData) {
  membersList.innerHTML = '';
  membersData.sort((a, b) => a.name.localeCompare(b.name))
    .map(memberData => new Member(memberData))
    .forEach(member => membersList.appendChild(member.createMemberCard()));
}

function init() {
  populateMajorFilter();
  setupEventListeners();
  displayMembers(members);
}

function setupEventListeners() {
  searchNameInput.addEventListener('input', filterMembers);
  searchMajorInput.addEventListener('change', filterMembers);
  searchStartingYearInput.addEventListener('input', filterMembers);
}

function populateMajorFilter() {
  const majors = [...new Set(members.map(member => member.major))];
  searchMajorInput.innerHTML = majors.map(major => `<option value="${major}">${major}</option>`).join('');
}

function filterMembers() {
  const searchName = searchNameInput.value.toLowerCase();
  const searchMajor = searchMajorInput.value;
  const searchStartingYear = searchStartingYearInput.value;
  const filteredMembers = members.filter(member => 
    matchesFilter(member, searchName, searchMajor, searchStartingYear));
  displayMembers(filteredMembers);
}

function matchesFilter(member, searchName, searchMajor, searchStartingYear) {
  return member.name.toLowerCase().includes(searchName) &&
         (!searchMajor || member.major === searchMajor) &&
         (!searchStartingYear || member.startingYear === parseInt(searchStartingYear));
}

document.addEventListener('DOMContentLoaded', init);

function adjustFontSize(element) {
  let length = element.textContent.length;

  if (length > 20) {
    element.style.fontSize = '80%';
  } else if (length > 25) {
    element.style.fontSize = '70%';
  } // ... Continue for other lengths
}

// Adjust the font size after member card creation:
const majorBox = card.querySelector('.major-box');
const degreeBox = card.querySelector('.degree-box');

adjustFontSize(majorBox);
adjustFontSize(degreeBox);

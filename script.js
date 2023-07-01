const members = [
  {
    name: "John Doe",
    image: "https://via.placeholder.com/150",
    major: "Computer Science",
    degree: "Bachelor",
    startingYear: 2019,
  },
  {
    name: "Jane Smith",
    image: "https://via.placeholder.com/150",
    major: "Electrical Engineering",
    degree: "Masters",
    startingYear: 2018,
  },
  // Add more members to the array
];

const membersList = document.getElementById("members-list");
const searchNameInput = document.getElementById("search-name");
const searchMajorInput = document.getElementById("search-major");
const searchStartingYearInput = document.getElementById("search-starting-year");

function showModal(member) {
  const modal = document.getElementById("modal");
  const modalName = document.getElementById("modal-name");
  const modalImage = document.getElementById("modal-image");
  const modalMajor = document.getElementById("modal-major");
  const modalDegree = document.getElementById("modal-degree");
  const modalStartingYear = document.getElementById("modal-starting-year");

  modalName.textContent = member.name;
  modalImage.src = member.image;
  modalMajor.textContent = `Major: ${member.major}`;
  modalDegree.textContent = `Degree: ${member.degree}`;
  modalStartingYear.textContent = `Starting Year: ${member.startingYear}`;

  modal.style.display = "block";
}

document.getElementById("close-btn").addEventListener("click", () => {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
});

function displayMembers(membersData) {
  membersList.innerHTML = "";

  membersData.forEach((member, index) => {
    const memberCard = `
      <div class="card">
        <img src="${member.image}" alt="Profile Picture">
        <h2>${member.name}</h2>
        <div class="dates-major">
          <span>Starting Year: ${member.startingYear}</span>
        </div>
        <div class="major-box" data-major="${member.major}">${member.major}</div>
        <div class="degree-box ${member.degree.toLowerCase()}">${member.degree}</div>
      </div>
    `;

    const cardElement = document.createElement("div");
    cardElement.innerHTML = memberCard;

    cardElement.addEventListener("click", () => {
      showModal(member);
    });

    membersList.appendChild(cardElement);
  });
}

function filterMembers() {
  const searchName = searchNameInput.value.toLowerCase();
  const searchMajor = searchMajorInput.value;
  const searchStartingYear = searchStartingYearInput.value;

  const filteredMembers = members.filter((member) => {
    const nameMatches = member.name.toLowerCase().includes(searchName);
    const majorMatches = searchMajor ? member.major === searchMajor : true;
    const startingYearMatches = searchStartingYear
      ? member.startingYear === parseInt(searchStartingYear)
      : true;

    return nameMatches && majorMatches && startingYearMatches;
  });

  displayMembers(filteredMembers);
}

// Function to populate the major filter dropdown with existing majors
function populateMajorFilter() {
  const allMajors = new Set(members.map((member) => member.major));
  const majorFilterDropdown = document.getElementById("search-major");

  // Clear existing options
  majorFilterDropdown.innerHTML = "";

  // Add a default option
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "All Majors";
  majorFilterDropdown.appendChild(defaultOption);

  // Add options for each major
  allMajors.forEach((major) => {
    const option = document.createElement("option");
    option.value = major;
    option.textContent = major;
    majorFilterDropdown.appendChild(option);
  });
}

// Call the filterMembers() function when the main page loads
document.addEventListener("DOMContentLoaded", () => {
  filterMembers();
  populateMajorFilter();
});


searchNameInput.addEventListener("input", filterMembers);
searchMajorInput.addEventListener("change", filterMembers);
searchStartingYearInput.addEventListener("input", filterMembers);

// Initial display of all members
displayMembers(members);

const team = [
  {
    name: "Emily Arthur",
    image: "emily_arthur.png",
    job: "Education manager",
    description:
      "Emily is from County Armagh. She received her bachelor's degree in Irish and French from Queen's University Belfast and completed her first degree in both subjects in 2015. She then completed her MA and PhD in Irish from the same institution, completing her PhD in 2020. She has a special interest. in contemporary Irish literature, especially travel and emigration literature.",
  },
  {
    name: "John Brian",
    image: "john_brian.png",
    job: "Head of Curriculum Design",
    description:
      "Emily is from County Armagh. She received her bachelor's degree in Irish and French from Queen's University Belfast and completed her first degree in both subjects in 2015. She then completed her MA and PhD in Irish from the same institution, completing her PhD in 2020. She has a special interest. in contemporary Irish literature, especially travel and emigration literature.",
  },
  {
    name: "Emma Bailey",
    image: "emma_bailey.png",
    job: "Irish Language Teacher",
    description:
      "Emily is from County Armagh. She received her bachelor's degree in Irish and French from Queen's University Belfast and completed her first degree in both subjects in 2015. She then completed her MA and PhD in Irish from the same institution, completing her PhD in 2020. She has a special interest. in contemporary Irish literature, especially travel and emigration literature.",
  },
];

let currentTeamMember = 0;

const teamMemberInfo = document.querySelector("#team-member-info");
const teamMemberImage = teamMemberInfo.querySelector("#image");
const teamMemberName = teamMemberInfo.querySelector("#name");
const teamMemberJob = teamMemberInfo.querySelector("#job");
const teamMemberDescription = teamMemberInfo.querySelector("#description");
const teamMemberButtonLeft = teamMemberInfo.querySelector("#button-left");
const teamMemberButtonRight = teamMemberInfo.querySelector("#button-right");

function changeCurrentTeamMember(direction) {
  currentTeamMember =
    (currentTeamMember + direction + team.length) % team.length;
  const teamMember = team[currentTeamMember];
  teamMemberImage.src = `/images/team/${teamMember.image}`;
  teamMemberName.innerText = teamMember.name;
  teamMemberJob.innerText = teamMember.job;
  teamMemberDescription.innerText = teamMember.description;
}

teamMemberButtonLeft.addEventListener("click", () =>
  changeCurrentTeamMember(-1)
);
teamMemberButtonRight.addEventListener("click", () =>
  changeCurrentTeamMember(1)
);

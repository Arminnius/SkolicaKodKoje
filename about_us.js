
const aboutUsData = [
    {
        first_name: "Aleksandar",
        last_name: "Boskov",
        age: "25",
        company: "Eko-Gradnja",
        email: "boskov996@gmail.com",
        office_num: "F123",
        phone_num: "+381 63 xxxx xx",
        photo: "https://github.com/Arminnius/SkolicaKodKoje/blob/master/acaaa.jpg?raw=true"
    },
    {
        first_name: "Armin",
        last_name: "Berecki",
        age: "29 i još malo",
        company: "Eko-Gradnja",
        email: "arminnius90b@outlook.com",
        office_num: "204",
        phone_num: "+381 63 xxxx xx",
        photo: "https://yt3.ggpht.com/ytc/AKedOLSwktvpi0jO2IijWMvCRmg58yZuBpMLIDGKkWRwIw=s900-c-k-c0x00ffffff-no-rj"
    }
];

function aboutUsTemplate(developer) {
    return `
      <div class="user">
      <img class="user-photo" src="${developer.photo}">
      <h2 class="user-name">${developer.first_name} ${developer.last_name}</h2>
      <p><strong>Age:</strong> ${developer.age}</p>
      <p><strong>Email:</strong> ${developer.email}</p>
      <hr>
      <p><strong>Company:</strong> ${developer.company}</p>
      <p><strong>Office number:</strong> ${developer.office_num}</p>
      <p><strong>Phone:</strong> ${developer.phone_num}</p>
      </div>
    `;
  }

document.getElementById("aboutUs").innerHTML = `
    <h1 class="app-title">Curent number of developers is ${aboutUsData.length}</h1>
    ${aboutUsData.map(aboutUsTemplate).join("")}
`;
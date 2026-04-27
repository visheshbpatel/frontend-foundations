const users = [
  {
    name: "vishesh",
    pic: "https://images.unsplash.com/photo-1652794121351-a69e34871d86?w=400&h=600&fit=crop",
    bio: "chai over everything ☕ | building something big",
  },
  {
    name: "madhav",
    pic: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=600&fit=crop",
    bio: "calm mind, loud goals 🎯 | gym + discipline",
  },
  {
    name: "buddy",
    pic: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=400&h=600&fit=crop",
    bio: "just here for vibes 😎 | memes + music all day",
  },
  {
    name: "kunal",
    pic: "https://images.unsplash.com/photo-1573197441318-dd67c7e2eea3?w=400&h=600&fit=crop",
    bio: "design. create. repeat 🎨 | minimal soul",
  },
  {
    name: "navneet",
    pic: "https://images.unsplash.com/photo-1615109398623-88346a601842?w=400&h=600&fit=crop&crop=faces",
    bio: "small town, big dreams 🌆 | hustle never stops",
  },
  {
    name: "sauham",
    pic: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=400&h=600&fit=crop&crop=faces",
    bio: "overthinking everything 🤯 | but still moving forward",
  },
  {
    name: "anshul",
    pic: "https://images.unsplash.com/photo-1665832102899-2b3f12cf991e?w=400&h=600&fit=crop",
    bio: "quiet but dangerous 🧠 | strategy > noise",
  },
  {
    name: "chaitanya",
    pic: "https://images.unsplash.com/photo-1670558736998-121e21e6ab5c?w=400&h=600&fit=crop",
    bio: "old soul 🎧 | lost in music & thoughts",
  },
  {
    name: "tushar",
    pic: "https://images.unsplash.com/photo-1638733809153-1be41f8cc819?w=400&auto=format&fit=crop&q=60",
    bio: "focused mind ⚡ | chasing goals daily",
  }
];


function showUsers(arr){

  arr.forEach(function (user){
    //outer div
  const card = document.createElement("div");
  card.classList.add('card');                    //<div class="card"></div>


  // create img
  const img = document.createElement("img");
  img.src = user.pic;
  img.classList.add('bg-img');


  // blur img
  const blurredLayer = document.createElement("div");
  blurredLayer.classList.add('blurred-layer')


  // content div
  const content = document.createElement("div");
  content.classList.add("content");


  // h3 and paras
  const heading = document.createElement("h3");
  heading.textContent = user.name;

  const para = document.createElement("p");
  para.textContent = user.bio;


  // append h3 and para to content
  content.appendChild(heading);
  content.appendChild(para);


  // append all to card
  card.appendChild(img);
  card.appendChild(blurredLayer);
  card.appendChild(content);


  // final append to container
  document.querySelector('.cards').appendChild(card);
  })

}


showUsers(users);

let inp = document.querySelector('.inp');
let warning = document.querySelector('.warning');

inp.addEventListener('input', function () {

  let newUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(inp.value.toLowerCase());
  });

  warning.classList.toggle('show', newUsers.length === 0);

  document.querySelector('.cards').innerHTML = "";

  showUsers(newUsers);

});
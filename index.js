console.log('loaded')

let alertH1 =  document.getElementById('alertClick')
alertH1.addEventListener('click', ()=>{
    console.log('we have been clicked')
    alert('the H1 was indeed clicked')
})

let fetchButton = document.getElementById('fetchClick')

fetchButton.addEventListener('click', ()=>{
    console.log('fetch was clicked')
    fetch('http://localhost:3000/profiles')
    .then(res=> res.json())
    .then(profiles=> profiles.forEach(profile=> createCard(profile)))
})

createCard = (profile) => {
    let profiles = document.querySelector('.profiles')
    let div = document.createElement('div')
    div.classList.add('col-sm-6', 'col-md-4')
    let div2 = document.createElement('div')
    div2.classList.add('thumbnail')
    let img = document.createElement('img')
    img.src = profile.picture
    let div3 = document.createElement('div')
    div3.classList.add('caption')
    let h3 = document.createElement('h3')
    h3.innerText = profile.name
    let p = document.createElement('p')
    p.innerText = profile.description
    div3.append(h3, p)
    div2.append(img, div3)
    div.append(div2)

    profiles.append(div)
//     <div class="col-sm-6 col-md-4">
//     <div class="thumbnail">
//       <img src="./images/profile/download.svg" alt="your_profile">
//       <div class="caption">
//         <h3>Grab this entire div</h3>
//         <p>give your own description</p>
//       </div>
//     </div>
//   </div>
}
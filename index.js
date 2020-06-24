console.log('loaded')

let alertH1 =  document.getElementById('alertClick')
alertH1.addEventListener('click', ()=>{
    console.log('we have been clicked')
    alert('the H1 was indeed clicked')
})
// lets grab the h1 with the id of 'fetchClick'
let fetchH1 =  document.getElementById('fetchClick')
//referencing that h1, lets add an eventListener to listen for a 'click'
fetchH1.addEventListener('click', ()=>{
    console.log('is this click working?') //always test your work, if the console log is working, we can move on
    fetch('')
})
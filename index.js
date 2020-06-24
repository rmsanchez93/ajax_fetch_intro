console.log('loaded')

let alertH1 =  document.getElementById('alertClick')
alertH1.addEventListener('click', ()=>{
    console.log('we have been clicked')
    alert('the H1 was indeed clicked')
})
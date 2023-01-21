const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const prePayload = new FormData(form);
    const payload = new URLSearchParams(prePayload)
    
    console.log([...payload]);
    fetch('http://httpbin.org/post',{
        method:"POST",
        body:payload,
    })
    .then(res=> res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
})
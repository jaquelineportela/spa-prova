let encode = document.querySelector('#encode');
let decode = document.querySelector('#decode');
let output = document.querySelector('#text-encode-decode');

encode.addEventListener('click', () =>{
    output.value = btoa(output.value);
});

decode.addEventListener('click', () =>{
    output.value = atob(output.value);
});

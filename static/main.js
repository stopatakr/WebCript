const hear = document.querySelector('.hear-1')
console.log(hear)

hear.addEventListener('mouseover', (e)=>{
    e.preventDefault();
    document.querySelector('.hear-1').style.background = '#27dafa';
    document.querySelector('.hear-1').style.color = 'white';
    
});

hear.addEventListener('mouseout', (e)=>{
    e.preventDefault();
    document.querySelector('.hear-1').style.background = 'rgba(228, 228, 228, 0.5)';
    document.querySelector('.hear-1').style.color = '#27dafa';
    
});


 const userName = document.getElementById('name-input')
 const getUserName = document.getElementById('name-output')

 userName.addEventListener('input', (ewt) => {
    const value = ewt.target.value
    if(value == 0){
    return  getUserName.textContent = `незнакомец`
    }
    return getUserName.textContent = value
 }) 

 
 






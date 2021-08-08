const validator = document.querySelector('[type = text]')
console.log(validator)

validator.addEventListener("blur", (event) => {
  if(validator.getAttribute('data-length') > validator.value.length || validator.getAttribute('data-length') < validator.value.length ){
  validator.classList.add('invalid')
  validator.classList.remove('valid')
  validator.classList.remove('validation-input')
  } else{
  validator.classList.add('valid')
  validator.classList.remove('invalid')
  validator.classList.remove('validation-input')}
  if(validator.value.length === 0){
  validator.classList.add('validation-input')
  validator.classList.remove('valid')  
  validator.classList.remove('invalid')
  }
});
 
 
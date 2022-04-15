const checkboxValue = document.querySelector('.switch-checkbox')
const bodyTheme = document.querySelector('body')

checkboxValue.addEventListener('change', () => {
  bodyTheme.classList.toggle('light-theme')
})

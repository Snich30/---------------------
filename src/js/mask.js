// IMask(
//     document.getElementById('card_number'),{
//         mask:'0000-0000-0000-0000'
//     }
// )

const $input = document.querySelector('[data-js="input"]')
$input.addEventListener('input', handleInput, false)

function handleInput (e) {
  e.target.value = phoneMask(e.target.value)
}

function phoneMask (phone) {
  return phone.replace(/\D/g, '')
  .replace(/(\d{4})(\d{1,5})/, '$1-$2')
  .replace(/(\d{4})(\d{1,5})/, '$1-$2')
    .replace(/(\d{4})(\d{1,5})/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1');
}
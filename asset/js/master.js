let _input = document.querySelectorAll('input')
let _value = document.querySelectorAll('span')

_input.forEach((val) => {
    val.addEventListener('input', () => {
        for (i = 0; i < _input.length; i++) {
            _value[i].innerText = `${_input[i].value}`
            _value[i].setAttribute('data-code', _input[i].value)
        }
    })
})

function para(){
let _r = _value[0].getAttribute('data-code')
let _g = _value[1].getAttribute('data-code')
let _b = _value[2].getAttribute('data-code')

document.querySelector('.preview').style.backgroundColor = `rgb(${_r},${_g},${_b})`
}













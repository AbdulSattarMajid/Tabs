const text = document.querySelector('.text')
function one() {
    let h = document.createElement('h1')
    let p = document.createElement('p')
    h.textContent = "Hello,World"
    p.innerText = 'Theory of Automata'
    document.querySelector('.text').innerHTML = "";
    document.querySelector('.text').append(h, p);
    document.querySelector('.one').style.backgroundColor = 'wheat'
    document.querySelector('.two').style.backgroundColor = 'gray'
    document.querySelector('.three').style.backgroundColor = 'gray'
    text.style.border = '4px solid black'
    text.style.backgroundColor = 'wheat'
}
function two() {
    let h = document.createElement('h2')
    let p = document.createElement('p')
    h.textContent = "Hello,Earth"
    p.innerText = 'Assembly Language'
    document.querySelector('.text').innerHTML = "";
    document.querySelector('.text').append(h, p);
    document.querySelector('.one').style.backgroundColor = 'gray'
    document.querySelector('.two').style.backgroundColor = 'wheat'
    document.querySelector('.three').style.backgroundColor = 'gray'
    text.style.border = '4px solid black'
    text.style.backgroundColor = 'wheat'


}
function three() {
    let h = document.createElement('h3')
    let p = document.createElement('p')
    h.textContent = "Hello,Mars"
    p.innerText = 'Calculas II'
    document.querySelector('.text').innerHTML = "";
    document.querySelector('.text').append(h, p);
    document.querySelector('.one').style.backgroundColor = 'gray'
    document.querySelector('.two').style.backgroundColor = 'gray'
    document.querySelector('.three').style.backgroundColor = 'wheat'
    text.style.border = '4px solid black'
    text.style.backgroundColor = 'wheat'


}

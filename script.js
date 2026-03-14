var btn = document.querySelector('button')
var main = document.querySelector('main')

btn.addEventListener('click',function(){
    var div = document.createElement('div')

    var x = Math.random()*100
    var y = Math.random()*100
    var r = Math.random()*360
    var p1 = Math.floor(Math.random()*256)
    var p2 = Math.floor(Math.random()*256)
    var p3 = Math.floor(Math.random()*256)
    
    div.style.height = '50px'
    div.style.width = '50px'
    div.style.position = 'absolute'
    div.style.backgroundColor = `rgb(${p1},${p2},${p3})`
    div.style.left = x+'%'
    div.style.top = y+'%'
    div.style.rotate = r+'deg'

    main.appendChild(div)
    
})
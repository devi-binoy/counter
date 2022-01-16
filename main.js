const count=document.getElementById("count")
let value=0

function increment()
{
    value++
    count.innerHTML = value
}

function decrement()
{
    value--
    count.innerHTML = value
}
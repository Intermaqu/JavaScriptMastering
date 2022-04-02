
let but1 = document.getElementById("addBook");
let cont = document.getElementById("content")
function newNode(){
    const node = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.classList.add("td1")
    const td2 = document.createElement("td");
    td2.classList.add("td2")
    const td3 = document.createElement("td");
    td3.classList.add("td3")

    const td1Form = document.createElement("input")
    td1Form.type = "text"
    td1.appendChild(td1Form)

    const td2Form = document.createElement("input")
    td2Form.setAttribute("type","text")
    td2.appendChild(td2Form)


    const td3a = document.createElement("button")
    td3a.type = "button"
    td3a.innerHTML = "save"
    td3a.onclick = function (){
        const author = td3a.parentElement.parentElement.children[0].firstChild.value
        const title = td3a.parentElement.parentElement.children[1].firstChild.value
        td3a.parentElement.parentElement.children[0].innerHTML = author
        td3a.parentElement.parentElement.children[1].innerHTML = title
        td3a.parentElement.children[1].style.display = "inline"
        td3a.parentElement.children[0].style.display = "none"
    }
    

    const td3b = document.createElement("button")
    td3b.type = "button"
    td3b.innerHTML = "remove"
    td3b.onclick = function (){
        td3b.parentNode.parentNode.parentNode.removeChild(td3b.parentNode.parentNode)
    }
    

    const td3c = document.createElement("button")
    td3c.type = "button"
    td3c.innerHTML = "edit"
    td3c.style.display = "none"
    td3c.onclick = function (){
        const author = td3c.parentElement.parentElement.children[0].firstChild.textContent
        const title = td3c.parentElement.parentElement.children[1].firstChild.textContent
        const authortd = document.createElement("input")
        const titletd = document.createElement("input")
        authortd.value = `${author}`
        authortd.type="text"
        titletd.value = `${title}`
        titletd.type= "text"
        td3a.parentElement.parentElement.children[0].innerHTML = ""
        td3a.parentElement.parentElement.children[0].appendChild(authortd)
        td3a.parentElement.parentElement.children[1].innerHTML = ""
        td3a.parentElement.parentElement.children[1].appendChild(titletd)
        td3c.style.display = "none"
        td3c.parentElement.children[0].style.display = "inline"
    }
    td3.appendChild(td3a)
    td3.appendChild(td3c)
    td3.appendChild(td3b)




    node.appendChild(td1)
    node.appendChild(td2)
    node.appendChild(td3)

    cont.appendChild(node)
}



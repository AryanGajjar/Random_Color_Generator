const getColor = ()=> {
    const rno = Math.floor(Math.random() * 16777215);
    const rcode = "#" + rno.toString(16);
    console.log(rno,rcode);

    document.body.style.backgroundColor = rcode;
    document.getElementById("text").innerText = rcode;

    navigator.clipboard.writeText(rcode)
}

document.getElementById("btn").addEventListener(
    "click",
    getColor
)

getColor();
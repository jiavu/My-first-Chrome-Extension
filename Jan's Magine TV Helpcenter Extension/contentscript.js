const anzeigetext = document.getElementsByTagName("H1")[0].textContent;
const link = document.URL;
const formattedLink = `[${anzeigetext}](${link})`;



function copyToClipboard() {
    console.log(formattedLink);
    const tempElmt = document.createElement("textarea");
    tempElmt.value = formattedLink;
    document.body.appendChild(tempElmt);
    tempElmt.select();
    document.execCommand("copy");
    document.body.removeChild(tempElmt);
}


let header = document.getElementsByClassName("header");
header = header[0];
/* header.style.backgroundColor = "green"; */

let copyTool = document.createElement("div");
copyTool.style.position = "fixed";
copyTool.style.top = 0;
copyTool.style.right = 0;
copyTool.style.backgroundColor = "white";
copyTool.style.border = "1px groove black";
copyTool.style.margin = "10px";
copyTool.style.padding = "5px";
copyTool.style.fontSize = "0.8em";
copyTool.style.boxShadow = "0px 8px 16px 0px rgba(0, 0, 0, 0.2)";
copyTool.align = "center";
header.appendChild(copyTool);

let copyButton = document.createElement("button");
copyButton.id = "copyButton";
copyButton.type = "button";
copyButton.innerHTML = "Copy Link";
copyButton.float = "right";
copyButton.margin = "auto";

let descr = document.createElement("p");
descr.innerHTML = `Jan's Magine TV Helpcenter Extension<br>`;
/* let shortkey = document.createElement("p");
shortkey.innerHTML = "(alt + ...)"; */
copyTool.appendChild(descr);
copyTool.appendChild(copyButton);
/* copyTool.appendChild(shortkey); */


/* copyButton.addEventListener("click", copyToClipboard); */
copyButton.onclick = copyToClipboard;
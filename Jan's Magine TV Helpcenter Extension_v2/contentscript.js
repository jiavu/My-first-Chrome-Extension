const anzeigetext = document.getElementsByTagName("H1")[0].textContent;
const link = document.URL;
const formattedLink = `[${anzeigetext}](${link})`;
let close;

function closeTab() {
    close = true;
    copyToClipboard();
}

function copyToClipboard() {
    console.log(formattedLink);
    const tempElmt = document.createElement("textarea");
    tempElmt.value = formattedLink;
    document.body.appendChild(tempElmt);
    tempElmt.select();
    document.execCommand("copy");
    document.body.removeChild(tempElmt);

    if (close) { chrome.runtime.sendMessage( {close : true }) }; // Send message "close tab" to background script
}


let header = document.getElementsByClassName("header");
header = header[0];
/* header.style.backgroundColor = "green"; */

let copyTool = document.createElement("div");
copyTool.style.position = "fixed";
copyTool.style.top = 0;
copyTool.style.right = 0;
copyTool.style.backgroundColor = "white";
copyTool.style.border = "1px solid black";
copyTool.style.borderRadius = "8px";
copyTool.style.margin = "51px 10px";
copyTool.style.padding = "5px";
copyTool.style.fontSize = "0.8em";
copyTool.style.boxShadow = "0px 8px 16px 0px rgba(0, 0, 0, 0.2)";
copyTool.align = "center";
header.appendChild(copyTool);

let copyButton = document.createElement("button");
copyButton.id = "copyButton";
copyButton.type = "button";
copyButton.style.margin = "0 2px 0 0";
copyButton.innerHTML = "Copy only";

let copyButton2 = document.createElement("button");
copyButton2.id = "copyButton2";
copyButton2.type = "button";
copyButton2.style.margin = "0 0 0 2px";
copyButton2.innerHTML = "Copy+Close";

let descr = document.createElement("p");
/* descr.innerHTML = `Jan's Magine TV Helpcenter Extension`; */
descr.innerHTML = `Copy formatted link to clipboard`;
/* let shortkey = document.createElement("p");
shortkey.innerHTML = "(alt + ...)"; */
copyTool.appendChild(descr);
copyTool.appendChild(copyButton);
copyTool.appendChild(copyButton2);
/* copyTool.appendChild(shortkey); */


/* copyButton.addEventListener("click", copyToClipboard); */
copyButton.onclick = copyToClipboard;
copyButton2.onclick = closeTab;
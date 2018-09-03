const anzeigetext = document.getElementsByTagName("H1")[0].textContent;
const link = document.URL;
const formattedLink = `[${anzeigetext}](${link})`;
console.log(formattedLink);


function copyToClipboard(linkToClipboard) {
    const tempElmt = document.createElement("textarea");
    tempElmt.value = linkToClipboard;
    document.body.appendChild(tempElmt);
    tempElmt.select();
    document.execCommand("copy");
    document.body.removeChild(tempElmt);
}

copyToClipboard(formattedLink);
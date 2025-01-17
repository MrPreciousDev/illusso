
function showContent(buttonNumber) {
           
    const contentDivs = document.querySelectorAll('.feature-home');
    contentDivs.forEach(div => div.classList.add('d-none'));     
    const selectedDiv = document.getElementById(`content-${buttonNumber}`);
    selectedDiv.classList.remove('d-none');
}
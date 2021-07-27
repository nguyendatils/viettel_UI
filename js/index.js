$(document).on('click', 'ul li', function() {
    $(this).addClass('active').siblings().removeClass('active');
})

var acc = document.getElementsByClassName("dropdown-btn");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContainer = this.nextElementSibling;
        if (dropdownContainer.style.display === "block") {
            dropdownContainer.style.display = "none";
        } else {
            dropdownContainer.style.display = "block";
        }
    });
}
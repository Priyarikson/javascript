// document.addEventListener('DOMContentLoaded', () => {
document.addEventListener('DOMContentLoaded', function() {
    // document.querySelectorAll('button').forEach(button => {
    document.querySelectorAll('button').forEach(function(button) {
        // button.onclick = () => {
        button.onclick = function() {
            document.querySelector("#hello").style.color = button.dataset.color;
        }
    });
 });
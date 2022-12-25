var elements = document.querySelectorAll('*');

elements.forEach(function(element) {
  console.log(element);
});
const element = document.getElementById('colorpicker');
console.log(element);
document.addEventListener("DOMContentLoaded", function() { 
    document.querySelector('input[type="color"]').addEventListener('change', function(event) {
        event.preventDefault();
        console.log(event.target.value)
        brower.theme.update({
            "theme":{
                "colors":{
                    "toolbar": event.target.value
                }
            }
        });
    });

});

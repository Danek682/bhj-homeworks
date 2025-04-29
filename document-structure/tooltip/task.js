function tooltip() {
   let hasTooltip = document.querySelectorAll(".has-tooltip");
   let tooltip = document.querySelectorAll(".tooltip");
   let toolTipActive = document.querySelectorAll(".tooltip_active");
   for (let i = 0; i < hasTooltip.length; i++) {
       hasTooltip[i].addEventListener("click", function (e) {
           e.preventDefault();

           for (let j = 0; j < toolTipActive.length; j++) {
               toolTipActive[j].remove();
           }

           tooltip[i].classList.toggle("tooltip_active");

           const coords = hasTooltip[i].getBoundingClientRect();
           tooltip[i].style.position = "absolute";
           tooltip[i].style.left = coords.left + "px";
           tooltip[i].style.top = coords.bottom + "px";
       });
   }
}

tooltip();

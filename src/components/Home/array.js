
function array(){
	const del = document.getElementsByClassName("delete");
 	 console.log(2);
  	Array.prototype.slice.call(del).forEach(function(item) {
      item.addEventListener("click", function(g) {
        g.target.parentNode.remove()
      });
  })
}
array();
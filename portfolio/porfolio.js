	function showPage(page){
			document.querySelectorAll('section').forEach(section => {
          		section.style.display = 'none';
			})
			document.querySelector(`#${page}`).style.display = "block";
			
		}

		document.addEventListener('DOMContentLoaded', function(){
			document.querySelectorAll('button').forEach(button => {
				button.onclick = function(){
					showPage(this.dataset.page);
				}
			});
		});

		let i = 0;
	
		function display(){
			var item = ["A Network Administrator", "A Software Developer", "An Electrical/Electronics <br> Engineering <br> Graduate"]
			document.querySelector('h2').innerHTML = item[i];
			i++;
			if (i >2){
				i = i-3;
			}
			
		}
	
		document.addEventListener('DOMContentLoaded', function(){
			setInterval(display, 2000);
		})
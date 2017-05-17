function loopLi() {
				var nowLi = $("#descriptUl li:visible");
				var nextLi = nowLi.val() == "3" ?  $("#descriptUl li:first"): nowLi.next();
				setTimeout(function() {
					nowLi.css("display", "none");
					nextLi.css("display", "block");					
					setTimeout(loopLi(),4000);
				},3000)
			};
loopLi();

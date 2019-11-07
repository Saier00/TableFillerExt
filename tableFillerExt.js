;(function(){
	"use strict";
	//<summary>Add row of headers in table</summary>
	//<return>this</return>
	Object.defineProperty(Element.prototype, "addThs",{
	   		value: function(...args) {
		    	let tr=document.createElement("tr");
		    	let cs=0;
		    	for(let arg of args){
		    		let th=document.createElement("th");
		    		if(typeof arg =="number"){
						cs=arg;
						continue;
		    		}
		    		th.innerHTML=arg;
		    		if(cs!=0){
						th.colSpan=cs;
						cs=0;
		    		}
		    		tr.append(th);
				}
				this.append(tr);
				return this;
	    	},
		writable: true,
	    configurable: true
    });
	//<summary>Add row of td elements in table</summary>
	//<return>this</return>
	Object.defineProperty(Element.prototype, "addTds",{
		    value: function(...args) {
		    	let tr=document.createElement("tr");
		    	for(let arg of args){
					if(typeof arg =="number"){
						for(let k=0; k<arg;k++){
							let td=document.createElement("td")
							tr.append(td);
						}
					}
					else{
						let td=document.createElement("td");
						td.innerHTML=arg;
						tr.append(td);
					}
				}
				this.append(tr);
				return this;
		    },
		writable: true,
	    configurable: true
    });
})();
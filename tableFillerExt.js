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
		    	let ths=Array.prototype.slice.call(this.firstChild.childNodes)
		    	.map(function(el){
		    		if(el.hasAttribute("colSpan"))
		    			return el.colSpan;
		    		return 1;
		    	});

		    	let thsLength=0;
		    	for(let i of ths){
		    		thsLength+=i;
		    	}

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

				for(let i=tr.childNodes.length;i<thsLength;i++){
					let td=document.createElement("td");
					tr.append(td);
				}
				this.append(tr);
				return this;
		    },
		writable: true,
	    configurable: true
    });
    //<summary>Add row of td elements at choosen tr</summary>
	//<return>this</return>
    Object.defineProperty(Element.prototype, "addTdsAt",{
		    value: function(...args) {
		    	let ths=Array.prototype.slice.call(this.parentElement.firstChild.childNodes)
		    	.map(function(el){
		    		if(el.hasAttribute("colSpan"))
		    			return el.colSpan;
		    		return 1;
		    	});

		    	let thsLength=0;
		    	for(let i of ths){
		    		thsLength+=i;
		    	}

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

				for(let i=tr.childNodes.length;i<thsLength;i++){
					let td=document.createElement("td");
					tr.append(td);
				}
				this.after(tr);
				return this;
		    },
		writable: true,
	    configurable: true
    });
})();
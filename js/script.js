const slider = document.querySelector(".slider");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
let counter =0;
next.addEventListener('click',()=>{
    if(counter<4){
		counter++;
		prev.classList.add('show');
		slider.style.transform='translate('+(counter)*-20+'%)';
		if(counter==4){
			next.style.display='none';
		}
	}
})
prev.addEventListener('click',()=>{
    if(counter>0){
		counter--;
		slider.style.transform='translate('+(counter)*-20+'%)';
			next.style.display='block';
		if(counter==0){
			prev.classList.remove('show');
			
		}
	}
	
})
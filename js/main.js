	
	let gird, lis, ul, mic, search,li;

	gird = document.querySelector('.gird');
	lis = document.querySelector('.list');
	ul = document.querySelector('ul');
	mic = document.getElementById('voice-search');
	search = document.querySelector('input');
	li =  document.getElementsByTagName('li');

	lis.onclick = e=>{
		ul.classList.add('list-display');
		lis.classList.add('active');
		gird.classList.remove('active');
	}
	gird.onclick = ()=>{
		ul.classList.remove('list-display');
		lis.classList.remove('active');
		gird.classList.add('active');
	}

	// search Item
	
	search.onkeyup = ()=>{
		const  x = search.value.toLowerCase();
		showItem(x);
		
	}
	function showItem(x) {
		for(let list of li){
			let product = list.children[1].children[0].innerHTML;
			let name = product.toLowerCase();
			if (name.search(x) > -1)
			{
				list.style.display = "";
			}else{
				list.style.display = "none";
			}
		}
	}
	// Voice Search
	mic.onclick = ()=> {
			mic.classList.add('record');
			let recognition = new webkitSpeechRecognition;
			recognition.lang = 'en-US';
			recognition.start();
			recognition.onresult = (e)=>{
				const m = search.value = e.results[0][0].transcript;
				showItem(m);
				mic.classList.remove('record');
			}

		}
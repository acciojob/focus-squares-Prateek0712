//your JS code here. If required.
let sqrArr= document.querySelectorAll('.square');
for(let s of sqrArr)
	{
		s.addEventListener('mouseover', changeColor);
		s.addEventListener('mouseout', resetColor);
	}
function  changeColor(event_details) {
	for(let  s of sqrArr)
		{
			if(s.id!=event_details.target.id)
			{
				s.style.backgroundColor = '#6F4E37';
			}
			else
			{
				s.style.backgroundColor = '#E6E6FA';
			}
		}
}
function resetColor(event_details){
	for(let  s of sqrArr)
		{
			s.style.backgroundColor='#E6E6FA';
		}
}

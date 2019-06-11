let btn=document.querySelector('#btn');
//reading the data from the first textarea
function getData(){
	let Check = true;
	let input = document.getElementById('inputarea').value.trim().split(',').map(elem=>parseInt(elem));
	input.forEach(function(elem){
		if(isNaN(elem)){
			alert("Array contains non number elements");
			document.getElementById('inputarea').value="";
			Check = false;
		}
		if(Check==false){
			input = undefined;
		}
	});
	return input;
}
//the sorting itself
function InsertionSort(arr){
	for(var i=0;i<arr.length;i++){
		let value = arr[i];
		for(var j=i-1;j>-1 && arr[j]>value;j--){
			arr[j+1]=arr[j];
		}
		arr[j+1] = value;
	}
	return arr;
}
//calling the functions when clicking on the button
btn.addEventListener('click', function(){
	var data = getData();
	document.getElementById('outputarea').value="";
	document.getElementById('elemNum').innerHTML="";
	document.getElementById('outputarea').value=InsertionSort(data).join(', ');
	document.getElementById('elemNum').innerHTML=data.length;
})

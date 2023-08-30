function numbers(input){
	let arr = input.split(' ').map(Number);
 //	console.log(arr)
	let sum = 0;
	for (let num of arr){
		sum+=num;
	}
	let average = sum/arr.length;
	let top = [];
	for (let num of arr){
		if (num > average) top.push(num)
	}
	top.sort((a,b)=>b-a)
	let top5 = top.slice(0,5)
	
	if (top5.length < 1){
		console.log('No')
	}
	else
	console.log(top5.join(' '))
}
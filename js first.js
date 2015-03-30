<script type="text/javascript">
var x = [3,5,'Dojo', 'rocks', {name: 'Michael', title: 'Sensei'}];

for(i = 0; i < x.length; i++)
{
	console.log(x[i] + ": " + typeof x[i]);
}
x.push(100);
x.push([42, 25, 'box', 'new stuff']);
console.log(x);

var total = 0;
for(i = 0; i <= 500; i++)
{
    total+=i;
}
console.log(total);


function timer()
{
    var ntotal = 0,
        d = new Date();
        start = d.getTime();
        console.log("Started at " + start);
    for(i = 0; i <= 1000000; i++)
    {
        ntotal += i;
    }
    console.log(ntotal);
    var d1 = new Date();
    var end = d1.getTime();
    console.log("Ended at " + end);
    console.log(end-start);
}

timer();
</script>
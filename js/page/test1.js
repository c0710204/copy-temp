
function work()
{
	var data='[{"demo":"row1demo",	"rows":[{"attr1":"a"},{"attr1":"b"}]},{"demo":"row1demo",	"rows":[{"attr1":"a"},{"attr1":"b"}]}]';
 var data = eval('(' + data + ')');
for(var squrow in data){
loadsqu('squ1demo',data[squrow],'squ1demo');}
}
setTimeout(work(),1000);
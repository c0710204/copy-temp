
function work()
{
//	var data='[{"demo":"row1demo",	"rows":[{"attr1":"a"},{"attr1":"b"}]},{"demo":"row1demo",	"rows":[{"attr1":"a"},{"attr1":"b"}]}]';
	 data=$.getJSON("/js/data/test1.json",function(data){
	
for(var squrow in data){
loadsqu('squ1demo',data[squrow],'squ1demo');}});
// var data = eval('(' + data + ')');
}
setTimeout(work(),1000);
var status = rs.status();
var missing_nodes = false;
var acceptable_node_statuses = [ 'PRIMARY', 'SECONDARY' ]

for(var i = 0 ; i < status.members.length ; i++)
{ 
  var member = status.members[i];
  // print(member.name + ' ' + member.stateStr);
  if (!(acceptable_node_statuses.includes(member.stateStr)))
  {
   missing_nodes = true;
  }
} 

if (missing_nodes)
{
 print('Missing nodes!');
}
else
{
 print('OK')
}

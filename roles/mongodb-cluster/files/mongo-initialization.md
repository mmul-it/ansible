# Mongo CS - Config Server

Command: ```mongo --host 192.168.10.51 --port 27019```

```
rs.initiate( { _id: "configReplSet", configsvr: true, version: 1, members: [ { _id: 0, host: "appgraylog-poc1-int:27019", priority: 1, votes: 1 } ] } )
rs.add( { host: "appgraylog-poc2-int:27019", priority: 1, votes: 1 } )
rs.add( { host: "appgraylog-poc3-int:27019", priority: 1, votes: 1 } )
rs.status()
```

# Mongo SN - Shard Node

Command: ```mongo --host 192.168.10.51 --port 27018```

```
rs.initiate( { _id: "appgraylog-pocshard-rs0", members: [ { _id: 0, host: "appgraylog-poc1-int:27018" } ] })
rs.add("appgraylog-poc2-int:27018")
rs.add("appgraylog-poc3-int:27018")
rs.status()
```

# Mongo QR - Query Router

Command: ```mongo --host 192.168.10.51 --port 27017```

```
sh.addShard("appgraylog-pocshard-rs0/appgraylog-poc1-int:27018,appgraylog-poc2-int:27018,appgraylog-poc3-int:27018")
sh.enableSharding("graylog")
```

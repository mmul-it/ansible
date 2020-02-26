# Mongo CS - Config Server

Command: ```mongo --host 192.168.122.21 --port 27019```

```
rs.initiate( { _id: "configReplSet", configsvr: true, version: 1, members: [ { _id: 0, host: "graylog-1-int:27019", priority: 1, votes: 1 } ] } )
rs.add( { host: "graylog-2-int:27019", priority: 1, votes: 1 } )
rs.add( { host: "graylog-3-int:27019", priority: 1, votes: 1 } )
rs.status()
```

# Mongo SN - Shard Node

Command: ```mongo --host 192.168.122.21 --port 27018```

```
rs.initiate( { _id: "graylog-shard-rs0", members: [ { _id: 0, host: "graylog-1-int:27018" } ] })
rs.add("graylog-2-int:27018")
rs.add("graylog-3-int:27018")
rs.status()
```

# Mongo QR - Query Router

Command: ```mongo --host 192.168.122.21 --port 27017```

```
sh.addShard("graylog-shard-rs0/graylog-1-int:27018,graylog-2-int:27018,graylog-3-int:27018")
sh.enableSharding("graylog")
```

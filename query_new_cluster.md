      --->mongo --host 10.0.1.1 --port 27019 (Ovvero Mongo CS - Config Cluster )
rs.initiate({ _id: "configReplSet", configsvr: true, members: [{ _id: 0, host: "gray1-int:27019" }]})
rs.status()
rs.initiate( { _id: "configReplSet", configsvr: true, version: 1, members: [ { _id: 0, host: "gray1-int:27019" } ] } )
rs.status()
rs.add( { host: "gray2-int:27019", priority: 0, votes: 0 } )
rs.status()
rs.add( { host: "gray3-int:27019", priority: 0, votes: 0 } )
rs.status()
var cfg = rs.conf();
cfg.members[0].priority = 1;
cfg.members[1].priority = 1;
cfg.members[2].priority = 1;
cfg.members[0].votes = 1;
cfg.members[1].votes = 1;
cfg.members[2].votes = 1;
rs.reconfig(cfg);
rs.status()

    -->sulla porta 27018 (Ovvero Mongo SN - Shard Node)
sh.status()
rs.initiate( { _id: "graylog-shard-rs0", members: [ { _id: 0, host: "gray1-int:27018" } ] })
rs.status()
rs.add("gray2-int:27018")
rs.status()
rs.add("gray3-int:27018")
rs.status()

    -->sulla porta 27017 (Ovvero Mongos QR - Query Router)
sh.status()
sh.addShard("graylog-shard-rs0/gray1-int:27018,gray2-int:27018,gray3-int:27018")
sh.status()
sh.enableSharding()
use graylog
sh.enableSharding("graylog")
sh.status()
use config
rs.status()
use graylog-shard-rs0
graylog-shard-rs0.rs.status()
rs.status()


mongodb-cluster
====================

2017/05/08 - Matteo Cappadonna (mcappadonna@mmul.it)
Based on lesmyrmidons.mongodb role from Ansible Galaxy, optimized for configuring MongoDBs cluster.

Ansible Role - Mongodb on RHEL/CentOS and Debian/Ubuntu.

## Requirements

None.

## Role Variables

For Debian / Ubuntu :

	url_apt_key: "http://keyserver.ubuntu.com/pks/lookup?op=get&search="
	mongodb_repository: "deb http://downloads-distro.mongodb.org/repo/debian-sysvinit dist 10gen"

To change the list of packages to install:

	mongodb_packages:
	  - mongodb-org

Configure the /etc/mongod.conf file with this variables (look at the mongod.conf file comments):

    mongodb_bind_ip: (defaults -> "127.0.0.1")
    mongodb_port: (default -> 27017)
    mongodb_user: (default -> "mongod")
    mongodb_group: (default -> "mongod")
    mongodb_logpath: (default -> /var/log/mongodb")
    mongodb_dbpath: (default -> "/var/lib/mongo")
    mongodb_pidfilepath: (default -> "/var/run/mongodb")
    mongodb_nojournal: (default -> false)
    mongodb_log_cpu: (default -> false)
    mongodb_objcheck: (default -> false)
    mongodb_quota: (default -> false)
    mongodb_oplogging_level: (default -> 0)
    mongodb_ignore_query_hints: (default -> false)
    mongodb_http_interface: (default -> false)
    mongodb_disable_serverside_scripting: (default -> false)
    mongodb_disable_tablescan: (default -> false)
    mongodb_disable_preallocation: (default -> false)
    mongodb_nssize:
    mongodb_replica_set_name:
    mongodb_replica_operation_log_size: (default -> 1024)
    mongodb_replica_members_key_file:

## Example Playbook

    - hosts: nosql
      roles:
        - { role: lesmyrmidons.mongodb }

## License

MIT / BSD

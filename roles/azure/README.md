# Azure role

This role will be useful for performing various tasks on Azure. The main.yaml
file is empty to avoid unwanted changed, when included you must specify which
task you want to perform.

The role needs some general variables in order to know how to connect to the
Azure API. Only the _Service Principal_ method is currently available.

Variables:
- *azure_client_id*: Azure client ID.
- *azure_client_secret*: Azure client secret
- *azure_subscription_id*: Your Azure subscription Id.
- *azure_tenant_id*: Azure tenant ID
- *azure_resource_group_name*: The resource group to manage

More detail on which these values can be obtained are in the [Ansible Official
Guide](https://docs.ansible.com/ansible/latest/scenario_guides/guide_azure.html).

You also need to install the Azure azure.azcollection, so from your Ansible
directory, run the following command:

```
$ ansible-galaxy install collection azure.azcollection
```

Then you need to install the python dependencies:

```
$ pip3 install -r collections/ansible_collections/azure/azcollection/requirements-azure.txt
```

## _power_

Used to start and stop Azure VMs.

Variables:
- **vm_list**: A list of the VMs to manage (as defined in the inventory)
- **status**: describe the desired VM status. Possible values are:
  - *on*: VM must be run. Power on if necessary
  - *off*: VM must be stopped. Power off if necessary

Example:

```yaml
- name: Power on Azure VM
  include_role:
    name: azure
    task_from: power
  vars:
    vm_list:
      - myfirstvm.mydomain.com
      - mysecondvm.mydomain.com
    status: on
```

You can also pass an entire Ansible inventory group if needed:

```yaml
- name: Power on Azure VM
  include_role:
    name: azure
    task_from: power
  vars:
    vm_list: "{{ groups['azure_vms'] }}"
    status: on
```

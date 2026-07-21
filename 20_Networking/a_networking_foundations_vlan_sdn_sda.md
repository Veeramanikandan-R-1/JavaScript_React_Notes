# Networking Foundations: L2, VLAN, SDN, and SD-Access

This file incorporates foundation topics from `resume notes.docx` and `evpn_notes.docx`.

---

# 1. Layer 2 Switching

Layer 2 switching works at the Data Link layer and forwards Ethernet frames using MAC addresses.

How it works:

```text
frame enters switch
-> switch learns source MAC and port
-> switch checks destination MAC in CAM table
-> known MAC: forward to specific port
-> unknown MAC: flood within VLAN except source port
```

Key points:

* fast hardware-based switching
* uses MAC addresses, not IP addresses
* VLANs divide broadcast domains
* STP prevents switching loops

Interview answer:

```text
An L2 switch forwards frames based on MAC addresses inside the same broadcast domain. It cannot route between subnets by itself; inter-VLAN traffic needs a router or Layer 3 switch.
```

---

# 2. VLAN

A VLAN is a logical Layer 2 segment that creates a separate broadcast domain.

Why VLANs are needed:

* isolate departments or tenants
* reduce broadcast traffic
* improve security boundaries
* group devices logically instead of physically
* simplify policy management

Port types:

| Port type | Meaning |
| --------- | ------- |
| Access port | belongs to one VLAN, usually for end devices |
| Trunk port | carries multiple VLANs with 802.1Q tagging |

Common VLAN types:

* default VLAN
* data VLAN
* voice VLAN
* management VLAN
* native VLAN

Interview answer:

```text
VLANs improve security and performance by splitting one physical switch infrastructure into multiple logical broadcast domains. Devices in different VLANs need Layer 3 routing or firewall rules to communicate.
```

---

# 3. SDN

Software-Defined Networking separates control-plane decisions from data-plane forwarding.

| Component | Role |
| --------- | ---- |
| Control plane/controller | decides policies, routes, and network behavior centrally |
| Data plane/devices | forwards traffic based on controller/device instructions |
| Northbound API | apps communicate with controller |
| Southbound API | controller communicates with devices |

SDN vs traditional networking:

| Area | Traditional networking | SDN |
| ---- | ---------------------- | --- |
| Control plane | distributed per device | logically centralized |
| Management | device-by-device CLI/SNMP | centralized, programmable |
| Flexibility | more static | dynamic and policy-driven |
| Automation | manual-heavy | API/script friendly |
| Security | per-device policies | centralized enforcement |

Use cases:

* cloud and data centers
* enterprise fabrics
* 5G networks
* IoT networks
* automated segmentation

---

# 4. Zero Trust SD-Access

Zero Trust principle:

```text
never trust, always verify
```

SD-Access is Cisco's software-defined access architecture for enterprise networks. It automates segmentation, policy, and access across wired and wireless networks.

Zero Trust SD-Access combines:

* identity-based access control
* least privilege access
* microsegmentation
* dynamic policy enforcement
* threat containment
* visibility into users and devices

Interview answer:

```text
Zero Trust SD-Access uses identity and policy to control who or what can access network resources. Instead of trusting a device because it is inside the network, it continuously verifies identity, posture, and permissions.
```

---

# 5. SLAAC

SLAAC means Stateless Address Autoconfiguration.

It is an IPv6 feature that lets a device create its own IPv6 address automatically without a central DHCP server.

Interview answer:

```text
SLAAC helps IPv6 devices join a network and generate addresses automatically using router advertisements, simplifying plug-and-play network configuration.
```


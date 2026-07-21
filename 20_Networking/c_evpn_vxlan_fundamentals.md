# EVPN-VXLAN Fundamentals

This file incorporates EVPN/VXLAN basics from `evpn_notes.docx`.

---

# 1. What VXLAN Is

VXLAN means Virtual Extensible LAN.

It is an overlay tunneling protocol that extends Layer 2 networks over a Layer 3 IP underlay.

Key points:

* encapsulates Ethernet frames in UDP/IP
* standard UDP port: `4789`
* uses VNI, a 24-bit VXLAN Network Identifier
* supports around 16 million segments, compared with 4096 VLAN IDs
* VTEPs perform encapsulation and decapsulation

Packet format:

```text
Outer Ethernet -> Outer IP -> UDP 4789 -> VXLAN header -> Inner Ethernet frame
```

---

# 2. VLAN vs VXLAN

| Area | VLAN | VXLAN |
| ---- | ---- | ----- |
| Purpose | Layer 2 segmentation | L2 overlay over L3 underlay |
| ID space | 4096 VLANs | about 16 million VNIs |
| Encapsulation | 802.1Q tagging | MAC-in-UDP encapsulation |
| Scope | usually local L2 domain | can stretch across L3 fabric |
| Multi-tenancy | limited | highly scalable |
| Common use | campus/LAN segmentation | data center and fabric overlays |

Interview answer:

```text
VLAN is basic Layer 2 segmentation. VXLAN extends Layer 2 over a Layer 3 underlay using MAC-in-UDP encapsulation and scales better for multi-tenant fabrics.
```

---

# 3. What EVPN-VXLAN Is

EVPN-VXLAN combines:

| Part | Role |
| ---- | ---- |
| VXLAN | data plane encapsulation |
| EVPN / MP-BGP | control plane for MAC, IP, and VTEP reachability |

Why EVPN improves plain VXLAN:

* avoids relying only on flood-and-learn behavior
* distributes MAC/IP reachability through the control plane
* supports L2 bridging and L3 routing
* supports multi-tenancy and segmentation
* improves scalability and manageability

Interview answer:

```text
VXLAN provides the overlay tunnel. EVPN adds a BGP-based control plane that advertises MAC, IP, and VTEP reachability, making VXLAN fabrics more scalable and efficient.
```

---

# 4. Underlay vs Overlay

| Area | Underlay | Overlay |
| ---- | -------- | ------- |
| Meaning | physical IP fabric | logical VXLAN/EVPN tenant network |
| Purpose | reachability between VTEPs | L2/L3 services for workloads |
| Protocols | IGP/BGP routing | BGP EVPN, VXLAN |
| Encapsulation | normal IP forwarding | VXLAN encapsulation |
| Memory hook | transport | service |

Interview answer:

```text
The underlay is the physical routed fabric that connects VTEPs. The overlay is the VXLAN/EVPN virtual network carrying tenant traffic across that fabric.
```

---

# 5. VTEP

VTEP means VXLAN Tunnel Endpoint.

Functions:

* maps VLANs to VNIs
* encapsulates local Ethernet frames into VXLAN packets
* sends VXLAN packets across the IP underlay
* decapsulates received VXLAN traffic
* participates in EVPN control-plane learning

Example:

```text
VM1 on Leaf1 sends to VM2 on Leaf2
-> Leaf1 VTEP encapsulates frame with VNI
-> packet crosses underlay
-> Leaf2 VTEP decapsulates
-> frame is delivered to VM2
```

---

# 6. MP-BGP

MP-BGP means Multiprotocol BGP.

It extends BGP to carry multiple address families, not only IPv4 unicast.

In EVPN:

* MP-BGP carries EVPN route information
* AFI/SAFI identify address families
* EVPN can advertise MAC, IP, VTEP, and prefix reachability

Important EVPN route types:

| Route type | Purpose |
| ---------- | ------- |
| Type 2 | MAC/IP advertisement |
| Type 3 | inclusive multicast / BUM handling |
| Type 5 | IP prefix route for L3 routing |

Interview answer:

```text
MP-BGP is the EVPN control plane. It distributes MAC, IP, VTEP, and prefix information so the fabric does not depend on traditional flood-and-learn behavior.
```

---

# 7. Why EVPN Needs L2 and L3

Layer 2 is useful for:

* workload mobility
* same-subnet communication across racks
* bridging within a tenant segment

Layer 3 is useful for:

* routing between subnets
* scalable east-west and north-south traffic
* distributed gateway designs
* VRF-based segmentation

Interview answer:

```text
In EVPN-VXLAN, L2 provides bridged tenant segments and workload mobility, while L3 provides scalable inter-subnet routing. BGP EVPN advertises reachability; VXLAN transports traffic over the L3 underlay.
```

---

# 8. VRF and VNI

| Term | Meaning |
| ---- | ------- |
| VNI | VXLAN segment identifier, similar conceptually to VLAN ID but much larger |
| L2VNI | identifies a bridged Layer 2 segment |
| L3VNI | identifies routed tenant/VRF traffic |
| VRF | separate routing table for segmentation/multi-tenancy |

Mapping memory:

```text
VLAN -> L2VNI
VRF -> L3VNI
```

---

# 9. Source References

* Cisco VXLAN BGP EVPN design guide: https://www.cisco.com/c/en/us/td/docs/dcn/whitepapers/cisco-vxlan-bgp-evpn-design-and-implementation-guide.html
* Cisco VXLAN MP-BGP EVPN design guide: https://www.cisco.com/c/en/us/products/collateral/switches/nexus-9000-series-switches/guide-c07-734107.html
* Cisco Catalyst BGP EVPN VXLAN overview: https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst9500/software/release/17-13/configuration_guide/vxlan/b_1713_bgp_evpn_vxlan_9500_cg/bgp_evpn_vxlan_overview.html


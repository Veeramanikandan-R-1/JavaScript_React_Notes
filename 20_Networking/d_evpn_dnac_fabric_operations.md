# EVPN, DNAC, and Fabric Operations

This file incorporates DNAC/fabric-operation material from `evpn_notes.docx`.

---

# 1. What a Fabric Is in EVPN

An EVPN fabric is a network architecture that combines:

* IP underlay
* VXLAN overlay
* MP-BGP EVPN control plane
* leaf/spine topology
* VTEPs
* tenant segmentation with VNIs and VRFs

Interview answer:

```text
An EVPN fabric is a VXLAN overlay controlled by BGP EVPN. It provides scalable L2 and L3 connectivity across a routed underlay, usually using a leaf-spine architecture.
```

---

# 2. Leaf, Spine, Border Leaf, and Border Spine

| Role | Responsibility |
| ---- | -------------- |
| Leaf | connects endpoints and acts as VTEP for VXLAN encapsulation/decapsulation |
| Spine | interconnects leaf switches and provides underlay transit/redundancy |
| Border leaf | connects fabric to external L2/L3 networks |
| Border spine | spine with external connectivity role, often in collapsed/smaller designs |

Traffic memory:

```text
east-west traffic: inside the fabric
north-south traffic: entering or leaving the fabric
```

---

# 3. BUM and MDT Pools

BUM means:

* Broadcast
* Unknown unicast
* Multicast

In EVPN-VXLAN, BUM traffic must be replicated across relevant VTEPs.

| Term | Practical meaning |
| ---- | ----------------- |
| BUM replication pool | multicast group range used to replicate BUM traffic in the fabric |
| MDT subnet pool | multicast distribution tree address pool used for multicast/BUM replication |

Interview answer:

```text
The MDT subnet pool provides multicast addresses used to build BUM replication groups. The BUM replication pool is the effective multicast group range used for broadcast, unknown unicast, and multicast traffic replication in the fabric.
```

---

# 4. Border Handoff

Border handoff connects the EVPN-VXLAN fabric to external networks.

Types:

| Type | Meaning |
| ---- | ------- |
| L2 handoff | extends VLAN/L2 service outside the fabric |
| L3 handoff | exchanges VRF/routes with external routed networks |

Border node responsibilities:

* import/export routes
* connect fabric to MPLS VPN, traditional L3, or other domains
* handle route-target mapping/stitching when required
* preserve segmentation across boundaries

Interview answer:

```text
Border handoff is how an EVPN fabric exchanges L2 or L3 connectivity with external domains. Border nodes act as gateways between the overlay fabric and outside networks.
```

---

# 5. EVPN vs SDA

| Area | EVPN | SD-Access |
| ---- | ---- | --------- |
| Common focus | data center/fabric overlay, multi-site, L2/L3 VPN | campus access automation and policy |
| Control plane | BGP EVPN | commonly LISP-based in SDA designs; Cisco platforms may support EVPN options depending on release/design |
| Segmentation | VRF/VNI and EVPN constructs | identity and policy-driven segmentation, often with Cisco ISE |
| Vendor model | standards-based and multi-vendor friendly | Cisco intent-based campus solution |
| Management | may use controller/API/manual automation | tightly integrated with Cisco DNA Center |

Avoid memorizing product dates from old notes. In interviews, explain the architectural difference and then qualify that exact feature support depends on platform and software release.

---

# 6. What Cisco DNA Center Is

Cisco DNA Center is a centralized network management and automation platform for intent-based networking.

Capabilities:

* device onboarding and provisioning
* policy-driven automation
* assurance and analytics
* network health visibility
* software image management
* security integration with identity/policy systems
* wired, wireless, and IoT visibility

Interview answer:

```text
DNAC centralizes network automation, assurance, and policy. For fabric-style networks, it helps provision, monitor, and enforce consistent network behavior instead of configuring devices one by one.
```

---

# 7. EVPN in DNAC

From an interview perspective:

```text
EVPN in a DNAC-managed fabric is about using BGP EVPN/VXLAN-style overlay concepts to provide scalable segmentation, L2/L3 services, automation, and policy-driven operations.
```

Benefits:

* scalable MAC/IP reachability
* less flood-and-learn dependency
* L2 and L3 VPN service support
* multi-tenancy and segmentation
* route exchange with external domains
* automation and operational consistency

---

# 8. Why EVPN Is Needed

EVPN is useful because it provides:

* scalable control-plane learning
* integrated L2 and L3 services
* multi-tenant segmentation
* resiliency and fast convergence
* better bandwidth efficiency than heavy flooding
* fabric automation compatibility

Shortcut answer:

```text
EVPN is needed because modern fabrics require scalable segmentation and reachability across many endpoints. EVPN uses BGP to advertise MAC/IP/VTEP information and VXLAN to carry traffic over an IP underlay.
```


# EVPN-VXLAN Fundamentals Revision

* VXLAN extends L2 over L3 using MAC-in-UDP.
* VXLAN UDP port: `4789`.
* VLAN has 4096 IDs; VXLAN has about 16M VNIs.
* VTEP encapsulates and decapsulates VXLAN traffic.
* EVPN adds a BGP-based control plane to VXLAN.
* MP-BGP carries EVPN address families.
* Underlay = physical routed transport.
* Overlay = logical tenant/service network.
* L2VNI maps bridged segments.
* L3VNI maps routed VRF traffic.

Shortcut:

```text
VXLAN = tunnel/data plane
EVPN = control plane
MP-BGP = distributes MAC/IP/VTEP reachability
```


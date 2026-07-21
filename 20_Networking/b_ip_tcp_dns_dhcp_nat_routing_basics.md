# IP, ARP, TCP/UDP, DHCP, DNS, RIP, and NAT Basics

This file incorporates networking fundamentals from `resume notes.docx`.

---

# 1. IPv4

IPv4 provides logical addressing at Layer 3.

* 32-bit address
* dotted-decimal format, for example `192.168.1.10`
* divided into network and host portions using subnet mask

Private IPv4 ranges:

| Range | Use |
| ----- | --- |
| `10.0.0.0/8` | private networks |
| `172.16.0.0/12` | private networks |
| `192.168.0.0/16` | private networks |

Special addresses:

| Address | Meaning |
| ------- | ------- |
| `0.0.0.0` | default route / unspecified |
| `127.0.0.1` | loopback |
| `169.254.x.x` | APIPA/link-local fallback |
| `255.255.255.255` | broadcast |

Interview answer:

```text
Public IPv4 addresses are globally routable on the internet. Private IPv4 addresses are used inside LANs and require NAT to reach the internet.
```

---

# 2. ARP

ARP maps an IPv4 address to a MAC address inside a local network.

Flow:

```text
Host A wants to send to 192.168.1.20
-> checks ARP cache
-> if missing, broadcasts "who has 192.168.1.20?"
-> Host B replies with MAC address
-> Host A caches mapping and sends frame
```

Security risk:

* ARP spoofing / ARP poisoning can redirect traffic to an attacker.

Mitigations:

* Dynamic ARP Inspection
* static ARP entries for critical devices
* encryption at higher layers such as HTTPS/IPsec

---

# 3. TCP vs UDP

Both work at Layer 4.

| Feature | TCP | UDP |
| ------- | --- | --- |
| Connection | connection-oriented | connectionless |
| Reliability | acknowledgments and retransmission | no delivery guarantee |
| Ordering | preserves order | no ordering guarantee |
| Speed | more overhead | lower overhead |
| Examples | HTTP/HTTPS, SSH, FTP, SMTP | DNS, DHCP, VoIP, gaming, live streaming |

Interview answer:

```text
TCP is reliable and ordered, so it is better for web browsing and file transfer. UDP is faster and lighter, so it is useful when realtime delivery matters more than perfect reliability.
```

---

# 4. DHCP

DHCP automatically assigns network settings.

Provides:

* IP address
* subnet mask
* default gateway
* DNS server
* lease time

DORA flow:

```text
Discover -> Offer -> Request -> Acknowledge
```

Ports:

* server: UDP 67
* client: UDP 68

Risk: rogue DHCP servers can provide malicious configuration.

---

# 5. DNS

DNS maps domain names to IP addresses.

Query flow:

```text
browser cache
-> OS cache
-> recursive resolver
-> root server
-> TLD server
-> authoritative server
-> IP returned
```

Record types:

| Record | Use |
| ------ | --- |
| A | hostname to IPv4 |
| AAAA | hostname to IPv6 |
| CNAME | alias |
| MX | mail server |
| NS | nameserver |
| PTR | reverse lookup |
| TXT | verification/security text |

Security concerns:

* DNS spoofing
* cache poisoning

Mitigations include DNSSEC and DNS over HTTPS.

---

# 6. RIP

RIP is a distance-vector routing protocol for small networks.

Key points:

* metric: hop count
* maximum hop count: 15
* UDP port 520
* slow convergence compared with modern protocols
* administrative distance: 120

Loop-prevention methods:

| Method | Meaning |
| ------ | ------- |
| Split horizon | do not advertise a route back to the router it came from |
| Poison reverse | advertise route back with infinite metric |
| Hold-down timer | wait before accepting unstable route changes |

Interview answer:

```text
RIP is not suitable for large networks because it has a 15-hop limit, slower convergence, and less efficient updates than OSPF, EIGRP, or BGP-based designs.
```

---

# 7. NAT and PAT

NAT maps private IP addresses to public IP addresses.

Types:

| Type | Meaning |
| ---- | ------- |
| Static NAT | one private IP maps to one public IP |
| Dynamic NAT | private IP maps to an available public IP from a pool |
| PAT / NAT overload | many private IPs share one public IP using ports |

PAT flow:

```text
192.168.1.2:12345 -> public-ip:5001 -> internet
response to public-ip:5001 -> router maps back to 192.168.1.2:12345
```

Interview answer:

```text
NAT translates private to public addresses. PAT is the most common NAT type, where many internal devices share one public IP by using different source ports.
```


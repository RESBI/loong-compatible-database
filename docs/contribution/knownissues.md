---
outline: deep
prev: false
next: false

---
# 常见问题

## 硬件

### 为什么没有部分硬件类型 {#why-are-some-hardware-types-not-available}

如果你所需要提交的硬件不包含在已知类型中，若为 USB 接口或 PCIe 接口的，请先归类到相应的类型后提交，若非这两种接口，则可以提出 issue 经过讨论后加入。

对于类型为机械硬盘的硬件，请注意我们不会接受 SAS 接口的机械硬盘的数据，因为目前龙芯平台并未提供 SAS 接口的主板，并且我们认为 SAS 接口硬盘的支持应该取决于磁盘阵列卡和 HBA 卡而不是平台本身。

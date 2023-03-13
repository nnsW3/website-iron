---
id: node
title: RPC Node commands
sidebar_label: Node
description: RPC Node | Iron Fish Documentation
hide_table_of_contents: false
---

import JsDisplay from '../../../src/theme/components/Terminal/JsDisplay'

## node/getLogStream

Gets a log stream from the node

#### Request

<JsDisplay js={`undefined
`} />

#### Response

<JsDisplay js={`{
  level: string
  type: string
  tag: string
  args: string
  date: string
}
`} />

## node/getStatus

Gets (and optionally streams) the node's status

#### Request

<JsDisplay js={`{
  stream?: boolean
} | undefined
`} />

#### Response

<JsDisplay js={`{
  node: {
    status: 'started' | 'stopped' | 'error'
    version: string
    git: string
    nodeName: string
  }
  cpu: {
    cores: number
    percentRollingAvg: number
    percentCurrent: number
  }
  memory: {
    heapMax: number
    heapTotal: number
    heapUsed: number
    rss: number
    memFree: number
    memTotal: number
  }
  miningDirector: {
    status: 'started'
    miners: number
    blocks: number
    blockGraffiti: string
    newBlockTemplateSpeed: number
    newBlockTransactionsSpeed: number
  }
  memPool: {
    size: number
    sizeBytes: number
    maxSizeBytes: number
    evictions: number
    recentlyEvictedCache: {
      size: number
      maxSize: number
    }
  }
  blockchain: {
    synced: boolean
    head: {
      hash: string
      sequence: number
    }
    headTimestamp: number
    newBlockSpeed: number
  }
  blockSyncer: {
    status: 'stopped' | 'idle' | 'stopping' | 'syncing'
    syncing?: {
      blockSpeed: number
      speed: number
      downloadSpeed: number
      progress: number
    }
  }
  peerNetwork: {
    peers: number
    isReady: boolean
    inboundTraffic: number
    outboundTraffic: number
  }
  telemetry: {
    status: 'started' | 'stopped'
    pending: number
    submitted: number
  }
  workers: {
    started: boolean
    workers: number
    queued: number
    capacity: number
    executing: number
    change: number
    speed: number
  }
  accounts: {
    scanning?: {
      sequence: number
      endSequence: number
      startedAt: number
    }
    head: {
      hash: string
      sequence: number
    }
  }
}
`} />

import Terminal from '../../../src/theme/components/Terminal/Terminal'
import GetStatus from '../../../src/theme/components/Terminal/rpc/GetStatus'

```
curl -X POST http://localhost:8021/node/getStatus
```

<Terminal command={GetStatus} />

## node/stopNode

Shuts the node down

#### Request

<JsDisplay js={`undefined
`} />

#### Response

<JsDisplay js={`undefined
`} />
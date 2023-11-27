# hcb.js

A npm package for the HCB transparency API

## Getting Started!

### CJS

```cjs
const { HCB } = require('hcb.js');
const hcb = new HCB();

// Get 100 transactions from hq's account
const transactions = hcb.transaction.allOrgTransactions({
	id: 'hq',
	per_page: 100
});
```

### ESM / TS

```ts
import { HCB } from 'hcb.js';
const hcb = new HCB();

// Get 100 transactions from hq's account
const transactions = hcb.transaction.allOrgTransactions({
	id: 'hq',
	per_page: 100
});
```

## Documentation

You can view our documentation here [here](https://sean.cyou/docs/hcb.js]

[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# JS Finite State Machine Challenge

For this challenge, you will create a simple [Finite-State
Machine](https://en.wikipedia.org/wiki/Finite-state_machine), represented by a
`SubwayGate`.

## Prerequisites

- [react-components-state](https://git.generalassemb.ly/ga-wdi-boston/react-components-state)
- [Object.defineProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

## Instructions

1. Fork and clone this repository.
1. Change into the new directory.
1. Install dependencies.
1. Create and checkout a new branch to work on.
1. Fulfill the listed requirements.

Starter code is available in [`lib/challenge.js`](lib/challenge.js). A pull
request is not required, but it is necessary if you want a code review.

You may wish to refer to [FAQs](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki) related to [forking and cloning](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone).

## Requirements

Implement a `SubwayGate` constructor function that represents a [Finite-State
Machine](https://en.wikipedia.org/wiki/Finite-state_machine). Each instance
should have its own immutable `_state` property that starts as `'closed'`. Each
instance of `SubwayGate` should have access to five methods: `state`,
`tapCard`, `insertTicket`, `exit`, and `walkThrough`.

Invoking the `state` method should return the value of `_state`.

The gate's `_state` should transition to `'open'` only under three circumstances:

- a `charlieCard` with a `monthlyValue` of `true` is tapped on the gate
- a `charlieTicket` with a high enough `value` (2.25) is inserted into the gate
- a person is `exit`ing the station

The gate's `_state` should only transition to `'closed'` when the `walkThrough`
method is invoked.

While the gate's `_state` is `'open'`, tapping a card or inserting a ticket
should not transition the state to `'closed'`, also no further `value` should
be deducted from the ticket.

The tests will handle the creation of the `charlieCard` and `charlieTicket`
which will look like so:

```js
const charlieCard = {
  monthlyValue: Boolean
}

const charlieTicket = {
  value: Number
}

module.exports = {
  charlieCard,
  charlieTicket
}
```

You must use them as parameters to your `tapCard` and `insertTicket` methods.

## Tasks

Developers should run these often!

- `grunt nag` or just `grunt`: runs code quality analysis tools on your code
  and complains.
- `grunt test`: runs any automated tests; may depend on `grunt build`.

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.

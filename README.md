# 1. Fallback
Look carefully at the contract's code below.
You will beat this level if
1. you claim ownership of the contract
2. you reduce its balance to 0

Things that might help
- How to send ether when interacting with an ABI
- How to send ether outside of the ABI
- Converting to and from wei/ether units -see help() command-
- Fallback methods

# 2. Fallout
Claim ownership of the contract below to complete this level.
  Things that might help:
- Solidity Remix IDE

# 3. Coin Flip
This is a coin flipping game where you need to build up your winning streak by guessing the outcome of a coin flip. To complete this level you'll need to use your psychic abilities to guess the correct outcome 10 times in a row.

# 4. Telephone
Claim ownership of the contract below to complete this level.
  Things that might help
- See the Help page above, section "Beyond the console"

# 5. Token
The goal of this level is for you to hack the basic token contract below.
You are given 20 tokens to start with and you will beat the level if you somehow manage to get your hands on any additional tokens. Preferably a very large amount of tokens.
  Things that might help:
- What is an odometer?

# 6. Delegation
The goal of this level is for you claim ownership of the instance you are given.
  Things that might help
- Look into Solidity's documentation on the `delegatecall` low level function, how it works, how it can be used to delegate operations to on-chain libraries, and what implications it has on execution scope.
- Fallback methods
- Method ids

# 7. Force
Some contracts will simply not take your money `¯\_(ツ)_/¯`
The goal of this level is to make the balance of the contract greater than zero.
  Things that might help:
- Fallback methods
- Sometimes the best way to attack a contract is with another contract.
- See the Help page above, section "Beyond the console"

# 8. Vault
Unlock the vault to pass the level!

# 9. King
The contract below represents a very simple game: whoever sends it an amount of ether that is larger than the current prize becomes the new king. On such an event, the overthrown king gets paid the new prize, making a bit of ether in the process! As ponzi as it gets xD
Such a fun game. Your goal is to break it.
When you submit the instance back to the level, the level is going to reclaim kingship. You will beat the level if you can avoid such a self proclamation.

# 10. Re-entrancy
The goal of this level is for you to steal all the funds from the contract.
  Things that might help:
- Untrusted contracts can execute code where you least expect it.
- Fallback methods
- Throw/revert bubbling
- Sometimes the best way to attack a contract is with another contract.
- See the Help page above, section "Beyond the console"

# 11. Elevator
This elevator won't let you reach the top of your building. Right?
Things that might help:
- Sometimes solidity is not good at keeping promises.
- This `Elevator` expects to be used from a `Building`.

# 12. Privacy
The creator of this contract was careful enough to protect the sensitive areas of its storage.
Unlock this contract to beat the level.
Things that might help:
Understanding how storage works
Understanding how parameter parsing works
Understanding how casting works
Tips:
Remember that metamask is just a commodity. Use another tool if it is presenting problems. Advanced gameplay could involve using remix, or your own web3 provider.

# 13. Gatekeeper One
Make it past the gatekeeper and register as an entrant to pass this level.
Things that might help:
- Remember what you've learned from the Telephone and Token levels.
- You can learn more about the `msg.gas` special variable, or its preferred alias `gasleft()`, in Solidity's documentation (see [here](https://docs.soliditylang.org/en/v0.4.23/units-and-global-variables.html) and [here](https://docs.soliditylang.org/en/v0.4.23/control-structures.html#external-function-calls)).

# 14. Gatekeeper Two
This gatekeeper introduces a few new challenges. Register as an entrant to pass this level.
Things that might help:
- Remember what you've learned from getting past the first gatekeeper - the first gate is the same.
- The `assembly` keyword in the second gate allows a contract to access functionality that is not native to vanilla Solidity. See [here](https://docs.soliditylang.org/en/v0.4.23/assembly.html) for more information. The `extcodesize` call in this gate will get the size of a contract's code at a given address - you can learn more about how and when this is set in section 7 of the [yellow paper](https://ethereum.github.io/yellowpaper/paper.pdf).
- The `^` character in the third gate is a bitwise operation (XOR), and is used here to apply another common bitwise operation (see here). The Coin Flip level is also a good place to start when approaching this challenge.

# 15. Naught Coin
NaughtCoin is an ERC20 token and you're already holding all of them. The catch is that you'll only be able to transfer them after a 10 year lockout period. Can you figure out how to get them out to another address so that you can transfer them freely? Complete this level by getting your token balance to 0.
  Things that might help
- The [ERC20](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md) Spec
- The [OpenZeppelin](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts) codebase

# 16. Preservation
This contract utilizes a library to store two different times for two different timezones. The constructor creates two instances of the library for each time to be stored.
The goal of this level is for you to claim ownership of the instance you are given.
  Things that might help
- Look into Solidity's documentation on the `delegatecall` low level function, how it works, how it can be used to delegate operations to on-chain. libraries, and what implications it has on execution scope.
- Understanding what it means for `delegatecall` to be context-preserving.
- Understanding how storage variables are stored and accessed.
- Understanding how casting works between different data types.

# 17. Recovery
A contract creator has built a very simple token factory contract. Anyone can create new tokens with ease. After deploying the first token contract, the creator sent `0.5` ether to obtain more tokens. They have since lost the contract address.
This level will be completed if you can recover (or remove) the `0.5` ether from the lost contract address.

# 18. MagicNumber
To solve this level, you only need to provide the Ethernaut with a "Solver", a contract that responds to "whatIsTheMeaningOfLife()" with the right number.
Easy right? Well... there's a catch.
The solver's code needs to be really tiny. Really reaaaaaallly tiny. Like freakin' really really itty-bitty tiny: 10 opcodes at most.
Hint: Perhaps its time to leave the comfort of the Solidity compiler momentarily, and build this one by hand O_o. That's right: Raw EVM bytecode.
Good luck!

# 19. Alien Codex
You've uncovered an Alien contract. Claim ownership to complete the level.
  Things that might help
- Understanding how array storage works
- Understanding [ABI specifications](https://docs.soliditylang.org/en/v0.4.21/abi-spec.html)
- Using a very `underhanded` approach

# 20. Denial
This is a simple wallet that drips funds over time. You can withdraw the funds slowly by becoming a withdrawing partner.
If you can deny the owner from withdrawing funds when they call `withdraw()` (whilst the contract still has funds) you will win this level.

# 21. Shop
Сan you get the item from the shop for less than the price asked?
Things that might help:
- `Shop` expects to be used from a `Buyer`
- Understanding how `gas()` options works

-------

Helpers:
https://github.com/r1oga/ethernaut
https://github.com/STYJ/Ethernaut-Solutions
https://github.com/OpenZeppelin/ethernaut

import { accounts, contract } from '@openzeppelin/test-environment';
const { ether, balance } = require('@openzeppelin/test-helpers');
import assert = require('assert');

// Addresses
const [
    owner, // Contract owner
    attacker, // Attacker
] = accounts;

// Loads contracts
const Elevator = contract.fromArtifact('Elevator');
const ElevatorAttack = contract.fromArtifact('ElevatorAttack');
let elevator: any;
let elevatorAttack: any;

beforeEach(async () => {
    elevator = await Elevator.new({ from: owner });
    elevatorAttack = await ElevatorAttack.new(elevator.address, { from: attacker });
});

it('Elevator -> be on the top floor', async () => {

    const floorBefore = await elevator.floor.call();
    const topBefore = await elevator.top.call();

    await elevatorAttack.attack(15, { from: attacker })

    const floorAfter = await elevator.floor.call();
    const topAfter = await elevator.top.call();

    assert(topBefore === false, 'top before');
    assert(topAfter === true, 'top after');
    assert(floorBefore.toString() === '0', 'floor before');
    assert(floorAfter.toString() === '15', 'floor after');
});
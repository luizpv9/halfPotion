var mongoose = require('mongoose');

var Stats = mongoose.Schema(
{
	hp: Number,
	mp: Number,
	stamina: Number,
	strength: Number,
	intelligence: Number,
	agility: Number,
	dexterity: Number,
	vitality: Number,
	luck: Number
});

var Class = mongoose.Schema(
{
	name: String,
	description: String,
	default_stats: Stats
});

var Race = mongoose.Schema(
{
	name: String,
	description: String,
	default_stats: Stats
});

var StaticItem = mongoose.Schema(
{
	name: String,
	description: String
});

var ConsumableItem = mongoose.Schema(
{
	name: String,
	description: String,
});

var User = mongoose.Schema(
{
	name: String,
	password: String,
	age: Number,
	stats: Stats
});
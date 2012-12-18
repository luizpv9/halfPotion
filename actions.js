var actions = {

	"talk" : 
	{
		example: "talk to Durandil",
		help: "Starts a <b>private chat</b> with the specified player",
		action: function(command)
		{
			if(command.indexOf('to') != -1)
			{
				var player = command.replace("talk to", "");
				// check for player...
			}
			else
			{
				return this.help;
			}
		}
	}, 
	
	"say"			: {}, // say Hello everyone!
	"shout"			: {}, // shout SHUT UP!
	"tell"			: {}, // tell Durandil It's time to go
	"open"			: {}, // open chest
	"take"			: {}, // take sword from ground
	"get"			: {}, // get sword from shelf
	"steal"			: {}, // steal sword from durandil (%)
	"taunt"			: {}, // taunt durandil Are you scared?
	"check"			: {}, // check fountain
	"look"			: {}, // look at fountain
	"examine"		: {}, // examine fountain
	"sneak"			: {}, // sneak by durandil (%)
	"greet" 		: {}, // greet durandil
	"drop" 			: {}, // drop map from bag
	"pick"			: {}, // pick map from ground
	"give" 			: {}, // give map to durandil
	"throw"			: {}, // throw sword at troll (%)
	"hide" 			: {}, // hide from durandil (%)

};
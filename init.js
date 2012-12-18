var actions = 
[
	{
		message: "Type the name of your character.",
		handle: function(command)
		{
			// Database code here
			return 1;
		}
	},
	
	{
		message: "No character found. Create new? (Y/N)",
		handle: function(command)
		{
			command = command.toLowerCase();
			if(command == 'n')
			{
				return -1;
			}
			else if(command == 's')
			{
				return 1;
			}
			else
			{
				return 0;
			}
		}
	},
	
	{
		message: ""
	}
];

module.exports = actions;
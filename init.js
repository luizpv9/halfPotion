var actions = 
[
  // 01
  {
    message: "Type the name of your character.",
    invalid: "Use only letters for your name.",
    help: "No help for this action",
    handle: function(command) {
      // Database code here
      return 1;
    }
  },
  
  // 02
  {
    message: "No character found. Create new? (Y/N)",
    help: "Type <Y> or <N>",
    handle: function(command) {
      command = command.toLowerCase();
      if(command == 'n') {
        return -1;
      } else if(command == 's') {
        return 1;
      } else {
        return ;
      }
    }
  },
  
  {
    message: "Character already exists."
  }
];

module.exports = actions;
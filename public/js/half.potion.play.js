var hP = {};

hP.Client = function(containerId, inputId, options) {

  this.options     = options || {};
  this.$container  = $('#'+containerId);
  this.$input      = $('#'+inputId);

  this.socket = null;


  var _this = this;
  this.$input.on('keypress', function(e) {
    if(e.which == 13) {
      // submit...
      var command = _this.$input.val();
      _this.$input.val('');
      _this.socket.emit('sendData', command);
    } 
  });
}

hP.Client.prototype = {
  begin: function() {
    this.socket = io.connect(this.options.connectAddres 
      || "http://127.0.0.1:2222/");

    var _this = this;
    this.socket.on('updateContent', function(data) {
      _this.$container.append('<br>');
      _this.$container.append(data);
    });
  }
};
function stopwatch(elem) {
  var time = 0;
  var interval;
  var offset;

  function update() {
    time += delta();
    var formattedTime = timeFormater(time);
    elem.textContent = formattedTime;
  };
  function delta() {
    var now = Date.now();
    var timePassed = now - offset;
    offset = now;
    return timePassed;
  };

  function timeFormater(timeInSeconds) {
    var time = new Date(timeInSeconds);
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();

    if(minutes.length < 2){
      minutes = '0' + minutes;
    }

    if(seconds.length < 2){
      seconds = '0' + seconds;
    }

    return minutes + ':' + seconds;
  }; //formats time as 00:00

  this.isOn = false; // stopwatch stats off
  this.start = function() {
    if(!this.isOn){
      interval = setInterval(update,1000);
      offset = Date.now();
      this.isOn = true;
    }
  }; //tells the stopwatch when to start
  this.stop = function() {
    if(this.isOn){
      clearInterval(interval);
      interval= null;
      this.isOn = false;
    }
  }; //tells the stopwatch when to stop
  this.reset = function() {
    time = 0;
  }; //tells the stopwatch when to restart
}

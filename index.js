var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var Pomodoro = function (_React$Component) {_inherits(Pomodoro, _React$Component);
  function Pomodoro(props) {_classCallCheck(this, Pomodoro);var _this = _possibleConstructorReturn(this, (Pomodoro.__proto__ || Object.getPrototypeOf(Pomodoro)).call(this,
    props));_this.
















    incrementSession = function () {
      if (_this.state.sessionTime < 60) {
        _this.setState({
          sessionTime: _this.state.sessionTime += 1,
          minutes: _this.state.minutes += 1 });

      }};_this.

    decrementSession = function () {
      if (_this.state.sessionTime > 0) {
        _this.setState({
          sessionTime: _this.state.sessionTime -= 1,
          minutes: _this.state.minutes -= 1 });

      }};_this.

    incrementBreak = function () {
      if (_this.state.breakTime < 60) {
        _this.setState({
          breakTime: _this.state.breakTime += 1 });

      }};_this.

    decrementBreak = function () {
      if (_this.state.breakTime > 0) {
        _this.setState({
          breakTime: _this.state.breakTime -= 1 });

      }};_this.

    startSession = function () {
      _this.timer = setInterval(_this.sessionTimer, 1000);
      _this.setState({
        sessionOn: true,
        minutes: _this.state.minutes * 60 });

      document.getElementById('start').style.display = 'none';

      document.getElementById('pause').style.display = 'inline';
    };_this.

    reStartSession = function () {
      _this.setState({
        sessionOn: true });

      _this.timer = setInterval(_this.sessionTimer, 1000);
      document.getElementById('start').style.display = 'none';

      document.getElementById('pause').style.display = 'inline';

      document.getElementById('restart').style.display = 'none';
    };_this.

    sessionTimer = function () {
      if (_this.state.minutes % 60 >= 10 && _this.state.sessionOn) {
        _this.setState({
          display: Math.floor(_this.state.minutes / 60) + ':' + _this.state.minutes % 60,
          minutes: _this.state.minutes -= 1 });

      } else
      if (_this.state.minutes > 0 && _this.state.sessionOn) {
        _this.setState({
          display: Math.floor(_this.state.minutes / 60) + ':0' + _this.state.minutes % 60,
          minutes: _this.state.minutes -= 1 });

      } else
      if (_this.state.minutes === 0) {
        _this.buzzer(_this.state.minutes);
        _this.state.count += 1;
        _this.breakCountdown();
      } else
      {
        clearInterval(_this.timer);
      }
    };_this.

    pauseTimer = function () {
      clearInterval(_this.timer);
      document.getElementById('pause').style.display = 'none';

      document.getElementById('restart').style.display = 'inline';
    };_this.

    breakCountdown = function () {
      if (_this.state.count % 2 != 0) {
        _this.setState({
          minutes: _this.state.breakTime * 60,
          display: Math.floor(_this.state.minutes / 60) + ':0' + _this.state.minutes % 60,
          workState: 'Have A Break...' });

        clearInterval();
      } else {
        _this.resetSession();
      }
    };_this.


    resetSession = function () {
      _this.setState({
        sessionTime: 25,
        breakTime: 5,
        sessionOn: false,
        minutes: 25,
        display: 25 + ':00',
        workState: 'Get Working!' });

      clearInterval(_this.timer);

      document.getElementById('start').style.display = 'inline';

      document.getElementById('pause').style.display = 'none';

      document.getElementById('restart').style.display = 'none';
    };_this.

    startBreak = function () {
      _this.setState({
        minutes: _this.state.breakTime });

      setInterval(_this.breakTimer, 1000);
    };_this.

    breakTimer = function () {
      if (_this.state.breakTime > 0) {
        _this.setState({
          breakTime: _this.state.breakTime - 1,
          display: Math.floor(_this.state.minutes / 60) + ':' + _this.state.minutes % 60 });
      } else {
        _this.setState({
          display: _this.state.minutes });

        _this.startSession();
      }
    };_this.state = { sessionTime: 25, breakTime: 5, sessionOn: false, minutes: 25, workState: 'Get Working!', count: 0, display: 25 + ':00' };_this.timer = null;return _this;}_createClass(Pomodoro, [{ key: 'componentWillUnmount', value: function componentWillUnmount() {clearInterval(this.timer);} }, { key: 'buzzer', value: function buzzer(

    clock) {
      if (clock === 0) {
        this.countdownSound.play();
      }
    } }, { key: 'render', value: function render()



    {var _this2 = this;
      return (
        React.createElement('div', null,
          React.createElement('h1', { id: 'title' }, 'Mr. Pomodoro'),
          React.createElement('div', { id: 'big-box', 'class': 'inner-container' },
            React.createElement('div', { 'class': 'inner-box' },
              React.createElement('div', { id: 'session-box' },
                React.createElement('h2', null, 'Session Length'),

                React.createElement('button', { onClick: this.decrementSession }, '-'),
                React.createElement('span', null, this.state.sessionTime, ' minutes'),
                React.createElement('button', { onClick: this.incrementSession }, '+'),
                React.createElement('br', null)),

              React.createElement('div', { id: 'break-box' },
                React.createElement('h2', null, 'Break Length'),

                React.createElement('button', { onClick: this.decrementBreak }, '-'),
                React.createElement('span', null, this.state.breakTime, ' minutes'),
                React.createElement('button', { onClick: this.incrementBreak }, '+'),
                React.createElement('br', null))),


            React.createElement('div', { id: 'timer', 'class': 'inner-box' },
              React.createElement('p', null, this.state.workState),
              React.createElement('span', { id: 'display-timer' }, this.state.display),
              React.createElement('br', null),
              React.createElement('button', { onClick: this.startSession, id: 'start' }, 'Start'),
              React.createElement('button', { onClick: this.pauseTimer, id: 'pause' }, 'Pause'),
              React.createElement('button', { onClick: this.reStartSession, id: 'restart' }, 'Restart'),
              React.createElement('button', { onClick: this.resetSession }, 'Reset'))),

          React.createElement('audio', { id: 'alarm', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3', ref: function ref(audio) {_this2.countdownSound = audio;} })));


    } }]);return Pomodoro;}(React.Component);



ReactDOM.render(React.createElement(Pomodoro, null), document.getElementById('app'));



// fix seconds timer into minutes (Math.floor stuff)

// include start stop as well as reset button

// move start reset button to under timer, add stop button to start button (or seperate ones), that sets isOn to false to stop it counting down more but doesnt reset it to 25 and 5
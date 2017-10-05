var Counter = React.createClass({
    /*faza inicjalizacji*/

    getDefaultProps: function() {
        console.log('Ustawiono domyslne propsy.');
    },

    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    componentWillMount(prevState) {
        console.log('Przed renderem');
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('button', {
                onClick: this.increment
            }, 'Dodaj 1'),
            React.createElement('button', {
                onClick: this.decrement
            }, 'Odejmij 1'),
            React.createElement('span', {}, 'Licznik ' + this.state.counter)
        );
    },

    componentDidMount(prevState) {
        if (this.state.counter === 0) {
            this.state.counter = 2;
            console.log('Komponent po renderze');
        }
    },

    /*faza aktualizacji*/

    componentWillReceiveProps: function() {
        console.log('Komponent otrzyma nowe propsy.');
    },

    shouldComponentUpdate: function() {
        console.log('\n Jeśli komponent wymaga aktualizacji');
        return true;
    },

    componentWillUpdate(nextState) {
        console.log('Aktualizacja komponentu');
    },

    componentDidUpdate(nextState) {
        if (this.state.counter === 5) {
            this.state.counter = 50;

            /* czy jest to dopuszczalne? */
            /*
            var element3 = React.createElement(Counter);
            ReactDOM.render(element3, document.getElementById('app-3'));
            */

            console.log('Komponent zaktualizowany');
        }
    },

    /*faza usuwania*/
    componentWillUnmount() {

        console.log('Usunieto komponent.');
    }
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app-1'));

var element2 = React.createElement(Counter);
ReactDOM.render(element2, document.getElementById('app-2'));
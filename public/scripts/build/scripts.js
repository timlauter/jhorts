document.addEventListener('DOMContentLoaded', function() {

    // create and open banner events
    var logo = document.getElementById('logo');
    var args = { content: 'Hello Paperless Post!' };

    var hello = new Banner(args);

    logo.addEventListener('click', function() {
        hello.open();
    });

    hello.init();
});

(function() {

    //****************************
    // Constructor
    //****************************
    this.Banner = function() {

        // constants
        this.width = 100;

        // default properties
        var defaults = {
            bgColor: '#41aec9', // blue
            content: " Thanks for checking out my app!",
            className: "hello-default",
        };

        // create this.options
        if (arguments[0] && typeof arguments[0] === "object") {
            this.options = optionsInit(defaults, arguments[0]);
        } else {
            this.options = defaults;
        }

    };

    //****************************
    // Public Methods
    //****************************

    Banner.prototype.init = function() {
        init.call(this);
        this.close.addEventListener('click', this.collapse.bind(this));

    };

    Banner.prototype.open = function() {
        this.banner.className = this.banner.className + ' open';
    };

    Banner.prototype.collapse = function() {
        var self = this;
        this.banner.className = this.banner.className.replace("open", "");
    };


    //****************************
    // Private Methods
    //****************************
    function optionsInit(defaults, args) {
        for (var i in args) {
            if (args.hasOwnProperty(i)) {
                defaults[i] = args[i];
            }
        }
        return defaults;
    }

    function init() {
        var message;
        var container;
        var partial;

        message = this.options.content;
        partial = document.createDocumentFragment();

        this.banner                       = document.createElement('div');
        this.banner.className             = this.options.className;
        this.banner.style.width           = this.width + "%";
        this.banner.style.backgroundColor = this.options.bgColor;

        this.close = document.createElement('button');
        this.close.className = "collapse";
        this.close.innerHTML = "x";
        this.banner.appendChild(this.close);

        container = document.createElement('div');
        container.className = 'hello-container';
        container.innerHTML = message;

        this.banner.appendChild(container);
        partial.appendChild(this.banner);

        document.body.insertBefore(partial, document.body.firstChild);
    }

})();

YUI.add('moveitview-tests', function (Y) {
    "use strict";
    var test;

    test = new Y.Test.Case({
        name: "Move it view tests",
        setUp: function () {
            this.view = new Y.my.MoveItView({
                container: '.container'
            });
        },

        tearDown: function () {
            this.view.destroy();
            delete this.view;
        },

        "Test render": function () {
            var container = this.view.get('container');

            this.view.render();
            Y.Assert.isTrue(
                container.hasClass('is-moveitview-rendered'),
                "The view container should get the 'rendered' class"
            );
            container.all('button').each(function (button) {
                Y.Assert.isFalse(button.get('disabled'), "The button should be enabled");
            });
        },

        "Test move it button": function () {
            var container = this.view.get('container'),
                button = container.one('.moveit');

            this.view.render();
            button.simulateGesture('tap', Y.bind(function () {
                this.resume(function () {
                    Y.Assert.isTrue(
                        button.get('disabled'),
                        "The button should be disabled"
                    );
                    Y.Assert.isTrue(
                        container.hasClass('moveitview-shake'),
                        "The container should have the 'shake' class"
                    );
                });
            }, this));
            this.wait();
        },
    });

    Y.Test.Runner.setName("Move it view tests");
    Y.Test.Runner.add(test);
}, '0.0.1', {requires: ['test', 'moveitview', 'node-event-simulate' /* and others dependencies for the test */]});


YUI.add('moveitview', function (Y) {
    "use strict";

    /**
     * Provides the move it view
     *
     * @module moveitview
     */

    Y.namespace('my');

    Y.my.MoveItView = Y.Base.create('moveItView', Y.View, [], {
        events: {
            '.moveit': {
                'tap': '_uiMoveIt'
            },
        },

        /**
         * moveit button tap event handler
         *
         * @protected
         * @method _uiMoveIt
         * @param {Object} e tap event facade
         */
        _uiMoveIt: function (e) {
            this.get('container').addClass('moveitview-shake');
            e.currentTarget.set('disabled', true);
        },

        /**
         * Renders the view
         *
         * @method render
         */
        render: function () {
            this.get('container')
                .addClass('is-moveitview-rendered')
                .all('button').set('disabled', false);
        },
    });
}, '0.0.1', {requires: ['event-tap', 'node', 'view']});

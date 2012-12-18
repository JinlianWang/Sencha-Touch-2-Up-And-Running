Ext.define('Chapter4Views.view.ButtonDemo', {
    extend: 'Ext.Panel',
    xtype: 'buttondemo',
    config: {
        scrollable: true,
        defaults: {
            xtype: 'button',
            margin: 5
        },
        layout: {
            type: 'vbox',
            align: 'center'
        },
        items: [{
            xtype: 'label',
            html: 'Buttons can have badges:'
        }, {
            text: 'Unread',
            badgeText: '42'
        }]
    },

    initialize: function (component, eOpts) {
        // Add a button for each UI type
        this.add({
            xtype: 'label',
            html: 'Different types of UIs:'
        });
        var uis = ['action', 'back', 'confirm', 'decline', 
                   'forward', 'normal', 'plain', 'round'];
        Ext.Array.each(uis, function (ui) {
            this.add({
                ui: ui,
                text: ui
            });
        }, this);

        // Add a button for each icon type
        this.add({
            xtype: 'label',
            html: 'Different types of icons: (remember to set "iconMask: true" for the icons to appear!)'
        });
        var icons = ['action', 'add', 'arrow_down', 'arrow_left',
                    'arrow_right', 'arrow_up', 'bookmarks', 'compose', 
                    'delete', 'download', 'favorites', 'home', 'info', 
                    'locate', 'maps', 'more', 'organize', 'refresh', 
                    'reply', 'search', 'settings', 'star', 'team', 
                    'time', 'trash', 'user'];
        var iconAlignments = ['top', 'right', 'bottom', 'left', 'center'];
        var length = iconAlignments.length;
        var counter = -1;
        Ext.Array.each(icons, function (icon) {
            var align = iconAlignments[++counter % length];
            this.add({
                iconCls: icon,
                text: icon,
                iconMask: true,
                iconAlign: align
            });
        }, this);
    }
});


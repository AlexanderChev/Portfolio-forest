export default function dialogue(content, title) {
    $('<div />').qtip({
        content: {
            text: content,
            title: title
        },
        position: {
            my: 'center', at: 'center',
            target: $(window)
        },
        show: {
            ready: true,
            modal: {
                on: true,
                blur: false
            }
        },
        hide: false,
        style: 'dialogue',
        events: {
            render: function(event, api) {
                $('button', api.elements.content).click(function(e) {
                    api.hide(e);
                });
            },
            hide: function(event, api) { api.destroy(); }
        }
    });
}
{
    'name': 'Web Gantt View',
    'category': 'Project',
    'version': '17.0.1.0',
    'summary': 'Gantt View Basic Example ',
    'depends': [
        'project','web','base'
    ],
    'assets': {
        'web.assets_backend': [
            'web_gantt/static/src/xml/gantt_view.xml',
            'web_gantt/static/src/js/gantt_controller.js',
            'web_gantt/static/src/js/gantt_renderer.js',
            'web_gantt/static/src/js/gantt_model.js',
            'web_gantt/static/src/js/gantt_view.js',
            'web_gantt/static/src/js/gantt_arch_parser.js',
        ]
    },
    'installable': True,
    'auto_install': False,
    'application': False,
}

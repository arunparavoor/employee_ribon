{
    'name': 'Employee Attendance Status Ribbon or badge',
    'summary': """Ribbon or badge for easy identification, based on the entered attendance information in List and Kanban view. Javascript widget.""",
    'version': '15.0',
    'license': "LGPL-3",
    'description': """Ribbon or badge for easy identification, based on the entered attendance information in List and Kanban view. Javascript widget.""",
    'author': 'Arun Reghu Kumar',
    'company': 'Tech4Logic',
    'website': 'https://tech4logic.wordpress.com/',
    'category': 'HR',
    'depends': ['base', 'hr','hr_attendance'],
    'data': [
            'views/hr_employee_view.xml',
        ],
    'qweb': [],
    'assets': {
        'web.assets_backend': [
            'employee_ribon/static/src/js/employee_ribon.js',
            'employee_ribon/static/src/css/employee_ribon.css',
        ],
    },
    'images': ['static/description/banner.jpg'],
    'demo': [],
    'installable': True,
    'auto_install': False,

}

export const PROJECTS = [
    {
        title: 'Control de Proyectos Gedeka Gas',
        slug: 'sistema-control-gedekagas',
        category: 'Fullstack',
        date: '22-12-22',
        content: {
            abstract:
                'Mediante el uso de tecnologías se construye un sistema con el propósito de permitir y tener el control de los proyectos de la empresa, además se construye una interfáz del lado del cliente que permite la gestión de los recursos y otra para el usuario final con fin permitirle acceso a un dashboard donde puede navegar por los modulos del sistema.',
            description:
                'El sistema fue diseñado para tener un control del inventario y proyectos de la empresa. Incluye módulos para administrar proyectos, proveedores, categorías, ciudades, materiales, ingreso y salida de material, clientes, reportes y usuarios con roles específicos. Su objetivo principal es llevar un seguimiento preciso de los proyectos, el personal asignado y el material utilizado.',
            technologies: [
                {
                    name: 'Laravel',
                    use: 'Framework de desarrollo de aplicaciones web',
                },
                { name: 'MySQL', use: 'Gestion de base de datos' },
                {
                    name: 'Blade',
                    use: 'Motor de plantillas HTML',
                },
                { name: 'PHP', use: 'Lenguaje de programación del lado del servidor' },
                { name: 'JavaScript', use: 'Tecnología del lado del cliente' },

               
            ],
            features: {
                intro: '',
                list: [
                    'Control de Usuarios: Permite que el usuario inicie sesión y tenga ingreso al sistema deacuerdo a su rol.',
                    'Monitoreo de proyectos: Permite al administrador ver que trabajadores y materiales fueron asignados al proyecto.',
                    'Imagenes de cada proyecto: Permite al usuario capturar imagenes para ver en que proceso esta el proyecto',
                    'Informes del Proyecto: Permite al administrador ver los detalles de cada proyecto',
                ],
            },
            images: {
                cover: '/images/imgproject/gedekaimg.jpg',
                mockup: '/images/imgproject/gdg3.jpg',
                responsive: '/images/imgproject/gdg2.jpg',
                screenshot: '/images/imgproject/gdg1.jpg',
            },
        },
        link: '',
        repo: '',
    },
   
    {
        title: 'Sis Liquid',
        slug: 'sis-liquid-app',
        category: 'Fullstack',
        date: '22-12-23',
        content: {
            abstract:
                'Arcis Veritas, una empresa que se dedica al comercio exterior en el área de minería y recursos estratégicos, ha emprendido un proceso innovador al desarrollar una aplicación web. Esta aplicación tiene como objetivo principal proporcionar una interfaz gráfica que facilita el registro de términos y materiales, agilizando así el proceso de creación y registro de liquidaciones conforme a los respectivos materiales. Este enfoque innovador refleja nuestro compromiso continuo con la eficiencia y la excelencia en el sector.',
            description:
                'El sistema está pensado para que los usuarios puedan generar liquidaciones atraves de los formularios de registro, para ello se diseña y construye una interfaz que le permite al usuario tener los modulos en un dashboard lo cual permite tener un control respecto a las liquidaciones de la empresa. \nEl proyecto está construido con el framework laravel v.8 para la construcción del backend y blade para el fornted junto a bootstrap y java script por el lado del cliente para tener una mejor interacción entre usuario y sistema.',
            technologies: [
                {
                    name: 'Laravel',
                    use: 'Framework de desarrollo de aplicaciones web',
                },
                { name: 'MySQL', use: 'Gestion de base de datos' },
                {
                    name: 'Blade',
                    use: 'Motor de plantillas HTML',
                },
                { name: 'PHP', use: 'Lenguaje de programación del lado del servidor' },
                { name: 'JavaScript', use: 'Tecnología del lado del cliente' },

            ],
            features: {
                intro: 'Esta aplicación consiste en un login sencillo mediante el cual accede a las principales de funciones que le permiten hacer consultas a modelos de inteligencia articial.',
                list: [
                    'Autenticación: Sistema que permite al usuario inciar sesión con una cuenta existente.',
                    'Generar liquidaciones: Al llenar los formularios correspondientes se genera la liquidación.',
                    'Generar Reportes: Permite generar reportes en un rango determinado por el usuario.',
                    'Guardar archivos en el store',
                    'Generar ilutraciones de cada galpon: Genera una ilustración de su respectivo galpon, lo cual permiten realizar el registro de entradas y salidas para un mejor control del material.',
                ],
            },
            images: {
                cover: '/images/imgproject/siscot.jpg',
                mockup: '/images/imgproject/sis-cot-2.jpg',
                responsive: '/images/imgproject/siscot-3.jpg',
                screenshot: '/images/imgproject/siscot-4.jpg',
            },
        },
        link: '',
        repo: '',
    },
    {
        title: 'Account Solutions Bolivia',
        slug: 'account-solutions',
        category: 'Full Stack',
        date: '11-02-24',
        content: {
            abstract:
                'Aplicación web para ofrecer servicios de contaduria, cursos y información de la empresa, cuenta con tecnologías de backend y frontend.',
            description:
                'El proyecto consiste en mostrar en la pagina web todos los servicios que ofrece la empresa respecto al area de contaduria, tambien ofrece a los usuarios poder registrarse en los cursos que ofrece. Otro servicio que brinda es el de verificación de certificados dados por la empresa. ',
            technologies: [
                {
                    name: 'Laravel',
                    use: 'Framework de desarrollo de aplicaciones web',
                },
                { name: 'MySQL', use: 'Gestion de base de datos' },
                {
                    name: 'Blade',
                    use: 'Motor de plantillas HTML',
                },
                { name: 'PHP', use: 'Lenguaje de programación del lado del servidor' },
                { name: 'JavaScript', use: 'Tecnología del lado del cliente' },
                { name: 'Ajax', use: 'Tecnología del lado del cliente y servidor' },
            ],
            features: {
                intro: 'La apllicación al estar conectada con un backend cuenta con diferentes funcones, listaré a continuación algunas de ellas.',
                list: [
                    'Autenticación: Sistema que permite al usuario inciar sesión con una cuenta existente.',
                    'Registro de Estudiantes para cursos: Permite al usuario registrarse en los cursos que ofrece la empresa.',
                    'Emisión y Verificación de Certificados: Permite al administrador emitir certificados a los estudiantes inscritos en los cursos, los cuales pueden ser verificados desde la web de la empresa con su respectivo id.',
                ],
            },
            images: {
                cover: '/images/imgproject/acs.jpg',
                mockup: '/images/imgproject/acs1.jpg',
                responsive: '/images/imgproject/acs2.jpg',
                screenshot: '/images/imgproject/acs3.jpg',
            },
        },
        link: 'https://accsolutionsbo.com/',
    },
    
]

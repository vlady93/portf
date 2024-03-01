import '@fontsource-variable/onest';
import { Navbar } from '@/components/Navbar'
import { DarkModeProvider } from './providers/DarkModeProvider'
import './globals.css'
import { Footer } from '@/components/Footer'

export const metadata = {
    metadataBase: new URL('https://cristianorrego.dev'),
    title: 'Vlady Dev 👨‍💻 | FullStack, React, Laravel, NodeJS, Desarrollo',
    description:
        'Hola 👋, soy Vlady HC Dev, profesional en Ingeniería en Sistemas y Desarrollador FullStack con más de 2 años de experiencia en TI creando soluciones web desde páginas web informativas hasta aplicaciones web para uso de empresas resolviendo problemas de rendimiento y ayudando en el arduo proceso de digitalización. Echa un vistazo al timeline donde resumo mi experiencia y encuentra al final mi curriculum actualizado.',
    openGraph: {
        title: 'Vlady Dev 👨‍💻 | FullStack, React, Laravel, NodeJS, Desarrollo',
        description:
            'Hola 👋, soy Vladimir, Ingeniero de Sistemas y Desarrollador FullStack con más de 2 años de experiencia. Este es mi portafolio personal, te invito a que conozcas un poco sobre mi trabajo.',
        images: ['/images/og.png'],
        siteName: 'vlady.dev',
        type: 'website',
        locale: 'es_ES',
        url: '',
        author: 'vladydev',
    },
}

export default function RootLayout({ children }) {
    return (
        <html suppressHydrationWarning lang="en" className="scroll-smooth">
            <body className="bg-dark-50 dark:bg-dark-950 ">
                <DarkModeProvider>
                    <Navbar />
                    {children}
                    <Footer />
                </DarkModeProvider>
            </body>
        </html>
    )
}

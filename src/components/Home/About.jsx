import { AiOutlineFileProtect } from 'react-icons/ai'
import { Container } from '../Container'
import { SectionTitle } from '../SectionTitle'
import Link from 'next/link'

export const About = () => {
    return (
        <Container id="sobre-mi">
            <SectionTitle>Sobre mí</SectionTitle>
            <div className="pt-12 md:pt-2">
                <div className="w-full">


                    <p className="mt-8 text-dark-700 dark:text-dark-200 md:w-11/12 text-pretty text-base">
                        Hola 👋, soy Vladimir Huanca Cruz,{' '}
                        <span className="font-bold text-primary-700 dark:text-yellow-500">Ingeniero en Sistemas</span>{' '}
                        y{' '}
                        <span className="font-bold text-primary-700 dark:text-yellow-500">
                            Desarrollador FullStack.
                        </span>{' '}
                        Soy un apasionado desarrollador web con amplia experiencia en el diseño y desarrollo de sitios y aplicaciones web. Mi trayectoria abarca desde la concepción hasta la implementación de diversos proyectos, destacando por garantizar calidad y rendimiento en cada línea de código. <br />
                        Mi enfoque integral incluye una gestión eficaz de bases de datos y la aplicación de pruebas exhaustivas para asegurar la excelencia en cada proyecto. Manteniéndome al tanto de las últimas tendencias y tecnologías, estoy comprometido con un aprendizaje constante, siempre buscando ofrecer soluciones innovadoras y eficientes. ¡Listo para aportar mi pasión y experiencia a proyectos desafiantes! 💻✨.{' '}

                    </p>
                    
                    <p className="mt-4 text-dark-700 dark:text-dark-200 md:w-11/12 text-pretty text-base">
                        Por último, comparto mi hoja de vida actualizada, donde de manera más detallada específico mi
                        experiencia laboral, logros y formación académica.
                    </p>
                </div>
            </div>
            <div className="flex justify-center w-full mt-8">
                <a
                    className="flex items-center gap-2 px-6 py-2 font-bold relative z-10 overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:rounded-full before:bg-yellow-600 before:-z-10 before:transition-all before:duration-300 before:hover:w-full text-dark-100 bg-dark-800 rounded-full hover:bg-dark-600 hover:shadow-md hover:shadow-yellow-800/50 ease duration-500"
                    href="https://drive.google.com/file/d/1EaoiNNjtdQhyd25fbreU19XvjmyOmmpc/view"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Curriculum <AiOutlineFileProtect />
                </a>
            </div>
        </Container>
    )
}

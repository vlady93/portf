import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { SectionTitle } from '../SectionTitle'
import { ProjectCard } from '../ProjectCard'
import { Container } from '../Container'
import { PROJECTS } from '@/helpers/projects'

const sorted = PROJECTS.sort((a, b) => {
    if (a.date < b.date) {
        return 1
    }
    if (a.date > b.date) {
        return -1
    }
    // a must be equal to b
    return 0
}).slice(0, 3)
export const Projects = async () => {
    return (
        <Container id="projects">
            <SectionTitle>Proyectos</SectionTitle>
            <p className="mt-6 text-dark-700 dark:text-dark-200">
                Explora mis proyectos de software, donde la dedicación a la programación se encuentra con la creación práctica. Cada proyecto refleja mi enfoque en transformar ideas en soluciones digitales concretas. Descubre cómo la programación puede marcar la diferencia en experiencias digitales.
            </p>
            <div className="grid md:grid-cols-4 gap-4 mt-6">
                <Link
                    href={`/projects/${sorted[0].slug}`}
                    className="relative bg-dark-100 shadow dark:shadow-primary-50/10 dark:bg-dark-900 w-full rounded-3xl min-h-[340px] md:col-span-2 p-1 group overflow-hidden"
                >
                    <figure className="w-full rounded-3xl overflow-hidden">
                        <img
                            className="w-full h-full min-h-[232px] object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-300"
                            src={sorted[0].content.images.cover}
                            alt={sorted[0].title}
                            loading="lazy"
                        />
                    </figure>
                    <div className="p-6">
                        <h1 className="font-bold text-lg text-primary-700 dark:text-yellow-500">{sorted[0].title}</h1>
                        <p className="line-clamp-3 mt-4 text-dark-700 dark:text-dark-200">
                            {sorted[0].content.description}
                        </p>
                        <ul className="flex gap-1 flex-wrap text-sm mt-4">
                            {sorted[0]?.content?.technologies.map((item, idx) => (
                                <li
                                    key={idx}
                                    className="rounded-full px-2 border-dark-200 dark:border-dark-800 bg-dark-300/60 dark:bg-primary-900/30 backdrop-blur-sm text-dark-700 dark:text-dark-200"
                                >
                                    {' '}
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <span className="absolute top-4 left-4 backdrop-blur-md bg-dark-600/50 py-1 px-2 rounded-full z-10 text-sm font-semibold text-dark-100 ">
                        {sorted[0].category}
                    </span>
                </Link>
                <Link
                    href={`/projects/${sorted[1].slug}`}
                    className="relative bg-dark-100 shadow dark:shadow-primary-50/10 dark:bg-dark-900 w-full rounded-3xl min-h-[340px] md:col-span-2 p-1 group overflow-hidden"
                >
                    <figure className="w-full rounded-3xl overflow-hidden">
                        <img
                            className="w-full h-full min-h-[232px] object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-300"
                            src={sorted[1].content.images.cover}
                            alt={sorted[1].title}
                            loading="lazy"
                        />
                    </figure>
                    <div className="p-6">
                        <h1 className="font-bold text-lg text-primary-700 dark:text-yellow-500">{sorted[1].title}</h1>
                        <p className="line-clamp-3 mt-4 text-dark-700 dark:text-dark-200">
                            {sorted[1].content.description}
                        </p>
                        <ul className="flex gap-1 flex-wrap text-sm mt-4">
                            {sorted[1]?.content?.technologies.map((item, idx) => (
                                <li
                                    key={idx}
                                    className="rounded-full px-2 border-dark-200 dark:border-dark-800 bg-dark-300/60 dark:bg-primary-900/30 backdrop-blur-sm text-dark-700 dark:text-dark-200"
                                >
                                    {' '}
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <span className="absolute top-4 left-4 backdrop-blur-md bg-dark-600/50 py-1 px-2 rounded-full z-10 text-sm font-semibold text-dark-100 ">
                        {sorted[1].category}
                    </span>
                </Link>

                <Link
                    href={`/projects/${sorted[2].slug}`}
                    className="relative bg-dark-100 shadow dark:shadow-primary-50/10 dark:bg-dark-900 w-full rounded-3xl min-h-[340px] md:col-span-4 md:flex md:flex-row-reverse md:items-center p-1 group overflow-hidden"
                >
                    <figure className="w-full rounded-3xl overflow-hidden md:w-1/2 md:h-full">
                        <img
                            className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-300"
                            src={sorted[2].content.images.cover}
                            alt={sorted[2].title}
                            loading="lazy"
                        />
                    </figure>
                    <div className="p-6 md:w-1/2">
                        <h1 className="font-bold text-lg text-primary-700 dark:text-yellow-500">{sorted[2].title}</h1>
                        <p className="line-clamp-3 mt-4 text-dark-700 dark:text-dark-200">
                            {sorted[2].content.description}
                        </p>
                        <ul className="flex gap-1 flex-wrap text-sm mt-4">
                            {sorted[2]?.content?.technologies.map((item, idx) => (
                                <li
                                    key={idx}
                                    className="rounded-full px-2 border-dark-200 dark:border-dark-800 bg-dark-300/60 dark:bg-primary-900/30 backdrop-blur-sm text-dark-700 dark:text-dark-200"
                                >
                                    {' '}
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <span className="absolute top-4 left-4 backdrop-blur-md bg-dark-600/50 py-1 px-2 rounded-full z-10 text-sm font-semibold text-dark-100 ">
                        {sorted[2].category}
                    </span>
                </Link>
            </div>
            <div className="flex justify-center w-full mt-8">
               
            </div>
        </Container>
    )
}

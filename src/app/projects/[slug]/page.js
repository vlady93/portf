import { ProjectBody } from '@/components/ProjectBody'
import { PROJECTS } from '@/helpers/projects'

export async function generateMetadata({ params }, parent) {
    const { slug } = params
    const project = PROJECTS.find((project) => project.slug === slug)
    const previousImages = (await parent).openGraph?.images || []
    return {
        metadataBase: new URL('https://portfolio-eight-eta-60.vercel.app/'),
        title: `Vlady Dev 👨‍💻 | ${project.title}`,
        description: project?.content?.abstract,
        openGraph: {
            title: `Vlady Dev 👨‍💻 | ${project.title}`,
            description: project?.content?.abstract,
            images: [project?.content?.images?.cover, ...previousImages],
            author: 'vladydev',
        },
    }
}
export default async function ProjectPage({ params }) {
    const { slug } = params
    const data = PROJECTS.find((project) => project.slug === slug)
    return (
        <>
            <ProjectBody data={data} />
        </>
    )
}

import { About } from '@/components/Home/About'
import { Articles } from '@/components/Home/Articles'
import { Banner } from '@/components/Home/Banner'
import { Experience } from '@/components/Home/Experience'
import { Projects } from '@/components/Home/Projects'
import { Stack } from '@/components/Home/Stack'
export default function Home() {
    return (
        <>
            <div className="absolute top-0 z-[-2] h-screen w-full bg-white dark:bg-dark-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(10,0,0.25),rgba(10,0,0,0))]"></div>
            <Banner />
            <Experience />
            <Projects />
            <About />
            <Stack />
        </>
    )
}

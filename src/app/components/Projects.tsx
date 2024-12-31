import ProjectsCard from "./ProjectsCard"

export default function Projects() {
    return (
        <div id="projects">
            <h3 className="section-heading">Checkout some of my <span className="grad-text">stellar</span> projects</h3>
            <ProjectsCard 
                name="Youtube Shorts Generator"
                desc="Full-stack website that creates Youtube shorts from a given reddit post. Generates a voice over, and subtitles for the post and overlays them on a short gameplay video."
                skills={["Django", "React", "Next.js", "MoviePy"]}
                isLeft={true}
                picLink="/yt-gen.png"
                vidLink="/yt-gen-vid.mp4"
                link="https://github.com/AndrewI26/Youtube-Shorts-Creator"
            />
            <ProjectsCard 
                name="Sorting Algorithm Visualizer"
                desc="Algorithm visualizer that supports bubble, insertion and selection sort. My highschool teacher contiues to use this project as a tool for new computer science students learning algorithms."
                skills={["Python", "Pygame"]}
                isLeft={false}
                picLink="/algo-pic.mp4"
                vidLink="/algo-vid.mov"
                link="https://github.com/AndrewI26/Algorithm-Visualizer"
            />
            <ProjectsCard 
                name="Flashcard Manager"
                desc="Website created to store, study and manage all of my flashcards. Stores flashcards persistantly on a Mongo database."
                skills={["React", "Express.js", "Node.js", "MongoDB"]}
                isLeft={true}
                picLink="/flashcards.jpg"
                vidLink="/fc-vid.mp4"
                link="https://github.com/AndrewI26/flashcard-wesbite"
            />
        </div>
    )
}
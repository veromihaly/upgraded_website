import React from "react";

function Projects() {
    return (
        <section id="projects" className="p-6">
            <h2 className="text-2xl font-bold text-red-500">Projects</h2>
            <div className="text-white">
                <h3>1. 3D Survival game made in Unity</h3>
                <p>Description:</p>
                <p>
                    A 3D survival RPG game I developed for my thesis project. The game allows players to either follow the main story or explore an open world where they can gather resources,
                    hunt animals, and survive. The project served as an opportunity to explore various aspects of Unity development, including script integration, animations, sound design,
                    and scene management.
                </p>
                <p>Technologies Used: Unity, C#, Visual Studio Code, Blender.</p>
                <p>Challenges & Solutions:</p>
                <p>
                    -Integrating all of the game's elements, such as AI, animations, and sounds, while keeping the code organized.
                    I leveraged Unity's prefab system to streamline the process.
                </p>
                <p>
                    -Sourcing the right prefabs and models from the Unity Store was a challenge.
                    I spent time experimenting with different assets to find ones that best fit the game's style and mechanics.
                </p>
                    -Implementing realistic animal movement required fine-tuning the AI. I used AI techniques to ensure smooth movement for animals in the environment.
                <p>
                    -I had to sync sounds with animal and player movements.
                    I created sound triggers in the game that would play specific sounds when the player or animals performed certain actions.
                </p>
                    -Designing a system to allow the player to pick up items from the environment involved writing scripts to detect interactions and manage the inventory.
                <p>
                    -Time Simulation: I implemented a day-night cycle by using Unity's time system to change the skybox and lighting, simulating the passing of days.
                </p>
                    -A key feature was making the player character's movement feel responsive, which involved working on character control scripts and implementing jumping mechanics.
                <p>
                    -Implementing a save system for player progress was challenging.
                    To allow players to save and load their progress, I used JSON files to serialize and deserialize data.
                    This method let me store information such as inventory items, player stats, and game progress, ensuring that players could resume from where they left off.
                </p>
                <p className="text-red-500 hover:text-[#ff6347] hover:underline visited:text-[#d32f2f]">
                    <a href="https://github.com/veromihaly/Wilderness_Odyssey" target="_blank">GitHub</a>
                </p>
            </div>
        </section>
    );
}

export default Projects;
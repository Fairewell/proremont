import React from 'react';
import { projects } from "../constants";
import StarsIcons from './StarsIcons';

const Projects = ({ id }) => {
    const project = projects.find(proj => proj.id === id);

    return (
<<<<<<< HEAD
        <div className="bg-gray-50 rounded-lg overflow-hidden m-5 max-w-xs h-auto">
=======
        <div className="bg-[#F5F5F5] rounded-lg shadow-md overflow-hidden m-5 max-w-xs h-auto">
>>>>>>> 709128051da1599220bf666ed3f4e9d57d0b040a
            <img src={project.path} alt="project_image" className="w-full h-auto object-cover rounded-lg" />
            <div className="p-4">
                <div className="grid grid-cols-2 gap-4">
                    <p className="text-lg font-semibold font-raleway lining-nums">{project.price}₽</p>
                    <div className="flex items-center justify-end">
                        <StarsIcons stars={project.stars} totalStars={5} />
                    </div>
                    <p className="text-sm font-semibold font-raleway lining-nums">{project.kvadratura}</p>
                    <p className="text-sm font-semibold text-right font-raleway lining-nums">{project.plowad}</p>
                    <p className="text-sm font-semibold font-raleway lining-nums">{`${project.floors}`}</p>
                    <p className="text-sm font-semibold text-right font-raleway lining-nums">{project.time}</p>
                </div>
                <div>
                    <p className="text-sm text-center font-bold font-raleway">{project.comms}</p>
                    <p className="text-sm text-right font-semibold font-raleway">{project.person}</p>
                </div>
            </div>
        </div>
    );
};

export default Projects;
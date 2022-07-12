import React from 'react';
import cryptoImg from '../public/assets/crypto.jpg';
import nftImg from  '../public/assets/nft.png';
import newsImg from  '../public/assets/news.png';
import uberImg from  '../public/assets/uber.png';
import ProjectItems from './ProjectItems';

const Projects = () => {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
                <h2 className='py-4'>What I've Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectItems 
                    title='CryptoTracker' 
                    backgroundImg={cryptoImg} 
                    projectUrl='/cryptoTracker' 
                    />
                    <ProjectItems 
                    title='Nftapp' 
                    backgroundImg={nftImg} 
                    projectUrl='/Nftapp' 
                    />
                    <ProjectItems
                    title='CryptoTracker' 
                    backgroundImg={newsImg} 
                    projectUrl='/cryptoTracker' 
                    />
                    <ProjectItems 
                    title='CryptoTracker' 
                    backgroundImg={uberImg} 
                    projectUrl='/cryptoTracker' 
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects;
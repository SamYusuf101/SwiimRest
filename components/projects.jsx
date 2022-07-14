/* eslint-disable */
import React from 'react';
import cryptoImg from '../public/assets/crypto.jpg';
import nftImg from  '../public/assets/nft.png';
import newsImg from  '../public/assets/news.png';
import uberImg from  '../public/assets/uber.png';
import uberdriverImg from  '../public/assets/uberdriver.jpg';
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
                    title='Nft App' 
                    backgroundImg={nftImg} 
                    projectUrl='/Nftapp' 
                    />
                    <ProjectItems 
                    title='UberEats UI' 
                    backgroundImg={uberImg} 
                    projectUrl='/UberEats' 
                    />
                    <ProjectItems 
                    title='UberEats Courier UI' 
                    backgroundImg={uberdriverImg} 
                    projectUrl='/UberDriver' 
                    />
                    <ProjectItems
                    title='News App' 
                    backgroundImg={newsImg} 
                    projectUrl='/Newsapp' 
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects;
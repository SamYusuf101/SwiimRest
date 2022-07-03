import React from 'react';
import Image from 'next/image';
import cryptoImg from '../public/assets/crypto.jpg';
import nftImg from  '../public/assets/nft.png';
import newsImg from  '../public/assets/news.png';
import uberImg from  '../public/assets/uber.png';
import Link from 'next/link';
import ProjectItems from './projectItems';

const Work = () => {
    return (
        <div className='w-full'>
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
                    title='CryptoTracker' 
                    backgroundImg={nftImg} 
                    projectUrl='/cryptoTracker' 
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

export default Work;
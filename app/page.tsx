import Intro from '@/components/Intro Secion/Intro'
import NewsletterForm from '@/components/news-letter-form';
import RecentPosts from '@/components/RecentPosts';
import RecentProjects from '@/components/RecentProjects';
import React from 'react'

function Home() {
  return (
    <section className='py-24'>
      <div className="container max-w-3xl">
      <Intro/>
      <RecentPosts/>
      <RecentProjects/>
      <NewsletterForm/>
      </div>
    </section>
  )
}

export default Home;

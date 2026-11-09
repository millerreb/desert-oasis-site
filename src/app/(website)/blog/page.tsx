import Blog from '@/components/Blog/Blog'
import React from 'react'
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("/blog");

const page = () => {
  return (
    <div>
      <Blog />
    </div>
  )
}

export default page

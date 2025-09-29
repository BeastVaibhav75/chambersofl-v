'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'

export default function BlogDetailPage() {
  const params = useParams<{ slug: string }>()
  const [post, setPost] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!params?.slug) return
    fetch(`/api/blogs/${params.slug}`)
      .then((r) => (r.ok ? r.json() : Promise.reject('Not Found')))
      .then(setPost)
      .catch(() => setError('Post not found'))
  }, [params?.slug])

  if (error) {
    return (
      <div className="pt-16 section-padding">
        <div className="container-custom text-center">
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="pt-16 section-padding">
        <div className="container-custom text-center">
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16 section-padding">
      <div className="container-custom max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-8">{post.excerpt}</p>
        <article className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />
        </article>
      </div>
    </div>
  )
}




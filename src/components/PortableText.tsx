import { PortableText as PortableTextReact } from '@portabletext/react'
import { urlForImage } from '@/../sanity/lib/image'
import Image from 'next/image'

const components = {
    types: {
        image: ({ value }: any) => {
            return (
                <div className="single-item-image my-40">
                    <img
                        src={urlForImage(value)?.url() || ''}
                        alt={value.alt || 'blog image'}
                        className="rounded-lg"
                    />
                    {value.caption && (
                        <p className="mt-10 text-center text-sm text-gray-400 italic">
                            {value.caption}
                        </p>
                    )}
                </div>
            )
        },
        code: ({ value }: any) => {
            return (
                <pre className="p-20 bg-gray-900 rounded-lg overflow-x-auto my-30 text-sm">
                    <code>{value.code}</code>
                </pre>
            )
        },
    },
    block: {
        h2: ({ children }: any) => (
            <h2 className="item_details_info_heading mb-30 mt-50">{children}</h2>
        ),
        h3: ({ children }: any) => (
            <h3 className="item_details_info_heading mb-25 mt-40">{children}</h3>
        ),
        h4: ({ children }: any) => (
            <h4 className="item_details_info_heading mb-20 mt-30">{children}</h4>
        ),
        blockquote: ({ children }: any) => (
            <blockquote className="border-l-4 border-blue-500 pl-20 italic my-30">
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }: any) => (
            <ul className="iconlist_block list-unstyled my-30">{children}</ul>
        ),
        number: ({ children }: any) => (
            <ol className="iconlist_block numlist_block list-unstyled my-30">{children}</ol>
        ),
    },
    listItem: {
        bullet: ({ children }: any) => (
            <li><span className="iconlist_text">{children}</span></li>
        ),
        number: ({ children }: any) => (
            <li><span className="iconlist_text">{children}</span></li>
        ),
    },
    marks: {
        link: ({ children, value }: any) => {
            const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
            return (
                <a
                    href={value.href}
                    rel={rel}
                    className="text-blue-400 hover:text-blue-300 transition"
                >
                    {children}
                </a>
            )
        },
    },
}

export function PortableText({ value }: { value: any[] }) {
    return <PortableTextReact value={value} components={components} />
}

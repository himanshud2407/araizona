export function formatDate(date: string) {
    return new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })
}

export function calculateReadingTime(content: any[]) {
    const wordsPerMinute = 200
    const text = content
        ?.map((block) => {
            if (block._type !== 'block' || !block.children) return ''
            return block.children.map((child: any) => child.text).join(' ')
        })
        .join(' ')
    const words = text?.split(/\s+/g).length || 0
    return Math.ceil(words / wordsPerMinute)
}

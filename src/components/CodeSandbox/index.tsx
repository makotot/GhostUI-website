import * as React from 'react'

export const CodeSandbox = ({path,title}: {path: string, title: string}) => {
  return (
    <iframe
      src={`https://codesandbox.io/embed/${path}?fontsize=14&theme=light`}
      style={{ width: '100%', height:'500px', border: 'none', borderRadius: '4px', overflow: 'hidden' }}
      title={title}
    />
  )
}

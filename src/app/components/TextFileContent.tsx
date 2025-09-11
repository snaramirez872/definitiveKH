export default function TextFileContent({ text }: { text: string }) {
    return <p dangerouslySetInnerHTML={{ __html: text }} />
}
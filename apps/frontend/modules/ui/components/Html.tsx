export default function Html({ value, tag, ...props }: any) {
	const Component = tag || 'div'
	return (
		value && <Component {...props} dangerouslySetInnerHTML={{ __html: value }} />
	)
}

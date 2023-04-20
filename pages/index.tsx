import Link from 'next/link'

export default function IndexPage() {
  return (
    <script defer src="/_vercel/insights/script.js"></script>
    <button
      onClick={() =>{
        va.track('Signup');
        // ... other logic
      }}
    >
      Sign Up</button>
  )
}

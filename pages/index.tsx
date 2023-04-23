import Link from 'next/link';

export default function IndexPage() {
  return (
    <script>
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
</script>
    <script defer src="/_vercel/insights/script.js"></script>
    <button
      onClick={() => {
        va.track('Signup');
        // ... other logic
      }}
    >
      Sign Up
    </button>
  )
}

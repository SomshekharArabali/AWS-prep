// app/page.tsx
export default function MaintenancePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        🚧 We'll Be Right Back!
      </h1>
      <p className="text-lg text-gray-600 max-w-xl mb-6">
        The site is currently down for maintenance as we make improvements. We'll be back online shortly.
      </p>
      <div className="text-sm text-gray-500">Thanks for your patience 🙏</div>
    </div>
  )
}

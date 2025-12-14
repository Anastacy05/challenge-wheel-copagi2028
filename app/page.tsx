import WheelOfDares from './components/WheelOfDares'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-500 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">
			Roue à Gages
		</h1>
        <WheelOfDares />
      </div>
    </main>
  )
}

import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Navigation */}
      <nav className="border-b bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Bingely
            </span>
          </div>
          <div className="flex gap-3">
            <Link to="/login">
              <Button variant="ghost">Zaloguj się</Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Rozpocznij
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1.5 bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
            Twój osobisty dziennik seriali
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Śledź, oceniaj i{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              odkrywaj
            </span>{' '}
            seriale
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
            Twórz listy ulubionych seriali, dziel się opiniami z innymi fanami i odkrywaj nowe produkcje dostosowane do Twoich gustów.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-6"
              >
                Dołącz za darmo
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-lg px-8 py-6"
            >
              Zobacz jak działa
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                10K+
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                Seriali
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                50K+
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                Użytkowników
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                1M+
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                Recenzji
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="container mx-auto" />

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Wszystko czego potrzebujesz
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Bingely to więcej niż lista seriali. To kompletne narzędzie dla każdego miłośnika seriali.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature Card 1 */}
          <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-200 dark:border-slate-800">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-950 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Śledź swoje postępy</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Oznaczaj obejrzane odcinki i sezony. Nigdy nie zapomnij, na którym miejscu skończyłeś oglądanie.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-200 dark:border-slate-800">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Oceniaj i recenzuj</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Dziel się swoimi opiniami z społecznością. Wystawiaj oceny i pisz recenzje swoich ulubionych seriali.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-200 dark:border-slate-800">
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-950 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Odkrywaj nowe tytuły</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Otrzymuj personalizowane rekomendacje na podstawie Twoich gustów i tego, co oglądają inni.
            </p>
          </div>

          {/* Feature Card 4 */}
          <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-200 dark:border-slate-800">
            <div className="w-12 h-12 bg-pink-100 dark:bg-pink-950 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-pink-600 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Twórz listy</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Organizuj seriale w własne kolekcje. Twórz listy "Do obejrzenia", "Ulubione" i wiele innych.
            </p>
          </div>

          {/* Feature Card 5 */}
          <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-200 dark:border-slate-800">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-950 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Dołącz do społeczności</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Poznaj innych fanów seriali. Dziel się rekomendacjami i dyskutuj o ulubionych produkcjach.
            </p>
          </div>

          {/* Feature Card 6 */}
          <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-200 dark:border-slate-800">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-950 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Statystyki i analityka</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Zobacz swoje statystyki oglądania, ulubione gatunki i ile czasu spędziłeś na serialach.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-center text-white shadow-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Gotowy, by zacząć?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Dołącz do tysięcy miłośników seriali już dziś. To całkowicie darmowe!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-purple-600 hover:bg-slate-100 text-lg px-8 py-6"
              >
                Stwórz darmowe konto
              </Button>
            </Link>
            <Link to="/login">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white text-white hover:bg-white/10 text-lg px-8 py-6"
              >
                Mam już konto
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="font-semibold text-slate-700 dark:text-slate-300">
                Bingely
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              © 2024 Bingely. Twój osobisty dziennik seriali.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export const WorkingOn = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-center px-6">
      <div className="animate-pulse text-red-600 mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-24 w-24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 7.5l9-4.5 9 4.5M3 7.5v9l9 4.5m-9-13.5l9 4.5m0 13.5l9-4.5v-9m-9 13.5v-9m9-4.5l-9 4.5"
          />
        </svg>
      </div>

      {/* Título grande */}
      <h1 className="text-4xl font-extrabold text-white tracking-wide mb-3">
        Funcionalidad en desarrollo
      </h1>

      {/* Subtexto */}
      <p className="text-gray-300 max-w-md mb-8">
        Estamos mejorando esta sección para ofrecerte una experiencia épica. Vuelve pronto para
        descubrir lo que estamos preparando.
      </p>

      {/* Botón */}
      <a
        href="/home"
        className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-lg rounded-lg transition-all duration-200 shadow-lg shadow-red-900/40"
      >
        Volver al inicio
      </a>
    </div>
  )
}

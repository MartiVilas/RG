export const WorkingOn = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center px-6">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-lg max-w-md flex flex-col items-center">
        <span className="text-5xl mb-4">🛠️</span>

        <h1 className="text-3xl font-bold text-white mb-2">
          Estamos trabajando en ello
        </h1>

        <p className="text-gray-300 mb-6">
          Esta sección aún no está lista, pero pronto estará disponible.  
          Gracias por tu paciencia.
        </p>

        <a
          href="/home"
          className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all duration-200"
        >
          Volver al inicio
        </a>
      </div>
    </div>
  )
}

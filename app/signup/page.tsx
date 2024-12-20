export default function SignInPage() {
  return (
    <div className="flex h-screen bg-gray-50 shadow-lg">
      
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-2xl p-14 space-y-8 bg-white rounded-2xl ">
         
          <button className="w-full flex items-center justify-center gap-3 px-6 py-4 border rounded-lg text-lg hover:bg-gray-100 transition">
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google Icon"
              className="w-7 h-7"
            />
            <span className="text-gray-700 font-semibold text-xl">S'inscrire avec Google</span>
          </button>

          <div className="relative text-center">
            <span className="text-md text-gray-500 px-3 bg-white z-10 relative">
              Ou s'inscrire avec votre email
            </span>
            <div className="absolute top-1/2 left-0 right-0 border-t border-gray-300 -z-10"></div>
          </div>

          
          <form className="space-y-8">
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Entrez votre email"
                className="mt-2 w-full px-6 py-4 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-lg font-medium text-gray-700">
                Mot de passe
              </label>
              <input
                id="password"
                type="password"
                placeholder="Entrez votre mot de passe"
                className="mt-2 w-full px-6 py-4 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-lg font-medium text-gray-700">
              Retapez le mot de passe
              </label>
              <input
                id="password"
                type="password"
                placeholder="Retapez le mot de passe"
                className="mt-2 w-full px-6 py-4 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
              />
            </div>

            
            <div className="flex items-center justify-between text-lg">
              <label className="flex items-center gap-2 text-gray-700">
                <input type="checkbox" className="rounded" />
                Se souvenir de moi
              </label>
              <a href="/forgotpassword" className="text-purple-500 hover:underline font-semibold">
                Mot de passe oublié ?
              </a>
            </div>

            
            <button
              type="submit"
              className="w-full bg-purple-600 text-white font-bold text-xl py-4 rounded-lg hover:bg-purple-700 shadow-md transition duration-300"
            >
              S'inscrire
            </button>
          </form>

          <p className="text-center text-lg text-gray-600">
            Vous avez déjà un compte ?{" "}
            <a href="/signup" className="text-purple-600 hover:underline font-semibold">
              Connecter-vous
            </a>
          </p>
        </div>
      </div>

      
      <div className="flex-1 hidden lg:flex items-center justify-center bg-purple-50">
        <div className="text-center space-y-4 max-w-sm">
          <h1 className="text-5xl font-extrabold text-purple-600">Bienvenue !</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Inscrivez-vous pour crée votre enfin de démarer votre espace de paiement.
          </p>
        </div>
      </div>
    </div>
  );
}

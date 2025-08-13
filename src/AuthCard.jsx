import { Link } from "react-router-dom";
import "./styles/Auth.css";
export default function AuthCard({ type }) {
  const isLogin = type === "login";

  return (
    <div className="auth-page-bg">
      <div className="auth-container">
        <h2>{isLogin ? "Iniciar Sesión" : "Registrarse"}</h2>
        <form className="auth-form">
          <input type="email" placeholder="Correo electrónico" required />
          <input type="password" placeholder="Contraseña" required />
          {!isLogin && (
            <>
              <input type="text" placeholder="Nombre completo" required />
              <label className="checkbox-label">
                <input type="checkbox" name="isTrainer" />
                Soy entrenador
              </label>
            </>
          )}
          <button type="submit" className="auth-btn">
            {isLogin ? "Entrar" : "Crear cuenta"}
          </button>
        </form>

        <p className="auth-switch">
          {isLogin ? (
            <>
              ¿No tienes una cuenta?{" "}
              <Link to="/register">Regístrate aquí</Link>
            </>
          ) : (
            <>
              ¿Ya tienes una cuenta?{" "}
              <Link to="/login">Inicia sesión aquí</Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
